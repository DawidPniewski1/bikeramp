import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(statsService: StatsService) {}

  @Get('weekly')
  async getWeeklyStats() {}

  @Get('monthly')
  async getMonthlyStats() {}
}
