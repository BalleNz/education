import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Administrator } from './administrator.entity';
import { AdministratorsService } from './administrators.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('Administrators')
@ApiTags('Администрация')
export class AdministratorsController {
    constructor(private readonly AdministratorsService: AdministratorsService) {}
@ApiOperation({summary: 'Поиск всей администрации'})
@Get()
    findAll() {
        return this.AdministratorsService.findAll();
    }
@ApiOperation({summary: 'Поиск конкретного администратора'})
@Get(':id')
    findOne(@Param('id') id: string) {
      return this.AdministratorsService.findOne(+id);
    }
@ApiOperation({summary: 'Изменить администратора'})
@Put(':id')
    update(@Param('id') id: string, @Body() updateAdministrator: Administrator) {
      return this.AdministratorsService.update(+id, updateAdministrator);
    }
@ApiOperation({summary: 'Добавить нового администратора'})
@Post()
    create(@Body() createAdministrator: Administrator) {
      return this.AdministratorsService.create(createAdministrator);
    }
@ApiOperation({summary: 'Удаление администратора'})
@Delete(':id')
    remove(@Param('id') id: string) {
      return this.AdministratorsService.remove(+id);
    }
@ApiOperation({summary: 'Поиск всей администрации в ограниченном доступе'})
@Get('incomplete')
    findIncomplete() {
      this.AdministratorsService.findIncomplete();
    }
  
}

