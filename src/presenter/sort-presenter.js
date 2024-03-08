import { render } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import { sortCriteria as criteria } from '../mock/sort-data.js';

export default class SortPresenter {
  #container = null;
  #criteria = [];

  constructor({ container }) {
    this.#container = container;
    this.#criteria = criteria;
  }

  init() {
    render(new SortView({ criteria: this.#criteria }), this.#container);
  }
}
