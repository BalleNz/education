import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Administrator } from './administrator.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/Player.entity';
import { Club } from 'src/football clubs/Club.entity';

@Module({
  controllers: [AdministratorsController],
  providers: [AdministratorsService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Administrator, Player, Club]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class AdministratorsModule {}

