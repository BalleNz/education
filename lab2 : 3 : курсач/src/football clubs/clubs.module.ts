import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from 'src/administration/administrator.entity';
import { Player } from 'src/players/Player.entity';
import { Club } from './Club.entity';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Administrator, Player, Club]),
  ],
})
export class ClubsModule {}
