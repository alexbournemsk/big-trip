import {CITIES, POINT_TYPES, OFFERS__BY_TYPES, PRICES_BY_TYPES, DESCRIPTION_PARTS} from '../const.js';
import {getRandomArrayElement, randomInteger} from '../utils.js';
import dayjs from 'dayjs';


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
      description: 'beautiful view'
    }
  ]
});

const daysGap = randomInteger(-7,7);
const dueDate = () => dayjs().add(daysGap,'day').format('D MMM');

export const generatePoint = () => {
  const type = getRandomArrayElement(POINT_TYPES);
  return (
    {
      type: type,
      basePrice: PRICES_BY_TYPES[type],
      dateFrom: dueDate(),
      dateTo: dueDate(),
      destination: generateDestination(),
      id: 0,
      isFavorite: false,
      offers: filterOffersByType(type),
    });
};
