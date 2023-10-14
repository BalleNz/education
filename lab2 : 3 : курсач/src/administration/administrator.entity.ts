import { ApiProperty } from '@nestjs/swagger';
import { Club } from 'src/football clubs/Club.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('administrators') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Administrator {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  @ApiProperty({example: '1', description: "Полное имя"})
  fullname: string;
  @Column()
  @ApiProperty({example: '1', description: "Выполняемая работа"})
  job: string;
  @Column()
  @ManyToMany((type) => Club, (club) => club.administrators)
  @JoinTable({
    name: 'clubs',
    joinColumn: { name: 'administrators' },
    inverseJoinColumn: { name: 'club' },
  })
  @ApiProperty({example: '2', description: "Уникальный идентификатор клуба"})
  club: number;
}