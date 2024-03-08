import dayjs from 'dayjs';
import { DATE_FORMATS } from '../const.js';

function isFutureDate(dateFrom) {
  const now = dayjs();
  return now.isBefore(dayjs(dateFrom));
}

// console.log(isFutureDate('2024-01-29T10:32:22.905Z'));

function isPresentDate(dateFrom, dateTo) {
  const now = dayjs();
  const isBeginningSameOrBeforeNow = dayjs(dateFrom).isBefore(now) || dayjs(dateFrom).isSame(now);
  const isEndingSameOrAfterNow = now.isBefore(dayjs(dateTo)) || dayjs(dateTo).isSame(now);
  return isBeginningSameOrBeforeNow && isEndingSameOrAfterNow;
}

// console.log(isPresentDate('2024-01-27T10:32:22.905Z', '2024-01-28T10:32:22.905Z'));

function isPastDate(dateTo) {
  const now = dayjs();
  return dayjs(dateTo).isBefore(now);
}

// console.log(isPastDate('2024-01-28T10:32:22.905Z'));

function formatDate(date, formatType = DATE_FORMATS.one) {
  return date && formatType ? dayjs(date).format(formatType) : '';
}

function getDatesDiff(date1, date2) {
  const dateObj1 = dayjs(date1);
  const dateObj2 = dayjs(date2);
  const minutesDiff = dateObj1.diff(dateObj2, 'minute');
  const genMinutesStr = (minutes) => `${(minutes < 10 ? '0' : '')}${minutes}M`;
  const genHoursStr = (hours) => `${(hours < 10 ? '0' : '')}${hours}H`;
  const genDaysStr = (days) => `${(days < 10 ? '0' : '')}${days}D`;
  const hoursDiff = Math.trunc(minutesDiff / 60);
  const remainder1 = minutesDiff % 60;
  const daysDiff = Math.trunc(hoursDiff / 24);
  const remainder2 = hoursDiff % 24;

  const strArr = [];

  if (minutesDiff >= 60) {
    if (remainder1) {
      strArr.push(genMinutesStr(remainder1));
    }
  } else if (minutesDiff) {
    strArr.push(genMinutesStr(minutesDiff));
  }

  if (hoursDiff >= 23) {
    if (remainder2) {
      strArr.push(genHoursStr(remainder2));
    }
  } else if (hoursDiff) {
    strArr.push(genHoursStr(hoursDiff));
  }

  if (daysDiff) {
    strArr.push(genDaysStr(daysDiff));
  }

  return strArr.reverse().join(' ');
}

export { isFutureDate, isPresentDate, isPastDate, formatDate, getDatesDiff };
