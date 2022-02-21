import { Trips } from './types/trips.entity';
import { getRepository } from 'typeorm';
import { TripsDto } from './types/trips-dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { geocode } from 'opencage-api-client';

@Injectable()
export class TripsService {
  async addTrip(add: TripsDto) {
    const startRes = await geocode({
      key: 'b9f71a6047a94871b4082623e58eb089',
      q: add.start_address,
      limit: 1,
      pretty: 1,
      no_annotations: 1,
      roadinfo: 1,
    });
    const destinationRes = await geocode({
      key: 'b9f71a6047a94871b4082623e58eb089',
      q: add.destination_address,
      limit: 1,
      pretty: 1,
      no_annotations: 1,
    });

    if (startRes.results.length === 0) {
      throw new BadRequestException('invalid start address');
    }
    if (destinationRes.results.length === 0) {
      throw new BadRequestException('invalid destination address');
    }

    const φ1 = (startRes.results[0].geometry.lat * Math.PI) / 180,
      φ2 = (destinationRes.results[0].geometry.lat * Math.PI) / 180,
      Δλ =
        ((destinationRes.results[0].geometry.lng -
          startRes.results[0].geometry.lng) *
          Math.PI) /
        180,
      R = 6371e3;
    const d =
      Math.acos(
        Math.sin(φ1) * Math.sin(φ2) +
          Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ),
      ) * R;

    // let trip = new Trips();
    // trip.date = add.date;
    // trip.start_address = add.start_address;
    // trip.destination_address =

    getRepository(Trips).save({ ...add, distance: d / 1000 });
  }
}
