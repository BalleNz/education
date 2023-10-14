import { DatasourceService } from 'src/datasource/datasource.service';
import { Administrator } from 'src/administration/Administrator.entity';
import { Club } from "src/football clubs/club.entity";
import { Repository } from "typeorm";
import { CreateAdministratorDto } from "./dto/AdministratorDTO";
import { IncompleteAdministratorDto } from "./dto/incomplete-administrator.dto";
export declare class AdministratorsService {
    private readonly datasourceService;
    private readonly administratorRepository;
    private readonly clubRepository;
    constructor(datasourceService: DatasourceService, administratorRepository: Repository<Administrator>, clubRepository: Repository<Club>);
    create(AdministratorDto: CreateAdministratorDto): Promise<Administrator>;
    findOne(id: number): Promise<Administrator>;
    findAll(): Promise<Administrator[]>;
    findIncomplete(): Promise<IncompleteAdministratorDto[]>;
    update(id: number, updatedAdministrator: Administrator): Promise<Administrator>;
    remove(id: number): void;
}
