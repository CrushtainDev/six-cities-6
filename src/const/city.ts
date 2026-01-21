import {City} from '../types/city.ts';

export const CITY_DATA: Record<string, City> = {
  Barcelona: {
    name: 'Barcelona',
    location: {
      latitude: 41.3851,
      longitude: 2.1734,
      zoom: 12,
    },
  },
  Madrid: {
    name: 'Madrid',
    location: {
      latitude: 40.4168,
      longitude: -3.7038,
      zoom: 12,
    },
  },
  Rome: {
    name: 'Rome',
    location: {
      latitude: 41.9028,
      longitude: 12.4964,
      zoom: 12,
    },
  },
  Berlin: {
    name: 'Berlin',
    location: {
      latitude: 52.5200,
      longitude: 13.4050,
      zoom: 10,
    },
  },
  Vienna: {
    name: 'Vienna',
    location: {
      latitude: 48.2082,
      longitude: 16.3738,
      zoom: 12,
    },
  },
  Prague: {
    name: 'Prague',
    location: {
      latitude: 50.0755,
      longitude: 14.4378,
      zoom: 12,
    },
  },
};


export const CITY_NAMES: readonly string[] = [
  'Barcelona',
  'Madrid',
  'Rome',
  'Berlin',
  'Vienna',
  'Prague'
];
