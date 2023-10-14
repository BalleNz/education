import { Player } from './player.entity';
import { PlayersService } from './players.service';
export declare class PlayersController {
    private readonly PlayersService;
    constructor(PlayersService: PlayersService);
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    update(id: string, updatePlayer: Player): Promise<Player>;
    create(createPlayer: Player): Promise<Player>;
    remove(id: string): void;
    findIncomplete(): Promise<import("./dto/create-incomplete-PlayerDTO").IncompletePlayerDto[]>;
}
