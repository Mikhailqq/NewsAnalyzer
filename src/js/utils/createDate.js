import {MONTH_ARRAY} from '../constants/MONTH_ARRAY.js'

export const createDate = (data) => {
	const date = new Date(data);
	return `${date.getDate()}, ${MONTH_ARRAY[date.getMonth()]}, ${date.getFullYear()}`
}