import { ApiProperty } from '@nestjs/swagger';
import { Club } from 'src/football clubs/Club.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  @ApiProperty({example: 'Зубенко Михаил Петрович', description: "Полное имя"})
  fullname: string;
  @Column()
  @ApiProperty({example: 'Нападающий', description: "Позиция"})
  position: string;
  @Column()
  @ManyToMany((type) => Club, (club) => club.players)
  @JoinTable({
    name: 'clubs',
    joinColumn: { name: 'players' },
    inverseJoinColumn: { name: 'club' },
  })
  @ApiProperty({example: '2', description: "Идентификатор клуба"})
  club: number;
}