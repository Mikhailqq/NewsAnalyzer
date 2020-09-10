export const createCurrentDate = () => {
	const date = new Date();
	const oneYear = date.getFullYear();
	const oneMonth = ((date.getDate() + 1 + '').length === 1) ? '0' + ((date.getMonth() + 1)) : (date.getMonth() + 1);
	const oneDay = date.getDate().length === 1 ? '0' + date.getDate() : date.getDate();
	return `${oneYear}-${oneMonth}-${oneDay}`
}