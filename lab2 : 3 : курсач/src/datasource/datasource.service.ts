import { Injectable } from '@nestjs/common';
import { Administrator } from 'src/administration/administrator.entity';
import { Club } from 'src/football clubs/Club.entity';
import { Player } from 'src/players/Player.entity';

@Injectable()
export class DatasourceService {
  private Administrators: Administrator[] = [];
  private Clubs: Club[] = [];
  private Players: Player[] = [];

  getAdministrators(): Administrator[] {
    return this.Administrators;
  }
  getClubs(): Club[] {
    return this.Clubs;
  }
  getPlayers(): Player[] {
    return this.Players;
  }
}