import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Player } from './Player.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Club } from "src/football clubs/club.entity";
import { In, Repository } from "typeorm";
import { CreatePlayerDto } from "./dto/create-PlayerDTO";
import { IncompletePlayerDto } from "./dto/create-incomplete-PlayerDTO";


@Injectable()
export class PlayersService {
    constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Player)
      private readonly PlayerRepository: Repository<Player>, // "внедряем" репозиторий Player в сервис
    @InjectRepository(Club)
      private readonly clubRepository: Repository<Club>, // "внедряем" репозиторий club в сервис
) {}  
    async create(PlayerDto: CreatePlayerDto): Promise<Player>
 {
    //получаем объект CreatePlayerDto
    const Player = this.PlayerRepository.create(); //создаем объект Player из репозитория
    Player.fullname = PlayerDto.fullname; //заполняем поля объекта Player
    Player.position = PlayerDto.position;
    Player.club = PlayerDto.club;
    await this.PlayerRepository.save(Player); //сохраняем объект Player в БД
    return Player; //возвращаем объект Player
  }

  findOne(id: number): Promise<Player> {
    // Promise<Player> - указывает, что функция возвращает объект Player в виде Promise (c асинхронного потока)
    return this.PlayerRepository.findOne({
      //получаем объект Player по id
      where: { id }, //указываем условие поиска по id
    });
  }

    async findAll(): Promise<Player[]> {
      const Players = await this.PlayerRepository.find({}); //получаем массив Player из БД
      return Players; //возвращаем массив Player
    }   
    async findIncomplete(): Promise<IncompletePlayerDto[]> {
      const Players = await this.PlayerRepository.find({}); //получаем массив Player из БД
      const incompletePlayers: IncompletePlayerDto[] = Players.map((Player) => {
        //преобразуем массив Player в массив IncompletePlayerDto
        const incompletePlayer = new IncompletePlayerDto();
        incompletePlayer.id = Player.id;
        incompletePlayer.fullname = Player.fullname;
        return incompletePlayer;
      });
      return incompletePlayers; //возвращаем массив IncompletePlayerDto
    }    
    async update(id: number, updatedPlayer: Player) {
      //получаем объект Player для обновления по id
      const Player = await this.PlayerRepository.findOne({ where: { id } }); //получаем объект Player по id из БД
      Player.fullname = updatedPlayer.fullname; //обновляем поля объекта Player
      Player.position = updatedPlayer.position;
      Player.club = updatedPlayer.club;
      await this.PlayerRepository.save(Player); //сохраняем объект Player в БД
      return Player; //возвращаем объект Player
    }
    remove(id: number) {
      this.PlayerRepository.delete({ id }); //удаляем объект Player из БД
    }
  
}