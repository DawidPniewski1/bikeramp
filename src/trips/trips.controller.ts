import { TripsDto } from './types/trips-dto';
import { Trips } from './types/trips.entity';
import { TripsService } from './trips.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { getRepository } from 'typeorm';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  async addTrip(@Body() add: TripsDto) {}
}
