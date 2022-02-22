import { DayStats } from './types/stats-monthly';
import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsWeekly } from './types/stats-weekly';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('weekly')
  async getWeeklyStats(): Promise<StatsWeekly> {
    return await this.statsService.getWeeklyStats();
  }

  @Get('monthly')
  async getMonthlyStats(): Promise<DayStats[]> {
    return await this.statsService.getMonthlyStats();
  }
}
