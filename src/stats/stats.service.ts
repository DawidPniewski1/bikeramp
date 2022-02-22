import { Trips } from './../trips/types/trips.entity';
import { getRepository } from 'typeorm';
import { DayStats } from './types/stats-monthly';
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

  async getMonthlyStats(): Promise<DayStats[]> {
    let x = await getRepository(Trips)
      .createQueryBuilder()
      .select('date as day')
      .addSelect("CONCAT(SUM(distance), 'km') as total_distance")
      .addSelect("CONCAT(ROUND(AVG(distance), 2), 'km') as avg_ride")
      .addSelect("CONCAT(ROUND(AVG(price),2), 'PLN') as avg_price")
      .groupBy('date')
      .getRawMany();

    x.forEach((element) => {
      element.day =
        element.day.toLocaleString('en', { month: 'long' }) +
        ', ' +
        element.day.getDate() +
        this.addTip(element.day.getDate());
    });

    return x;
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

  addTip(day: number) {
    if (day === 1 || day === 21 || day === 31) {
      return 'st';
    }
    if (day === 2 || day === 22) {
      return 'nd';
    }
    if (day === 3 || day === 23) {
      return 'rd';
    }
    return 'th';
  }
}
