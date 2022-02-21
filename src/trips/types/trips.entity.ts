import { TripsDto } from './trips-dto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';

@Entity()
export class Trips {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  start_address: string;

  @Column()
  destination_address: string;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;

  @Column({ type: 'date' })
  date: Date;

  @Column('decimal', { precision: 8, scale: 2 })
  distance: number;
}
