export const createWeekAgoDate = () => {
	const date = new Date();
	date.setDate(date.getDate - 6);
	const oneYear = date.getFullYear();
	const oneMonth = ((date.getDate() + 1 + '').length === 1) ? '0' + ((date.getMonth() + 1)) : (date.getMonth() + 1);
	const oneDay = date.getDate().length === 1 ? '0' + date.getDate() : date.getDate();
	return `${oneYear}-${oneMonth}-${oneDay}`
}