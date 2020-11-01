import './analytics.css';

import DataStorage from '../../js/modules/DataStorage.js';
import Statistics from '../../js/components/Statistics';
import { createAnaliticsDate } from '../../js/utils/createAnaliticsDate.js';
import { createMonth } from '../../js/utils/createMonth.js';

// DOM
const keywordTitle = document.querySelector('.keyword__title');
const totalNumber = document.querySelector('.keyword__number');
const referenceNumber = document.querySelector('.keyword__reference');

const chartsContainer = document.querySelector('#charts');
const diagrammaContainer = document.querySelector('#diagramma');

const chartsTemplate = document.querySelector('#date-template').content.querySelector('span');
const diagrammaTemplate = document.querySelector('#diagram-template').content.querySelector('span');
const digitContainerTop = document.querySelector('.analytics__digits_section_top');
const digitContainerBottom = document.querySelector('.analytics__digits_section_bottom');

const analyticTemplate = document.querySelector('#analytics__digit').content.querySelector('span');
const analyticTitle = document.querySelector('.analytics__schedule');

// INSTANCE
const dataStorage = new DataStorage();
const statistics = new Statistics({
    dataStorage,
    keywordTitle,
    totalNumber,
    referenceNumber,
    createAnaliticsDate,
    createMonth
});

statistics.setKeywordTitle();
statistics.setTotalNumber();
statistics.setReferenceNumber();

let chartsMarkup = '';
let analyticMarkup = '';
statistics.getAnalytics().forEach(item => {
    chartsTemplate.textContent = item.date;
    chartsMarkup += chartsTemplate.outerHTML;

    if (item.totalCount !== 0) {
        diagrammaTemplate.textContent = item.totalCount;
    };
    diagrammaTemplate.style.width = item.width;
    analyticMarkup += diagrammaTemplate.outerHTML;
})
chartsContainer.insertAdjacentHTML('afterbegin', chartsMarkup);
diagrammaContainer.insertAdjacentHTML('afterbegin', analyticMarkup);

let markupString = '';
const maxCollectionNumber = statistics.getMaxCollectionNumber();
for (let i = 0; i <= 4; i++) {
    switch (i) {
        case 0:
            analyticTemplate.textContent = '0';
            markupString += analyticTemplate.outerHTML;
            break;
        case 1:
            analyticTemplate.textContent = `${Math.round(maxCollectionNumber * 0.25)}`;
            markupString += analyticTemplate.outerHTML;
            break;
        case 2:
            analyticTemplate.textContent = `${Math.round(maxCollectionNumber * 0.5)}`;
            markupString += analyticTemplate.outerHTML;
            break;
        case 3:
            analyticTemplate.textContent = `${Math.round(maxCollectionNumber * 0.75)}`;
            markupString += analyticTemplate.outerHTML;
            break;
        case 4:
            analyticTemplate.textContent = `${maxCollectionNumber}`;
            markupString += analyticTemplate.outerHTML;
            break;
    }
}

digitContainerTop.insertAdjacentHTML("afterbegin", markupString);
digitContainerBottom.insertAdjacentHTML("afterbegin", markupString);

analyticTitle.textContent = `Дата (${statistics.getMonths().join(', ')})`;
