import {MONTH_ARRAY} from '../constants/MONTH_ARRAY.js'

export const createMonth = (date) => {
  const month = new Date(date).getMonth();
  return MONTH_ARRAY[month];
}
