class DataStorage {
    constructor() {}

    setNewsData = (data) => {
        localStorage.setItem('news', JSON.stringify(data));
    }

    setUserInput = (userInput) => {
        localStorage.setItem('searchWord', JSON.stringify(userInput));
    }

    setTotalResults = (totalResults) => {
        localStorage.setItem('totalResults', JSON.stringify(totalResults));
    }

    setCurrentDate = (date) => {
        localStorage.setItem('dateString', JSON.stringify(date));
    }

    getNewsData = () => {
        return JSON.parse(localStorage.getItem('news'));
    }

    getUserInput = () => {
        return JSON.parse(localStorage.getItem('searchWord'));
    }

    getTotalResults = () => {
        return JSON.parse(localStorage.getItem('totalResults'));
    }

    getCurrentDate = () => {
        return JSON.parse(localStorage.getItem('dateString'));
    }

    clearStorage = () => {
        localStorage.clear();
    }


}

export default DataStorage;
