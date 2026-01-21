import {OfferShort} from '../types/offer.ts';

export const offers: OfferShort[] = [
  {
    id: '1b7f5c3a-6f9e-4e5d-8d9c-1a2b3c4d5e6f',
    title: 'Elegant penthouse with sea view',
    type: 'apartment',
    price: 115,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        zoom: 10
      }
    },
    location: {
      latitude: 41.3909553943508,
      longitude: 2.15309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: '/img/apartment-01.jpg',
  },
  {
    id: '01e2d3c-4b5a-6789-0abc-def123456789',
    title: 'Contemporary suite in vibrant district',
    type: 'room',
    price: 72,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        zoom: 10
      }
    },
    location: {
      latitude: 41.3609553943508,
      longitude: 2.15309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1,
    previewImage: '/img/room.jpg',
  },
  {
    id: '5d4c3b2a-1f0e-4d3c-8b7a-6c5d4e3f2a1b',
    title: 'Luxury villa with private pool',
    type: 'house',
    price: 210,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        zoom: 10
      }
    },
    location: {
      latitude: 41.3909553943508,
      longitude: 2.189309666406198,
      zoom: 15
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: 'c8a7b6d5-e4f3-4a21-9b0c-1d2e3f4a5b6c',
    title: 'Boutique residence in old town',
    type: 'hotel',
    price: 160,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        zoom: 10
      }
    },
    location: {
      latitude: 41.3809553943508,
      longitude: 2.179309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    previewImage: '/img/apartment-03.jpg'
  },
  {
    id: 'c6d9f4b0-8c43-4c38-9e69-7b6cfd2a01f5',
    title: 'Designer apartment in city center',
    type: 'apartment',
    price: 145,
    city: {
      name: 'Madrid',
      location: {
        latitude: 40.4168,
        longitude: -3.7038,
        zoom: 12
      }
    },
    location: {
      latitude: 40.4178,
      longitude: -3.6938,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/apartment-01.jpg',
  },
  {
    id: '1a2b3c4d-5e6f-7081-92a3-b4c5d6e7f809',
    title: 'Chic studio by the plaza',
    type: 'apartment',
    price: 98,
    city: {
      name: 'Rome',
      location: {
        latitude: 41.9028,
        longitude: 12.4964,
        zoom: 12
      }
    },
    location: {
      latitude: 41.9038,
      longitude: 12.5064,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: '8f7e6d5c-4b3a-2910-8f7e-6d5c4b3a2910',
    title: 'Renovated loft with terrace',
    type: 'house',
    price: 180,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.5200,
        longitude: 13.4050,
        zoom: 12
      }
    },
    location: {
      latitude: 52.5220,
      longitude: 13.4150,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/apartment-03.jpg',
  },
  {
    id: '2b7f5c3a-6f9e-4e5d-8d9c-1a2b3c4d5e6f',
    title: 'Sunny flat with balcony',
    type: 'apartment',
    price: 115,
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.2082,
        longitude: 16.3738,
        zoom: 10
      }
    },
    location: {
      latitude: 48.2182,
      longitude: 16.3838,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: '/img/apartment-01.jpg',
  },
  {
    id: '9f1e2d3c-4b5a-6789-0abc-def123456789',
    title: 'Modern room with river view',
    type: 'room',
    price: 88,
    city: {
      name: 'Prague',
      location: {
        latitude: 50.0755,
        longitude: 14.4378,
        zoom: 12
      }
    },
    location: {
      latitude: 50.0765,
      longitude: 14.4478,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    previewImage: '/img/room.jpg',
  },
  {
    id: 'q8a7b6d5-e4f3-4a21-9b0c-1d2e3f4q5b6c',
    title: 'Historic hotel in medieval quarter',
    type: 'hotel',
    price: 160,
    city: {
      name: 'Prague',
      location: {
        latitude: 50.0755,
        longitude: 14.4378,
        zoom: 12
      }
    },
    location: {
      latitude: 50.0775,
      longitude: 14.4478,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    previewImage: '/img/apartment-03.jpg',
  }
];
