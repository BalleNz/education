import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Club } from './club.entity';
import { ClubsService } from './clubs.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('Clubs')
@ApiTags('Клубы')
export class ClubsController {
    constructor(private readonly ClubsService: ClubsService) {}
@ApiOperation({summary: 'Поиск всех действуюших клубов'})
@Get()
    findAll() {
        return this.ClubsService.findAll();
    }
@ApiOperation({summary: 'Поиск конкретного клуба'})
@Get(':id')
    findOne(@Param('id') id: string) {
      return this.ClubsService.findOne(+id);
    }
@ApiOperation({summary: 'Обновить данные клуба'})
@Put(':id')
    update(@Param('id') id: string, @Body() updateClub: Club) {
      return this.ClubsService.update(+id, updateClub);
    }
@ApiOperation({summary: 'Создать клуб'})
@Post()
    create(@Body() createClub: Club) {
      return this.ClubsService.create(createClub);
    }
@ApiOperation({summary: 'Удаление клуба'})
@Delete(':id')
    remove(@Param('id') id: string) {
      return this.ClubsService.remove(+id);
    }
@ApiOperation({summary: 'Поиск клубов в ограниченном доступе'})
@Get('incomplete')
    findIncomplete() {
      return this.ClubsService.findIncomplete();
    }
}

