import { DatasourceService } from 'src/datasource/datasource.service';
import { Club } from './Club.entity';
import { Repository } from "typeorm";
import { CreateClubDto } from "./dto/create-ClubDTO";
import { IncompleteClubDto } from "./dto/create-incomplete-ClubDTO";
export declare class ClubsService {
    private readonly datasourceService;
    private readonly ClubRepository;
    constructor(datasourceService: DatasourceService, ClubRepository: Repository<Club>);
    create(ClubDto: CreateClubDto): Promise<Club>;
    findOne(id: number): Promise<Club>;
    findAll(): Promise<Club[]>;
    findIncomplete(): Promise<IncompleteClubDto[]>;
    update(id: number, updatedClub: Club): Promise<Club>;
    remove(id: number): void;
}
