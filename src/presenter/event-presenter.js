import { render, replace, remove } from '../framework/render.js';
import EventsListItemView from '../view/events-list-item-view.js';
import EventView from '../view/event-view.js';
import EventFormView from '../view/event-form-view.js';

export default class EventPresenter {
  #eventsListContainer = null;
  #eventListItemComponent = null;
  #eventComponent = null;
  #eventFormComponent = null;
  #eventItem = null;
  #eventTypes = null;
  #blankEventOffers = null;
  #handleDataChange = null;

  constructor({ eventsListContainer, eventTypes, blankEventOffers, onDataChange }) {
    this.#eventsListContainer = eventsListContainer;
    this.#eventTypes = [...eventTypes];
    this.#blankEventOffers = [...blankEventOffers];
    this.#handleDataChange = onDataChange;
  }

  init(eventItem) {
    this.#eventItem = eventItem;

    const blankEvent = {
      type: this.#eventTypes[0],
      dateFrom: null,
      dateTo: null,
      destination: null,
      basePrice: 0,
      isFavorite: false,
      offers: this.#blankEventOffers,
    };

    const prevEventListItemComponent = this.#eventListItemComponent;
    const prevEventComponent = this.#eventComponent;
    const prevEventFormComponent = this.#eventFormComponent;

    this.#eventListItemComponent = new EventsListItemView();

    this.#eventComponent = new EventView({
      event: this.#eventItem,
      onClick: this.#replaceEventToForm,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#eventFormComponent = new EventFormView({
      event: this.#eventItem || blankEvent,
      eventTypes: this.#eventTypes,
      onSubmit: this.#replaceFormToEvent,
      onClick: this.#replaceFormToEvent,
    });

    if (prevEventListItemComponent === null
        || prevEventComponent === null
        || prevEventFormComponent === null
    ) {
      this.#renderEvent();
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#eventsListContainer.contains(prevEventListItemComponent.element)) {
      replace(this.#eventListItemComponent, prevEventListItemComponent);
    }

    if (this.#eventsListContainer.contains(prevEventComponent.element)) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#eventsListContainer.contains(prevEventFormComponent.element)) {
      replace(this.#eventFormComponent, prevEventFormComponent);
    }

    remove(prevEventListItemComponent);
    remove(prevEventComponent);
    remove(prevEventFormComponent);
  }

  #renderEvent() {
    render(this.#eventComponent, this.#eventListItemComponent.element);
    render(this.#eventListItemComponent, this.#eventsListContainer);
  }

  destroy() {
    remove(this.#eventListItemComponent);
    remove(this.#eventComponent);
    remove(this.#eventFormComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToEvent();
    }
  };

  #replaceEventToForm = () => {
    replace(this.#eventFormComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replaceFormToEvent = () => {
    replace(this.#eventComponent, this.#eventFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#eventItem, isFavorite: !this.#eventItem.isFavorite});
  };
}
