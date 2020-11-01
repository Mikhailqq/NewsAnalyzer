import {WEEK_ARRAY} from '../constants/WEEK_ARRAY.js';

export const createAnaliticsDate = (date) => {
  return `${date.getDate()}, ${WEEK_ARRAY[date.getDay()]}`
}
