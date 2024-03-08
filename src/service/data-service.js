import { getRandomArrayElement } from '../utils/common.js';
import { EVENT_COUNT } from '../const.js';
import { mockEvents, mockDestinations, mockOffers } from '../mock/mock-data.js';

export default class DataService {
  #events = [];
  #destinations = [];
  #offers = [];

  constructor() {
    this.#events = [...mockEvents];
    this.#destinations = [...mockDestinations];
    this.#offers = [...mockOffers];
  }

  findDestination(id) {
    return this.#destinations.find((item) => item.id === id);
  }

  findOffers(type, idsArr) {
    const offerObj = this.#offers.find((item) => item.type === type);

    const offers = offerObj.offers.map((item) => {
      const isChecked = idsArr.includes(item.id);

      return {
        ...item,
        isChecked,
      };
    });

    return offers;
  }

  getRandomEvent() {
    const randomEvent = getRandomArrayElement(this.#events);
    const destinationObj = this.findDestination(randomEvent.destination);
    const offersArr = this.findOffers(randomEvent.type, randomEvent.offers);

    const newRandomEvent = {
      ...randomEvent,
      destination: {...destinationObj},
      offers: [...offersArr],
    };

    return newRandomEvent;
  }

  get events() {
    return Array.from({ length: EVENT_COUNT }, this.getRandomEvent.bind(this));
  }

  get eventTypes() {
    return this.#offers.map((offer) => offer.type);
  }
}
