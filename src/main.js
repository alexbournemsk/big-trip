//const _ = require('../node_modules/lodash');

import { generatePoint } from './mock/point-data.js';
import NavigationView from './view/navigation.js';
import FiltersView from './view/filters.js';
import SortView from './view/sort.js';
import TripInfoView from './view/info.js';
import TripCostView from './view/cost.js';
import EditPointView from './view/edit-point.js';
// import NewPointView from './view/new-point.js';
import PointView from './view/point.js';
import {render, RenderPosition} from './utils.js';


const MOCK_POINTS_COUNT = 10; //Number of generated mock points

const tripMainElement = document.querySelector('.trip-main');
const tripInfoComponent = new TripInfoView();
render(tripMainElement, tripInfoComponent.getElement(), RenderPosition.AFTERBEGIN);

const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const navigationComponent = new NavigationView();
render(tripNavigationElement, navigationComponent.getElement(), RenderPosition.BEFOREEND);

const tripInfoContainer = tripMainElement.querySelector('.trip-info');
const tripCostComponent = new TripCostView();
render(tripInfoContainer, tripCostComponent.getElement(), RenderPosition.BEFOREEND);

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const filtersComponent = new FiltersView();
render(tripFiltersElement,filtersComponent.getElement(), RenderPosition.BEFOREEND);

const tripBoardElement = document.querySelector('.trip-events');
const sortComponent = new SortView();
render(tripBoardElement, sortComponent.getElement(), RenderPosition.BEFOREEND);

// const editPointComponent = new EditPointView();
// render(tripEventsElement, editPointComponent.getElement(), RenderPosition.AFTERBEGIN);

// const NewPointComponent = new NewPointView();
// render(tripEventsElement, NewPointComponent.getElement(), RenderPosition.AFTERBEGIN);


const renderNewPoint = () => {
  const pointData = generatePoint();
  const pointEditorComponent = new EditPointView(pointData);
  const pointViewComponent = new PointView(pointData);

  const changeViewToEdit = () => {
    tripBoardElement.replaceChild(pointEditorComponent.getElement(), pointViewComponent.getElement());
  };

  const changeEditToView = () => {
    tripBoardElement.replaceChild(pointViewComponent.getElement(),pointEditorComponent.getElement());
  };

  // const clearValue = () => {
  //   const element = pointEditorComponent.getElement().querySelector('#event-destination-1');
  //   console.log(element.value);
  //   element.value = '';
  //   console.log(element.value);

  // };

  pointViewComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click',changeViewToEdit);
  pointEditorComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click',changeEditToView);
  pointEditorComponent.getElement().querySelector('.event--edit').addEventListener('submit',changeEditToView);
  pointEditorComponent.getElement().querySelector('.event__reset-btn').addEventListener('click',changeEditToView);

  render(tripBoardElement, pointViewComponent.getElement(), RenderPosition.BEFOREEND);

};

for (let i = 0; i < MOCK_POINTS_COUNT; i++) {
  renderNewPoint();
}

