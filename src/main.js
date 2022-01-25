//const _ = require('../node_modules/lodash');

import { render, RenderPosition } from './utils.js';
import pointsArray from './mock/point-data.js';
import NavigationView from './view/navigation.js';
import FiltersView from './view/filters.js';
import ListEmptyView from './view/list-empty.js';
import SortView from './view/sort.js';
import TripInfoView from './view/info.js';
import TripCostView from './view/cost.js';
import EditPointView from './view/edit-point.js';
import PointView from './view/point.js';
// import NewPointView from './view/new-point.js';


const tripMainElement = document.querySelector('.trip-main');
const tripInfoComponent = new TripInfoView();

//Информация о туре показывается только если массив с данными не пустой
if (pointsArray.length) { render(tripMainElement, tripInfoComponent.getElement(), RenderPosition.AFTERBEGIN); }

const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const navigationComponent = new NavigationView();
render(tripNavigationElement, navigationComponent.getElement(), RenderPosition.BEFOREEND);

const tripInfoContainer = tripMainElement.querySelector('.trip-info');
const tripCostComponent = new TripCostView();

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const filtersComponent = new FiltersView();
render(tripFiltersElement, filtersComponent.getElement(), RenderPosition.BEFOREEND);

const tripBoardElement = document.querySelector('.trip-events');
const sortComponent = new SortView();
// render(tripBoardElement, sortComponent.getElement(), RenderPosition.BEFOREEND);


const renderNewPoint = (pointData) => {
  const pointEditorComponent = new EditPointView(pointData);
  const pointViewComponent = new PointView(pointData);

  const changeEditToView = () => {
    tripBoardElement.replaceChild(pointViewComponent.getElement(), pointEditorComponent.getElement());

  };

  const changeViewToEdit = () => {
    tripBoardElement.replaceChild(pointEditorComponent.getElement(), pointViewComponent.getElement());
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        changeEditToView();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    document.addEventListener('keydown', onEscKeyDown);
  };

  pointViewComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', changeViewToEdit);
  pointEditorComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', changeEditToView);
  pointEditorComponent.getElement().querySelector('.event--edit').addEventListener('submit', changeEditToView);
  pointEditorComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', changeEditToView);

  render(tripBoardElement, pointViewComponent.getElement(), RenderPosition.BEFOREEND);

};

const renderBoard = (arr) => {
  if (arr.length === 0) {
    render(tripBoardElement, new ListEmptyView().getElement(), RenderPosition.BEFOREEND);
  } else {
    render(tripInfoContainer, tripCostComponent.getElement(), RenderPosition.BEFOREEND);
    render(tripBoardElement, sortComponent.getElement(), RenderPosition.BEFOREEND);

    for (let i = 0; i < arr.length; i++) {
      renderNewPoint(arr[i]);
    }
  }
};

renderBoard(pointsArray);
