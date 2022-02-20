import { TripsService } from './trips.service';
import { Controller, Get } from '@nestjs/common';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get('test')
  async test() {
    return 'hi';
  }
}
