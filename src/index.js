import './style.css';

import NewsApi from './js/modules/NewsApi.js';
import Datastorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import { NEWS_API_CONFIG } from './js/constants/NEWS_API_CONFIG.js';
import { createCurrentDate } from './js/utils/createCurrentDate.js';
import { createDate } from './js/utils/createDate.js';
import { createWeekAgoDate } from './js/utils/createWeekAgoDate.js';
import { createNewsArray } from './js/utils/createNewsArray.js';

// CONSTANTS

const preloaderSection = document.querySelector('.preloader');
const preloaderSearch = preloaderSection.querySelector('.preloader__circle').closest('.preloader__container');
const notFoundSection = preloaderSection.querySelector('.preloader__not-found').closest('.preloader__container');

const newsSection = document.querySelector('.news');
const newsCardsContainer = newsSection.querySelector('.news__cards');
const cardTemplate = newsSection.querySelector('#card-template');
const paginationButton = newsSection.querySelector('.button_section_news');
const searchForm = document.forms.search;


const currentDate = createCurrentDate();
const weekAgoDate = createWeekAgoDate();

// INSTANCE

const preloader = new Preloader(preloaderSection, preloaderSearch, notFoundSection);
const localStorage = new Datastorage();

const newsApi = new NewsApi(NEWS_API_CONFIG);
const newsList = new NewsCardList(newsSection, newsCardsContainer, paginationButton);

// FUNCTION

function findNews(word) {
	newsList.clear();
	newsList.toggleNewsCardsHub(false);
	newsList.togglePagination(true);
	preloader.toggleNotFoundSection(false);
	preloader.togglePreloader(true);
	preloader.togglePreloaderSearch(true);
	search.setSubmitButtonState(false);
	newsApi.getNews(word, currentDate, weekAgoDate)
		.then((res) => {

			const newsArray = res.articles;
			search.setSubmitButtonState(true);

			if (newsArray.length === 0) {
				preloader.togglePreloaderSearch(false);
				preloader.toggleNotFoundSection(true);
				localStorage.clear();
			} else {
				localStorage.setDataNews(newsArray);
				localStorage.setSearchWord(word);
				localStorage.setTotalResults(res.totalResults);
				localStorage.setCurrentDate(currentDate);
				preloader.togglePreloader(false);
				preloader.togglePreloaderSearch(false);

				const cardsNewsArray = createNewsArray(newsCardsArray, cardTemplate, NewsCard, createNewsDate);
				newsList.renderInit(cardsNewsArray);
			}
		})
		.catch(err => {
			console.log(err)
			preloader.togglePreloaderSearch(false);
			preloader.toggleNotFoundSection(true);
			search.setSubmitButtonState(true);
		})
}

const search = new SearchInput(searchForm, findNews);