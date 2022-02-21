import { TripsDto } from './types/trips-dto';
import { TripsService } from './trips.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  async addTrip(@Body() add: TripsDto) {
    return await this.tripsService.addTrip(add);
  }
}
