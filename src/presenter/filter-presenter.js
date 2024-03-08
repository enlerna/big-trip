import { render } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import { generateFilter } from '../mock/filter-data.js';

export default class FilterPresenter {
  #container = null;
  #eventsModel = null;
  #filters = [];

  constructor({ container, eventsModel }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#filters = generateFilter(this.#eventsModel.events);
  }

  init() {
    render(new FilterView({ filters: this.#filters }), this.#container);
  }
}
