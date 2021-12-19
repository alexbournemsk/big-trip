const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomArrayElement = (arr) => arr[randomInteger(0, arr.length - 1)];

const CITIES =
  ['San Francisco', 'Budva', 'Dubrovnik', 'St. Petersburg', 'St. Tropez'];

const POINT_TYPES =
  ['taxi', 'bus', 'train', 'ship', 'transport', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DESCRIPTION_PARTS = ['Designed above a canal, the village is home to kind country people', 'This village wasnt built by a canal by accident, as it has ancient, lost technologies, which is of great importance to the people and its success.', 'With its cobblestone streets and peaceful, tree-lined canals, its not hard to see this place as one big fairytale setting come to life.'];


const offerTypes = [
  {
    type: 'taxi',
    title: 'Upgrade to a business class',
    price: 120,
    isSelected: false
  },

  {
    type: 'taxi',
    title: 'Choose the radio station',
    price: 60,
    isSelected: false

  },

  {
    type: 'bus',
    title: 'Choose meal',
    price: 50,
    isSelected: false

  },

  {
    type: 'bus',
    title: 'Upgrade to comfort class',
    price: 180,
    isSelected: false
  }

];
const filterOffersByType = (type) => {
  const searchTerm = type;
  return offerTypes.filter((offer) => offer.type === searchTerm);
};

console.log(filterOffersByType('bus'));

const generatePicture = () => ({
  src: `http://picsum.photos/248/153?r=${Math.random()}`,
});

const generateDestination = () => ({
  name: getRandomArrayElement(CITIES),
  description: ', is a beautiful city, a true asian pearl, with crowded streets.',
  pictures: [
    {
      src: generatePicture().src,
      description: 'parliament building'
    }
  ]
});

const generateOffers = () => (
  [
    {
      title: getRandomArrayElement(OFFERS),
      price: 180
    }
  ]
);

export const generatePoint = () => (
  {
    basePrice: 1100,
    dateFrom: '14-12-2021',
    dateTo: '14-12-2021',
    destination: generateDestination(),
    id: 0,
    isFavorite: false,
    offers: 0,
    type: getRandomArrayElement(POINT_TYPES)
  });

console.log(generatePoint());
