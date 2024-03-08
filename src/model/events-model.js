export default class EventsModel {
  #service = null;
  #events = null;
  #eventTypes = null;

  constructor(service) {
    this.#service = service;
    this.#events = this.#service.events;
    this.#eventTypes = this.#service.eventTypes;
  }

  get events() {
    return this.#events;
  }

  get eventTypes() {
    return this.#eventTypes;
  }

  getOffers(type, idsArr) {
    return this.#service.findOffers(type, idsArr);
  }
}
