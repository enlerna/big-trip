import { filter } from '../utils/filter.js';

function generateFilter(events) {
  return Object.entries(filter).map(
    ([filterType, filterEvents]) => ({
      type: filterType,
      hasEvents: !!(filterEvents(events).length),
    }),
  );
}

export { generateFilter };
