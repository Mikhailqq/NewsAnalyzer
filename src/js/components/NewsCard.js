class NewsCard {
    constructor(card, data, getActualDate) {
        this._card = card;
        this._data = data;
        this._getActualDate = getActualDate;
        this._link = card.querySelector('.news-card');
        this._avatar = card.querySelector('.news-card__photo');
        this._date = card.querySelector('.news-card__date');
        this._heading = card.querySelector('.news-card__title');
        this._text = card.querySelector('.news-card__paragraph');
        this._label = card.querySelector('.news-card__link');
    }

    getCreate() {

        if (this._data.urlToImage) {
            this._avatar.src = this._data.urlToImage;
        }
        this._avatar.alt = this._data.title;
        this._heading.textContent = this._data.titlestr;
        this._text.textContent = this._data.description;
        this._label.textContent = this._data.source.name;
        this._date.textContent = this._getActualDate(this._data.publishedAt);
        this._link.href = this._data.url;
        return this._card;
    }
}

export default NewsCard;
