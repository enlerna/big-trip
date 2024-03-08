import AbstractView from '../framework/view/abstract-view.js';

function createEventsListItemTemplate() {
  return '<li class="trip-events__item"></li>';
}

export default class EventsListItemView extends AbstractView {
  get template() {
    return createEventsListItemTemplate();
  }
}
