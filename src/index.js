import './style.css';


const searchButton = document.querySelector('.button_section_search-form');

function Search() {
	event.preventDefault();
console.log('HEllo')
}

searchButton.addEventListener('click', Search)

const inputSearch = document.querySelector('.search-form__input');
const inputSpanError = document.querySelector('.search-form__error');

const getShowMoreButton = document.querySelector('.button_section_news');

function OpenMore() {
	event.preventDefault();
	console.log('OpenMore')
};

getShowMoreButton.addEventListener('click', OpenMore)