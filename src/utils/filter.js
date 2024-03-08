import { FilterType } from '../const.js';
import { isFutureDate, isPresentDate, isPastDate } from './date.js';

const filter = {
  [FilterType.EVERYTHING]: (events) => events,
  [FilterType.FUTURE]: (events) => events.filter((event) => isFutureDate(event.dateFrom)),
  [FilterType.PRESENT]: (events) => events.filter((event) => isPresentDate(event.dateFrom, event.dateTo)),
  [FilterType.PAST]: (events) => events.filter((event) => isPastDate(event.dateTo)),
};

export { filter };
