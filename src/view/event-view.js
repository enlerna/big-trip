import AbstractView from '../framework/view/abstract-view.js';
import { formatDate, getDatesDiff } from '../utils/date.js';
import { DATE_FORMATS } from '../const.js';

function createOffersTemplate(offers) {
  const offersItemsTemplate = offers.map((offer) => {
    const { title, price } = offer;

    return (
      /*html*/`
        <li class="event__offer">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </li>
      `
    );
  }).join('');

  return (
    /*html*/`
      <ul class="event__selected-offers">
        ${offersItemsTemplate}
      </ul>
    `
  );
}

function createEventTemplate(event) {
  const { type, dateFrom, dateTo, destination, basePrice, isFavorite, offers } = event;

  const timeFrom = formatDate(dateFrom, DATE_FORMATS.time);
  const timeTo = formatDate(dateTo, DATE_FORMATS.time);

  return (
    /*html*/`
      <div class="event">
        <time class="event__date" datetime="${formatDate(dateFrom)}">${formatDate(dateFrom, DATE_FORMATS.two)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${formatDate(dateFrom)}T${timeFrom}">${timeFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="${formatDate(dateTo)}T${timeTo}">${timeTo}</time>
          </p>
          <p class="event__duration">${getDatesDiff(dateTo, dateFrom)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>

        ${createOffersTemplate(offers)}

        <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    `
  );
}

export default class EventView extends AbstractView {
  #handleClick = null;
  #handleFavoriteClick = null;

  constructor({ event, onClick, onFavoriteClick }) {
    super();
    this.event = event;
    this.#handleClick = onClick;
    this.#handleFavoriteClick = onFavoriteClick;

    const rollupBtnEl = this.element.querySelector('.event__rollup-btn');
    rollupBtnEl.addEventListener('click', this.#clickHandler);

    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createEventTemplate(this.event);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick?.();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
