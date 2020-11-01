import {MONTH_ARRAY} from '../constants/MONTH_ARRAY.js';

// export function getActualDate(data) {
	// const dateFormat = new Date(date);
	// const oneYear = dateFormat.getFullYear();
	// const oneMonth = dateFormat.getMonth();
	// const oneDay = dateFormat.getDate();
	//
	// return '${oneYear}, ${oneMonth}, ${oneDay}';
	export const getActualDate = (data) => {
  const date = new Date(data);
  return `${date.getDate()} ${MONTH_ARRAY[date.getMonth()]}, ${date.getFullYear()}`
}
