import AbstractView from './abstract.js';

const listEmptyTemplate = () => (`<p class="trip-events__msg">Click New Event to create your first point</p>

<!--
  Значение отображаемого текста зависит от выбранного фильтра:
    * Everything – 'Click New Event to create your first point'
    * Past — 'There are no past events now';
    * Future — 'There are no future events now'.
-->
`);


export default class ListEmpty extends AbstractView {

  getTemplate() {
    return listEmptyTemplate();
  }
}
