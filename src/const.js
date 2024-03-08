const EVENT_COUNT = 4;

const DATE_FORMATS = {
  one: 'YYYY-MM-DD',
  two: 'MMM D',
  three: 'DD/MM/YY',
  four: 'MMM',
  five: 'D',
  time: 'HH:mm'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export { EVENT_COUNT, DATE_FORMATS, FilterType };
