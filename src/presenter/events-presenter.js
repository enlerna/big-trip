import { render } from '../framework/render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListEmptyView from '../view/events-list-empty-view.js';
import EventPresenter from './event-presenter.js';
import { updateItem } from '../utils/common.js';

export default class EventsPresenter {
  #eventsListComponent = new EventsListView();
  #container = null;
  #eventsModel = null;
  #eventsData = null;
  #eventPresenters = new Map();

  constructor({ container, eventsModel }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#eventsData = [...this.#eventsModel.events];
    this.#renderEventList();
  }

  #renderEventList() {
    render(this.#eventsListComponent, this.#container);

    if (!this.#eventsData.length) {
      render(new EventsListEmptyView(), this.#eventsListComponent.element);
      return;
    }

    for (let i = 0; i < this.#eventsData.length; i++) {
      this.#renderEvent(this.#eventsData[i]);
    }
  }

  #renderEvent(item) {
    const eventTypes = [...this.#eventsModel.eventTypes];

    const eventPresenter = new EventPresenter({
      eventsListContainer: this.#eventsListComponent.element,
      eventTypes,
      blankEventOffers: this.#eventsModel.getOffers(eventTypes[0], []),
      onDataChange: this.#handleEventChange,
    });

    eventPresenter.init(item);
    this.#eventPresenters.set(item.id, eventPresenter);
  }

  #clearEventList() {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #handleEventChange = (updatedEvent) => {
    this.#eventsData = updateItem(this.#eventsData, updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
  };
}
