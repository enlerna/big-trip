import AbstractView from '../framework/view/abstract-view.js';
import { formatDate } from '../utils/date.js';
import { DATE_FORMATS } from '../const.js';

function createTitleTemplate(events) {
  let destinations = events.map((event) => event.destination.name);

  if (destinations.length > 3) {
    destinations = `${destinations.at(0)} &mdash;...&mdash; ${destinations.at(-1)}`;
  } else {
    destinations = destinations.join(' &mdash; ');
  }

  return (
    /*html*/`
      <h1 class="trip-info__title">${destinations}</h1>
    `
  );
}

function createDatesTemplate(events) {
  const monthFromFormatted = formatDate(events.at(0).dateFrom, DATE_FORMATS.four);
  const monthToFormatted = formatDate(events.at(-1).dateTo, DATE_FORMATS.four);
  const dayFromFormatted = formatDate(events.at(0).dateFrom, DATE_FORMATS.five);
  const dayToFormatted = formatDate(events.at(-1).dateTo, DATE_FORMATS.five);

  const dateStr = (monthFromFormatted === monthToFormatted) ?
    `${monthFromFormatted} ${dayFromFormatted}&nbsp;&mdash;&nbsp;${dayToFormatted}` :
    `${monthFromFormatted} ${dayFromFormatted}&nbsp;&mdash;&nbsp;${monthToFormatted} ${dayToFormatted}`;

  return dateStr;
}

function calculateSum(events) {
  return events.reduce(
    (sum, event) => sum + event.basePrice + event.offers.reduce(
      (offersSum, offer) => offersSum + offer.price, 0
    ), 0);
}

function createTripInfoTemplate(events) {
  return (
    `
      <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          ${createTitleTemplate(events)}

          <p class="trip-info__dates">${createDatesTemplate(events)}</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculateSum(events)}</span>
        </p>
      </section>
    `
  );
}

export default class TripInfoView extends AbstractView {
  #events = null;

  constructor({ events }) {
    super();
    this.#events = events;
  }

  get template() {
    return createTripInfoTemplate(this.#events);
  }
}
