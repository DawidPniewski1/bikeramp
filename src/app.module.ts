import { StatsModule } from './stats/stats.module';
import { TripsModule } from './trips/trips.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), TripsModule, StatsModule],
})
export class AppModule {}
