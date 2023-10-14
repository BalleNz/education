import { DatasourceService } from 'src/datasource/datasource.service';
import { Player } from './Player.entity';
import { Club } from "src/football clubs/club.entity";
import { Repository } from "typeorm";
import { CreatePlayerDto } from "./dto/create-PlayerDTO";
import { IncompletePlayerDto } from "./dto/create-incomplete-PlayerDTO";
export declare class PlayersService {
    private readonly datasourceService;
    private readonly PlayerRepository;
    private readonly clubRepository;
    constructor(datasourceService: DatasourceService, PlayerRepository: Repository<Player>, clubRepository: Repository<Club>);
    create(PlayerDto: CreatePlayerDto): Promise<Player>;
    findOne(id: number): Promise<Player>;
    findAll(): Promise<Player[]>;
    findIncomplete(): Promise<IncompletePlayerDto[]>;
    update(id: number, updatedPlayer: Player): Promise<Player>;
    remove(id: number): void;
}
