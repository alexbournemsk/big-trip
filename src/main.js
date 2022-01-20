//const _ = require('../node_modules/lodash');

import {createNavigationTemplate} from './view/navigation.js';
import { createFilterTemplate } from './view/filters.js';
import { createSortTemplate } from './view/sort.js';
import { createTripInfoTemplate } from './view/info.js';
import { TripCost } from './view/cost.js';
import { createNewPointTemplate } from './view/new-point.js';
import { EditPoint } from './view/edit-point.js';
import { Point } from './view/point.js';
import { renderTemplate, renderElement, RenderPosition} from './utils.js';


const MOCK_POINTS_COUNT = 10; //Number of generated mockpoints


const tripMainElement = document.querySelector('.trip-main');
renderTemplate(tripMainElement, createTripInfoTemplate(), 'afterbegin');

const tripNavigationElement = document.querySelector('.trip-controls__navigation');
renderTemplate(tripNavigationElement,createNavigationTemplate());

const tripCostComponent = new TripCost();
const tripInfoContainer = tripMainElement.querySelector('.trip-info');
renderElement(tripInfoContainer, tripCostComponent.getElement(), RenderPosition.BEFOREEND);

const tripFiltersElement = document.querySelector('.trip-controls__filters');
renderTemplate(tripFiltersElement,createFilterTemplate());

const tripEventsElement = document.querySelector('.trip-events');
renderTemplate(tripEventsElement, createSortTemplate());

const editPointComponent = new EditPoint();
renderElement(tripEventsElement, editPointComponent.getElement(), RenderPosition.AFTERBEGIN);

renderTemplate(tripEventsElement, createNewPointTemplate());

for (let i = 0; i < MOCK_POINTS_COUNT; i++) {
  const pointComponent = new Point();
  renderElement(tripEventsElement, pointComponent.getElement(), RenderPosition.BEFOREEND);
}

