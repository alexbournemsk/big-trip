import { getRandomArrayElement, randomInteger } from './utils';

const CITIES =
  ['San Francisco', 'Budva', 'Dubrovnik', 'St. Petersburg', 'St. Tropez'];

const POINT_TYPES =
  ['taxi', 'bus', 'train', 'ship', 'transport', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DESCRIPTION_PARTS = ['Designed above a canal, the town is home to kind country people', 'It is a beautiful place, a true asian pearl with crowded streets', 'With its cobblestone streets and peaceful, tree-lined canals, its not hard to see this place as one big fairytale setting come to life.'];


const OFFERS__BY_TYPES = [
  {
    type: 'taxi',
    title: 'Upgrade to a business class',
    price: 120,
    isSelected: randomInteger(0,1)
  },

  {
    type: 'taxi',
    title: 'Choose the radio station',
    price: 60,
    isSelected: randomInteger(0,1)

  },

  {
    type: 'bus',
    title: 'Choose meal',
    price: 50,
    isSelected: randomInteger(0,1)

  },

  {
    type: 'bus',
    title: 'Upgrade to comfort class',
    price: 180,
    isSelected: randomInteger(0,1)
  },

  {
    type: 'flight',
    title: 'Upgrade to business class',
    price: 180,
    isSelected: randomInteger(0,1)
  },

  {
    type: 'flight',
    title: 'Choose meal',
    price: 15,
    isSelected: randomInteger(0,1)
  },

  {
    type: 'flight',
    title: 'Add luggage',
    price: 45,
    isSelected: randomInteger(0,1)
  },

  {
    type: 'flight',
    title: 'Choose seats',
    price: 15,
    isSelected: randomInteger(0,1)
  }

];

export {CITIES, POINT_TYPES, OFFERS__BY_TYPES, DESCRIPTION_PARTS};
