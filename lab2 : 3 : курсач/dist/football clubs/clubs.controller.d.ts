import { Club } from './club.entity';
import { ClubsService } from './clubs.service';
export declare class ClubsController {
    private readonly ClubsService;
    constructor(ClubsService: ClubsService);
    findAll(): Promise<Club[]>;
    findOne(id: string): Promise<Club>;
    update(id: string, updateClub: Club): Promise<Club>;
    create(createClub: Club): Promise<Club>;
    remove(id: string): void;
    findIncomplete(): Promise<import("./dto/create-incomplete-ClubDTO").IncompleteClubDto[]>;
}
