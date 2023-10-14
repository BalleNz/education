import { ApiProperty } from '@nestjs/swagger';
import { Administrator } from 'src/administration/administrator.entity';
import { Player } from 'src/players/Player.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clubs')
export class Club {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true }) //поле должно быть уникальным
  @ApiProperty({example: 'ЦСКА', description: "Название клуба"})
  clubName: string;
  @Column()
  @ApiProperty({example: 'улица Щукинская, 6', description: "Адрес клуба"})
  address: string;
  @Column()
  @ApiProperty({example: 'Мы играем лучше всех!', description: "Слоган клуба"})
  slogan: string;
  @Column("int", { array: true })
  @ManyToMany((type) => Administrator, (Administrator) => Administrator.club)
  @JoinTable({
    name: 'administrators',
    joinColumn: { name: 'club' },
    inverseJoinColumn: { name: 'administrators' },
  })
  @ApiProperty({example: '[1, 2, 3]', description: "Массив идентификаторов администрации клуба"})
  administrators: number[];
  @Column("int", { array: true })
  @ManyToMany((type) => Player, (Player) => Player.club)
  @JoinTable({
    name: 'players',
    joinColumn: { name: 'club' },
    inverseJoinColumn: { name: 'players' },
  })
  @ApiProperty({example: '[1, 2, 3]', description: "Массив идентификаторов игроков клуба"})
  players: number[];
}