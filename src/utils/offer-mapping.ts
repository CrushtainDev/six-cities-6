import {CITY_DATA} from '../const/city.ts';
import {MapLocation} from '../types/map-location.ts';
import {OfferFull, OfferShort} from '../types/offer.ts';

const CITY_RENAME: Record<string, string> = {
  Paris: 'Barcelona',
  Cologne: 'Madrid',
  Brussels: 'Rome',
  Amsterdam: 'Berlin',
  Hamburg: 'Vienna',
  Dusseldorf: 'Prague',
};

type OfferWithCity = {
  city: {
    name: string;
    location: MapLocation;
  };
  location: MapLocation;
  id: string;
};

const jitterLocation = (base: MapLocation, seed: string): MapLocation => {
  // Детеминированный сдвиг, чтобы маркеры не накладывались
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  const deltaLat = ((hash % 13) / 10000); // до ~0.0013
  const deltaLng = (((hash >> 3) % 17) / 10000); // до ~0.0017

  return {
    latitude: base.latitude + deltaLat,
    longitude: base.longitude + deltaLng,
    zoom: base.zoom
  };
};

export const mapOfferCity = <T extends OfferWithCity>(offer: T): T => {
  const mappedName = CITY_RENAME[offer.city.name] ?? offer.city.name;
  const mappedLocation = CITY_DATA[mappedName]?.location ?? offer.city.location;
  const mappedPoint = jitterLocation(mappedLocation, offer.id);

  return {
    ...offer,
    city: {
      ...offer.city,
      name: mappedName,
      location: mappedLocation,
    },
    location: mappedPoint,
  };
};

export const mapOffersCities = <T extends OfferWithCity>(offers: T[]): T[] =>
  offers.map(mapOfferCity);

// Узкие типы для удобства импорта
export const mapOfferShort = (offer: OfferShort) => mapOfferCity(offer);
export const mapOfferFull = (offer: OfferFull) => mapOfferCity(offer);
