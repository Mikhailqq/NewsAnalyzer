import { RENDER_DAYS } from '../constants/RENDER_DAYS.js';

export const createLastWeekDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - RENDER_DAYS);
    const year = date.getFullYear();
    const month = ((date.getMonth() + 1 + '').length === 1) ? '0' + ((date.getMonth() + 1)) : (date.getMonth() + 1);
    const day = date.getDate().length === 1 ? '0' + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`
}
