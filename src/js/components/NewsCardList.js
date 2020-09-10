class NewsCardList {

    constuctor(newsCardsHub, newsCardsSection, paginationButton) {
        this._newsCardsSection = newsCardsSection;
        this._newsCardsHub = newsCardsHub;
        this._paginationButton = paginationButton;
        this._fullNewsCards = null;
        this._setHandlers();
    }

    _render = (cards) => {
        let cardsMarkup = '';
        cards.forEach(card => {
            if (card) {
                cardsMarup += card.outerHTML
            };
        })
        this._newsCardsSection.insertAdjacentHTML('beforeend', cardsMarkup);
    }

    clear = () => {

        this._newsCardsSection.innerHTML = '';
    }

    toggleNewsCardsHub = (state) => {
        state ?
        this._newsCardsHub.classList.add('.news_active')
        this._newsCardsHub.classList.remove('.news_active')
    }

    _pagination = () => {
        let cardsToRender = [];
        for (let i = 0, i < 3; i++) {
            cardsToRender.push(this._fullNewsCards.pop())
        }
        this._render(cardsToRender);
        if (this._fullNewsCards.length === 0) {
            this._paginationButton(false)
        }
    }

    togglePagination = (state) => {
        state ?
        this._paginationButton.classList.add('button_hidden')
        this._paginationButton.classList.remove('button_hidden')
    }

    _setCardsArray = (cardsArray) => {

        this._fullNewsCards = cardsArray;
    }

    getCardsArray = () => {
        return this._fullNewsCards;
    }

    renderInit = (newsCardsArray) => {
        this.toggleNewsCardsHub(true);
        this._setCardsArray(newsCardsArray);
        this._pagination();
    }

    _setHandlers = () = {
        this._paginationButton.addEventListener('click', this._pagination);
    }
}

export default NewsCardList