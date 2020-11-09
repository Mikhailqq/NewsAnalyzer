import {
    COUNT_NUMBER
} from '../constants/COUNT_NUMBER';

class Statistics {
    constructor({
        dataStore,
        keywordTitle,
        totalNumber,
        referenceNumber,
        createAnaliticsDate,
        createMonth
    }) {
        this._dataStore = dataStore;
        this._keywordTitle = keywordTitle;
        this._totalNumber = totalNumber;
        this._referenceNumber = referenceNumber;
        this._maxCollectionNumber = null;
        this._months = [];
        this._newsArray = this._dataStore.getNewsData();
        this._createMonth = createMonth;
        this._createAnaliticsDate = createAnaliticsDate;
        this._analytics = this._getCreateAnalytics(this._newsArray);
    }

    setKeywordTitle = () => {
        this._keywordTitle.textContent = `Вы спросили: «${this._dataStore.getUserInput()}»`;
    }

    setTotalNumber = () => {
        this._totalNumber.textContent = this._dataStore.getTotalResults();
    }

    setReferenceNumber = () => {
        const newsArray = this._dataStore.getNewsData();
        const searchWord = this._dataStore.getUserInput();
        this._referenceNumber.textContent = this._countReferenceNumber(newsArray, searchWord);
    }

    _countReferenceNumber = (newsArray, searchWord) => {
        return newsArray.reduce((acc, news) => {
            const title = news.title;
            if (title.includes(searchWord)) {
                return ++acc;
            }
            return acc;
        }, 0);
    }

    _getCreateCollectionArray = () => {
        const currentDate = new Date(this._dataStore.getCurrentDate());
        console.log(currentDate);
        const arr = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date(currentDate)
            date.setDate(date.getDate() - i)
            arr.push({
                date: this._createAnaliticsDate(date),
                totalCount: COUNT_NUMBER
            })
        }
        return arr;
    }

    _getCreateAnalytics = (newsArray) => {
        let collectionDatesArray = [];
        newsArray.forEach(news => {
            const month = this._createMonth(news.publishedAt);
            if (!this._months.includes(month)) {
                this._months.push(month)
            }

            collectionDatesArray.push(this._createAnaliticsDate(new Date(news.publishedAt)))
        });
        const collectionArr = this._getCreateCollectionArray();
        // debugger;
        collectionDatesArray = collectionDatesArray.reduce((acc, date) => {
            if (acc.some(item => item.date === date)) {
                acc.forEach(item => {
                    if (item.date === date) {
                        item.totalCount = item.totalCount + 1;
                    }
                })
                return acc;
            }
        }, collectionArr)

        collectionDatesArray.forEach(item => {
            if (item.totalCount > this._maxCollectionNumber) {
                this._maxCollectionNumber = item.totalCount;
            }
        })
        collectionDatesArray.forEach(item => {
            item.width = `${item.totalCount / this._maxCollectionNumber * 100}%`
        })
        return collectionDatesArray;
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
