export const createNewsArray = (newsCardsArray, cardTemplate, NewsCard, createNewsDate) => {
	return newsCardsArray.map(news => {
		const newsCard = cardTemplate.cloneNode('true').content.querySelector('li');
		return new NewsCard(newsCard, news, createNewsDate).create();
	})
}