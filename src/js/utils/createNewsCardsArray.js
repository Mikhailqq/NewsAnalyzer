export const createNewsCardsArray = (newsArray, cardTemplate, NewsCard, getActualDate) => {
    return newsArray.map(news => {
        const card = cardTemplate.cloneNode('true').content.querySelector('li');
        return new NewsCard(card, news, getActualDate).getCreate();
    })
}
