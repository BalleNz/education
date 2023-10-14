import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Administrator } from 'src/administration/Administrator.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Club } from "src/football clubs/club.entity";
import { In, Repository } from "typeorm";
import { CreateAdministratorDto } from "./dto/AdministratorDTO";
import { IncompleteAdministratorDto } from "./dto/incomplete-administrator.dto";


@Injectable()
export class AdministratorsService {
    constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Administrator)
      private readonly administratorRepository: Repository<Administrator>, // "внедряем" репозиторий administrator в сервис
    @InjectRepository(Club)
      private readonly clubRepository: Repository<Club>, // "внедряем" репозиторий club в сервис
) {}  
    async create(AdministratorDto: CreateAdministratorDto): Promise<Administrator>
 {
    //получаем объект CreateadministratorDto
    const administrator = this.administratorRepository.create(); //создаем объект administrator из репозитория
    administrator.fullname = AdministratorDto.fullname; //заполняем поля объекта administrator
    administrator.job = AdministratorDto.job;
    administrator.club = AdministratorDto.club;
    await this.administratorRepository.save(administrator); //сохраняем объект administrator в БД
    return administrator; //возвращаем объект administrator
  }

  findOne(id: number): Promise<Administrator> {
    // Promise<Administrator> - указывает, что функция возвращает объект Administrator в виде Promise (c асинхронного потока)
    return this.administratorRepository.findOne({
      //получаем объект Administrator по id
      where: { id }, //указываем условие поиска по id
    });
  }

    async findAll(): Promise<Administrator[]> {
      const administrators = await this.administratorRepository.find({}); //получаем массив administrator из БД
      return administrators; //возвращаем массив administrator
    }   
    async findIncomplete(): Promise<IncompleteAdministratorDto[]> {
      const Administrators = await this.administratorRepository.find({});
      const incompleteAdministrators: IncompleteAdministratorDto[] = Administrators.map((Administrator) => {
        const incompleteAdministrator = new IncompleteAdministratorDto();
        incompleteAdministrator.id = Administrator.id;
        incompleteAdministrator.fullname = Administrator.fullname;
        return incompleteAdministrator;
      });
      return incompleteAdministrators; //возвращаем массив IncompleteAdministratorDto
    }    
    async update(id: number, updatedAdministrator: Administrator) {
      //получаем объект Administrator для обновления по id
      const Administrator = await this.administratorRepository.findOne({ where: { id } }); //получаем объект Administrator по id из БД
      Administrator.fullname = updatedAdministrator.fullname; //обновляем поля объекта Administrator
      Administrator.job = updatedAdministrator.job;
      Administrator.club = updatedAdministrator.club;
      await this.administratorRepository.save(Administrator); //сохраняем объект Administrator в БД
      return Administrator; //возвращаем объект Administrator
    }
    remove(id: number) {
      this.administratorRepository.delete({ id }); //удаляем объект Administrator из БД
    }
  
}

