export interface StatsMonthly {
  dayStats: DayStats[];
}

export interface DayStats {
  day: string;
  total_distance: string;
  avg_ride: string;
  avg_price: string;
}
