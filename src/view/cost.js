import { createElement } from '../utils.js';

const createTripCostTemplate = () => `<p class="trip-info__cost">
  Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>
`;

export class TripCost {
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


// export class TripCost {
//   constructor() {
//     this._element = null;
//   }

//   getTemplate() {
//     const element = document.createElement('p');
//     element.classList.add('trip-info__cost');
//     element.innerHTML = 'Total: €&nbsp;<span class="trip-info__cost-value">1230</span>';
//     return element;
//   }

//   getElement() {
//     if (!this._element) {
//       this._element = this.getTemplate();
//     }
//     return this._element;
//   }

// }
