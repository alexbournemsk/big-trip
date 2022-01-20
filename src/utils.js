const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomArrayElement = (arr) => arr[randomInteger(0, arr.length - 1)];

const DEFAULT_INSERT_POSITION = 'beforeend';

const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const renderTemplate = (container,template,place=DEFAULT_INSERT_POSITION) => {
  container.insertAdjacentHTML(place,template);
};

const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export {randomInteger, getRandomArrayElement, renderTemplate, renderElement, createElement, RenderPosition};
