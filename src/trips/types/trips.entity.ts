import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  date: Date;

  @Column()
  distance: number;
}
