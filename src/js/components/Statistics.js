class Statistics {
    constructor({dataStorage, keywordTitle, totalNumber, referenceNumber, createAnaliticsDate, createMonth}) {
        this._dataStorage = dataStorage;
        this._keywordTitle = keywordTitle;
        this._totalNumber = totalNumber;
        this._referenceNumber = referenceNumber;
        this._maxCollectionNumber = 100;
        this._months = [];
        this._newsArr = this._dataStorage.getNewsData();
        this._createMonth = createMonth;
        this._createAnaliticsDate = createAnaliticsDate;
        this._analytics = this._createAnalytics(this._newsArr);
    }

    setKeywordTitle = () => {
        this._keywordTitle.textContent = `Вы спросили: «${this._dataStorage.getUserInput()}»`;
    }

    setTotalNumber = () => {
        this._totalNumber.textContent = this._dataStorage.getTotalResults();
    }

    setReferenceNumber = () => {
        const newsArr = this._dataStorage.getNewsData();
        const searchWord = this._dataStorage.getUserInput();
        this._referenceNumber.textContent = this._countReferenceNumber(newsArr, searchWord);
    }

    _countReferenceNumber = (newsArr, searchWord) => {
        return newsArr.reduce((acc, news) => {
            const title = news.title;
            if (title.includes(searchWord)) {
                return ++acc;
            }
            return acc;
        }, 0);
    }

    _createCollctionArray = () => {
        const dateString = new Date(this._dataStorage.getCurrentDate());
        const arr = [];
        for (let i = 7; i >= 0; i--) {
            const date = new Date(dateString)
            date.setDate(date.getDate() - i)
            arr.push({
                date: this._createAnaliticsDate(date),
                totalCount: 0
            })
        }
        return arr;
    }

    _createAnalytics = (newsArray) => {
        let datesArr = [];
        newsArray.forEach(news => {
            const month = this._createMonth(news.publishedAt);
            if (!this._months.includes(month)) {
                this._months.push(month)
            }
            datesArr.push(this._createAnaliticsDate(new Date(news.publishedAt)))
        });
        datesArr.forEach(item => {
            if (item.totalCount > this._maxCollectionNumber) {
                this._maxCollectionNumber = item.totalCount;
            }
        })
        return datesArr;
    }


    getAnalytics = () => {
        return this._analytics;
    }

    getMaxCollectionNumber = () => {
        return this._maxCollectionNumber;
    }

    getMonths = () => {
        return this._months;
    }
}

export default Statistics;
