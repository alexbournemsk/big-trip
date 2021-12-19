var _ = require('../node_modules/lodash');
import {createNavigationTemplate} from './view/navigation.js';
import { createFilterTemplate } from './view/filters.js';
import { createSortTemplate } from './view/sort.js';
import { createTripInfoTemplate } from './view/info.js';
import { createTripCostTemplate } from './view/cost.js';
import { createNewPointTemplate } from './view/new-point.js';
import { createEditPointTemplate } from './view/edit-point.js';
import { pointTemplate } from './view/point.js';
import { generatePoint } from './mock/point.js';

//////////
// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(randomInteger(1,10));
// }
// arr.sort();
// console.log(arr);


// let countby = _.countBy(arr);
// console.log(countby)
//////////

const COUNT = 3;
const DEFAULT_INSERT_POSITION = 'beforeend';
//alert('hi!');
const render = (container,template,place=DEFAULT_INSERT_POSITION) => {
  container.insertAdjacentHTML(place,template);
};


const tripMainElement = document.querySelector('.trip-main');
render(tripMainElement, createTripInfoTemplate(), 'afterbegin');

const tripNavigationElement = document.querySelector('.trip-controls__navigation');
render(tripNavigationElement,createNavigationTemplate());

const tripInfoContainer = tripMainElement.querySelector('.trip-info');
render(tripInfoContainer, createTripCostTemplate());

const tripFiltersElement = document.querySelector('.trip-controls__filters');
render(tripFiltersElement,createFilterTemplate());

const tripEventsElement = document.querySelector('.trip-events');
render(tripEventsElement, createSortTemplate());
render(tripEventsElement, createEditPointTemplate());
render(tripEventsElement, createNewPointTemplate());

for (let i = 0; i < COUNT; i++) {
  render(tripEventsElement, pointTemplate());
}

