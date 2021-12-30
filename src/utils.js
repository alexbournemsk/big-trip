const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomArrayElement = (arr) => arr[randomInteger(0, arr.length - 1)];

export {randomInteger, getRandomArrayElement};
