import { render, RenderPosition } from '../framework/render.js';
import ButtonNewEventView from '../view/button-new-event-view.js';
import TripInfoView from '../view/trip-info-view.js';
import EventsPresenter from './events-presenter.js';
import FilterPresenter from './filter-presenter.js';
import SortPresenter from './sort-presenter.js';

export default class AppPresenter {
  #eventsModel = null;
  #siteTripMainElement = null;
  #siteTripFiltersElement = null;
  #siteTripEventsElement = null;

  constructor({ eventsModel }) {
    this.#eventsModel = eventsModel;
    this.#siteTripMainElement = document.querySelector('.trip-main');
    this.#siteTripFiltersElement = document.querySelector('.trip-controls__filters');
    this.#siteTripEventsElement = document.querySelector('.trip-events');
  }

  init() {
    this.#renderInfo();
    this.#renderFilters();
    this.#renderSort();
    this.#renderEvents();
  }

  #renderInfo() {
    render(new TripInfoView({
      events: this.#eventsModel.events
    }), this.#siteTripMainElement, RenderPosition.AFTERBEGIN);

    render(new ButtonNewEventView(), this.#siteTripMainElement);
  }

  #renderFilters() {
    const filterPresenter = new FilterPresenter({
      container: this.#siteTripFiltersElement,
      eventsModel: this.#eventsModel,
    });

    filterPresenter.init();
  }

  #renderSort() {
    const sortPresenter = new SortPresenter({
      container: this.#siteTripEventsElement,
    });

    sortPresenter.init();
  }

  #renderEvents() {
    const eventsPresenter = new EventsPresenter({
      container: this.#siteTripEventsElement,
      eventsModel: this.#eventsModel,
    });

    eventsPresenter.init();
  }
}
