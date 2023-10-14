import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from 'src/administration/administrator.entity';
import { Club } from 'src/football clubs/Club.entity';
import { Player } from './Player.entity';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Administrator, Player, Club]),
  ],
})
export class PlayersModule {}
