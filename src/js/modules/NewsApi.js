class NewsApi {
    constructor(options) {
      this._apiKey = options.apiKey;
      this._apiUrl = options.apiUrl;
      this._pageSize = options.pageSize;
    }

    getNews = (userInput, currentDate, lastWeekDate) => {
      return fetch (`${this._apiUrl}?q=${userInput}&to=${currentDate}&from=${lastWeekDate}&pageSize=${this._pageSize}&apiKey=${this._apiKey}`, {
          method: 'GET',
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}

export default NewsApi;

// +
