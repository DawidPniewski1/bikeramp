import { TripsModule } from './trips/trips.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TripsModule],
})
export class AppModule {}
