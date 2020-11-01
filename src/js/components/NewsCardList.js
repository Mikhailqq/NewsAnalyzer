class NewsCardList {
    constructor(newsSection, newsCardsContainer, paginationButton) {
        this._newsSection = newsSection;
        this._newsCardsContainer = newsCardsContainer;
        this._paginationButton = paginationButton;
        this._newCardNews = null;
        this._setHandlers();
    }

    _setNewCardArray = (newCardNews) => {
        this._newCardNews = newCardNews;
    }

    toggleNewsSection = (state) => {
        if (state) {
            this._newsSection.classList.add('news_visible')
        } else {
            this._newsSection.classList.remove('news_visible');
        }
    }

    _pagination = () => {
        const addNewCards = [];
        for (let i = 0; i < 3; i++) {
            addNewCards.push(this._newCardNews.pop())
        }
        this._render(addNewCards);
        if (this._newCardNews.length === 0) {
            this._togglePaginationButton(false);
        }
    }

    inithialCards = (newsCardsArray) => {
        this.toggleNewsSection(true);
        this._setNewCardArray(newsCardsArray);
        this._pagination();
    }

    _render = (cards) => {
        let cardsMarkup = '';
        cards.forEach(card => {
            if (card) {
                cardsMarkup += card.outerHTML
            };
        })
        this._newsCardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);
    }

    clearCard() {
        this._newsCardsContainer.innerHTML = '';
    }

    _setHandlers = () => {
        this._paginationButton.addEventListener('click', this._pagination);
    }

    togglePaginationButton = (state) => {
        if (state) {
            this._paginationButton.classList.add('button_more')
        } else {
            this._paginationButton.classList.remove('button_more');
        }
    }

}
export default NewsCardList;
