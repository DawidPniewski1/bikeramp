import { IsDate, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class TripsDto {
  @IsNotEmpty()
  start_address: string;

  @IsNotEmpty()
  destination_address: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
