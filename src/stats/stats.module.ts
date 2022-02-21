import { StatsController } from './stats.controller';
import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';

@Module({
  imports: [],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
