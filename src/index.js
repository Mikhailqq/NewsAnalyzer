import './style.css';

import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import Preloader from './js/components/Preloader.js';
import SearchInput from './js/components/SearchInput.js';
import {
    NEWS_API_CONFIG
} from './js/constants/NEWS_API_CONFIG.js';
import {
    LAST_WEEK
} from './js/constants/LAST_WEEK.js';
import {
    getActualDate
} from './js/utils/getActualDate.js';
import {
    createLastWeekDate
} from './js/utils/createLastWeekDate.js';
import {
    createNewsCardsArray
} from './js/utils/createNewsCardsArray.js'

//  DOM
const newsSection = document.querySelector('.news');
const newsCardsContainer = document.querySelector('.news__cards');
const paginationButton = document.querySelector('.button_section_news');

const preloaderSection = document.querySelector('.preloader');
const loader = preloaderSection.querySelector('.preloader__ellips').closest(".preloader__container");;
const notFound = preloaderSection.querySelector('.preloader__not-found').closest(".preloader__container");;
const preloaderError = document.querySelector('.preloader__paragraph');

const cardTemplate = document.querySelector('#card-template');
const searchForm = document.forms.search;
const dateString = getActualDate();
const lastWeekDate = createLastWeekDate();

// INSTANCE
const preloader = new Preloader(preloaderSection, loader, notFound);
const dataStorage = new DataStorage();
const newsApi = new NewsApi(NEWS_API_CONFIG);
const newsCardList = new NewsCardList(newsSection, newsCardsContainer, paginationButton);
const search = new SearchInput(searchForm, findUserInput);

// FUNCTION
function findUserInput(userInput) {
    newsCardList.clearCard();
    newsCardList.toggleNewsSection(false);
    newsCardList.togglePaginationButton(true);
    preloader.togglePreloader(true);
    preloader.toggleLoader(true);
    search.setSubmitButtonState(false);
    newsApi.getNews(userInput, dateString, lastWeekDate)
        .then((res) => {
            const newsArray = res.articles;
            search.setSubmitButtonState(true);
            if (newsArray.length === 0) {
                preloader.toggleLoader(false);
                preloader.toggleNotFound(true);
                dataStorage.clearStorage();
            } else {
                dataStorage.setNewsData(newsArray);
                dataStorage.setUserInput(userInput);
                dataStorage.setTotalResults(res.totalResults);
                dataStorage.setCurrentDate(dateString);
                preloader.togglePreloader(false);
                preloader.toggleLoader(false);
                const newsCardsArray = createNewsCardsArray(
                    newsArray,
                    cardTemplate,
                    NewsCard,
                    getActualDate
                );
                newsCardList.inithialCards(newsCardsArray);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

const storageCardsArray = dataStorage.getNewsData();
if (storageCardsArray) {
    const newsCardsArray = createNewsCardsArray(
        storageCardsArray,
        cardTemplate,
        NewsCard,
        getActualDate
    );
    search.putContent(dataStorage.getUserInput());
    search.handlerInputForm();
    newsCardList.inithialCards(newsCardsArray);
}
