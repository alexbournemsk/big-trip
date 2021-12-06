import {createNavigationTemplate} from './view/navigation.js';

//alert('hi!')
const render = (container,template,place) => {
  container.insertAdjacentHTML(place,template);
};

const tripMainElement = document.querySelector('trip-main');
const tripNavigationElement = document.querySelector('trip-controls__navigation');
console.log(tripMainElement);
console.log(tripNavigationElement);

render(tripNavigationElement,createNavigationTemplate,'beforeend');

