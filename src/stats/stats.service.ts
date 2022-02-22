import { Trips } from './../trips/types/trips.entity';
import { getRepository, LessThan, MoreThan } from 'typeorm';
import { StatsMonthly } from './types/stats-monthly';
import { StatsWeekly } from './types/stats-weekly';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  async getWeeklyStats(): Promise<StatsWeekly> {
    const today = new Date();
    let weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - (today.getDay() - 1));

    return await getRepository(Trips)
      .createQueryBuilder()
      .select("CONCAT(SUM(distance), 'km') as total_distance")
      .addSelect("CONCAT(SUM(price), 'PLN') as total_price")
      .where('date >= :start', { start: this.dateInRMDFormat(weekStart) })
      .getRawOne();
  }

  async getMonthlyStats(): Promise<StatsMonthly> {
    return;
  }

  dateInRMDFormat(date: Date) {
    let day, month;
    if (date.getDate() < 10) {
      day = '0' + date.getDate();
    } else {
      day = date.getDate();
    }

    if (date.getMonth() + 1 < 10) {
      month = '0' + (date.getMonth() + 1);
    } else {
      month = date.getMonth() + 1;
    }
    return date.getFullYear() + '-' + month + '-' + day;
  }
}
