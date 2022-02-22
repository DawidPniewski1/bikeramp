import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsMonthly } from './types/stats-monthly';
import { StatsWeekly } from './types/stats-weekly';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('weekly')
  async getWeeklyStats(): Promise<StatsWeekly> {
    return await this.statsService.getWeeklyStats();
  }

  @Get('monthly')
  async getMonthlyStats(): Promise<StatsMonthly> {
    return await this.statsService.getMonthlyStats();
  }
}
