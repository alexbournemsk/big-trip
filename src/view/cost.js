import { createElement } from '../utils.js';
import pointsArray from '../mock/point-data.js';

const totalSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].basePrice;
  }
  return sum;
};


const createTripCostTemplate = () => `<p class="trip-info__cost">
  Total: €&nbsp;<span class="trip-info__cost-value">${totalSum(pointsArray)}</span>
  </p>
`;

export default class TripCost {
  constructor() {
    this._element = null;}

  getTemplate() {
    return createTripCostTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

}


