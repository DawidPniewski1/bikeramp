import { Trips } from './types/trips.entity';
import { TripsService } from './trips.service';
import { Controller, Get } from '@nestjs/common';
import { getConnection, getRepository } from 'typeorm';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get('test')
  async test() {
    const dbTest = new Trips();
    dbTest.date = new Date();
    dbTest.destination_address = 'adr test';
    dbTest.distance = 10;
    dbTest.price = 12;
    dbTest.start_address = 'adr test';

    getRepository(Trips).save(dbTest);
  }
}
