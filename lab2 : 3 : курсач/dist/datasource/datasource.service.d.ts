import { Administrator } from 'src/administration/administrator.entity';
import { Club } from 'src/football clubs/Club.entity';
import { Player } from 'src/players/Player.entity';
export declare class DatasourceService {
    private Administrators;
    private Clubs;
    private Players;
    getAdministrators(): Administrator[];
    getClubs(): Club[];
    getPlayers(): Player[];
}
