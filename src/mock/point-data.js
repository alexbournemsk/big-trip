import {CITIES, POINT_TYPES, OFFERS__BY_TYPES, DESCRIPTION_PARTS} from '../const.js';
import { getRandomArrayElement } from '../utils.js';

const filterOffersByType = (type) => {
  const searchTerm = type;
  return OFFERS__BY_TYPES.filter((offer) => offer.type === searchTerm);
};

const generatePicture = () => ({
  src: `http://picsum.photos/248/153?r=${Math.random()}`,
});

const generateDestination = () => ({
  name: getRandomArrayElement(CITIES),
  description: getRandomArrayElement(DESCRIPTION_PARTS),
  pictures: [
    {
      src: generatePicture().src,
      description: 'parliament building'
    }
  ]
});

export const generatePoint = () => {
  const type = getRandomArrayElement(POINT_TYPES);
  return (
    {
      type: type,
      basePrice: 1100,
      dateFrom: '14-12-2021',
      dateTo: '14-12-2021',
      destination: generateDestination(),
      id: 0,
      isFavorite: false,
      offers: filterOffersByType(type),
    });
};
