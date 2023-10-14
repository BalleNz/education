import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Club } from './Club.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreateClubDto } from "./dto/create-ClubDTO";
import { IncompleteClubDto } from "./dto/create-incomplete-ClubDTO";

@Injectable()
export class ClubsService {
    constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Club)
      private readonly ClubRepository: Repository<Club>, // "внедряем" репозиторий Club в сервис
) {}  
  async create(ClubDto: CreateClubDto): Promise<Club>
 {
    //получаем объект CreateClubDto
    const Club = this.ClubRepository.create(); //создаем объект Club из репозитория
    Club.clubName = ClubDto.clubName; //заполняем поля объекта Club
    Club.address = ClubDto.address;
    Club.slogan = ClubDto.slogan;
    Club.administrators = ClubDto.administrators;
    Club.players = ClubDto.players;
    await this.ClubRepository.save(Club); //сохраняем объект Club в БД
    return Club; //возвращаем объект Club
  }

  findOne(id: number): Promise<Club> {
    // Promise<Club> - указывает, что функция возвращает объект Club в виде Promise (c асинхронного потока)
    return this.ClubRepository.findOne({
      //получаем объект Club по id
      where: { id }, //указываем условие поиска по id
    });
  }

  async findAll(): Promise<Club[]> {
      const Clubs = await this.ClubRepository.find({}); //получаем массив Club из БД
      return Clubs; //возвращаем массив Club
  }   
  async findIncomplete(): Promise<IncompleteClubDto[]> {
      const Clubs = await this.ClubRepository.find({}); //получаем массив Club из БД
      const incompleteClubs: IncompleteClubDto[] = Clubs.map((Club) => {
        //преобразуем массив Club в массив IncompleteClubDto
        const incompleteClub = new IncompleteClubDto();
        incompleteClub.id = Club.id;
        incompleteClub.clubName = Club.clubName;
        incompleteClub.slogan = Club.slogan;
        return incompleteClub;
      });
      return incompleteClubs; //возвращаем массив IncompleteClubDto
  }    
  async update(id: number, updatedClub: Club) {
      //получаем объект Club для обновления по id
      const Club = await this.ClubRepository.findOne({ where: { id } }); //получаем объект Club по id из БД
      Club.clubName = updatedClub.clubName; //заполняем поля объекта Club
      Club.address = updatedClub.address;
      Club.slogan = updatedClub.slogan;
      Club.administrators = updatedClub.administrators;
      Club.players = updatedClub.players;
      await this.ClubRepository.save(Club); //сохраняем объект Club в БД
      return Club; //возвращаем объект Club
  }
  remove(id: number) {
      this.ClubRepository.delete({ id }); //удаляем объект Club из БД
  }
  
}

