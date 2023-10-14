import { Administrator } from './administrator.entity';
import { AdministratorsService } from './administrators.service';
export declare class AdministratorsController {
    private readonly AdministratorsService;
    constructor(AdministratorsService: AdministratorsService);
    findAll(): Promise<Administrator[]>;
    findOne(id: string): Promise<Administrator>;
    update(id: string, updateAdministrator: Administrator): Promise<Administrator>;
    create(createAdministrator: Administrator): Promise<Administrator>;
    remove(id: string): void;
    findIncomplete(): void;
}
