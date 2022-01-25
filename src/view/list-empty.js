import { createElement } from '../utils.js';

const listEmptyTemplate = () => (`<p class="trip-events__msg">Click New Event to create your first point</p>

<!--
  Значение отображаемого текста зависит от выбранного фильтра:
    * Everything – 'Click New Event to create your first point'
    * Past — 'There are no past events now';
    * Future — 'There are no future events now'.
-->
`);


export default class ListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return listEmptyTemplate();
  }

  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
}
