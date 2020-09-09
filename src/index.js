import './style.css';

// import {DataStorage} from './js/modules/DataStorage.js'

// const searchButton = document.querySelector('.button_section_search-form');

// const inputSearch = document.querySelector('.search-form__input');
// const inputSpanError = document.querySelector('.search-form__error');

// const getShowMoreButton = document.querySelector('.button_section_news');




const page = document.querySelector('.news__cards')


const newsCardsList = new NewsCardList();
NewsCardList.render(page);



console.log(newsCardsList)









// function Search() {

// 	event.preventDefault();

//   console.log('HEllo')
// }

// function OpenMore() {
// 	event.preventDefault();
// 	console.log('OpenMore')
// };

// function openLoader() {

// 	const notFound = document.querySelector('.preloader__container_ellips');
// 	notFound.classList.toggle('close')
// }

// searchButton.addEventListener('click', Search);
// getShowMoreButton.addEventListener('click', OpenMore);
// searchButton.addEventListener('click', openLoader);