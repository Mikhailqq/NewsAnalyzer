class NewsCard {

    constructor(item, createNewsDate, newsData) {
        this._item = item;
        this._link = item.querySelector('.news-card');
        this._photo = item.querySelector('.news-card__photo');
        this._date = item.querySelector('.news-card__date');
        this._title = item.querySelector('.news-card__title');
        this._text = item.querySelector('.news-card__paragraph');
        this._target = item.querySelector('.news-card__link');
        this._createNewsDate = createNewsDate;
        this._newsData = newsData;
    }

    getCreate = () => {
        if (this._newsData.urlToImage) {
            this._photo.src = this._newsData.urlToImage;
        }
        this._date.textContent = this._createNewsDate(this._newsData.publishedAt);
        this._link.href = this._newsData.url;
        this._title.textContent = this._newsData.title.str;
        this._text.textContent = this._newsData.description;
        this._target.textContent = this._newsData.source.name;

        return this._item
    }
}

export default NewsCard