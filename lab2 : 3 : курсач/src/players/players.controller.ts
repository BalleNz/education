import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Player } from './player.entity';
import { PlayersService } from './players.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('Players')
@ApiTags('Игроки')
export class PlayersController {
    constructor(private readonly PlayersService: PlayersService) {}
@ApiOperation({summary: 'Поиск всех игроков'})
@Get()
    findAll() {
        return this.PlayersService.findAll();
    }
@ApiOperation({summary: 'Поиск конкретного игрока'})
@Get(':id')
    findOne(@Param('id') id: string) {
      return this.PlayersService.findOne(+id);
    }
@ApiOperation({summary: 'Обновить данные игрока'})
@Put(':id')
    update(@Param('id') id: string, @Body() updatePlayer: Player) {
      return this.PlayersService.update(+id, updatePlayer);
    }
@ApiOperation({summary: 'Создать нового игрока'})
@Post()
    create(@Body() createPlayer: Player) {
      return this.PlayersService.create(createPlayer);
    }
@ApiOperation({summary: 'Удалить игрока'})
@Delete(':id')
    remove(@Param('id') id: string) {
      return this.PlayersService.remove(+id);
    }
@ApiOperation({summary: 'Поиск всех игроков в ограниченном доступе'})
@Get('incomplete')
    findIncomplete() {
      return this.PlayersService.findIncomplete();
    }
}

