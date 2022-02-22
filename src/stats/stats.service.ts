import { StatsMonthly } from './types/stats-monthly';
import { StatsWeekly } from './types/stats-weekly';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  async getWeeklyStats(): Promise<StatsWeekly> {
    return;
  }

  async getMonthlyStats(): Promise<StatsMonthly> {
    return;
  }
}
