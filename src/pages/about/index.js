import './about.css';

import Swiper from 'swiper/bundle';
import CommitCard from '../../js/components/CommitCard.js';
import CommitCardList from '../../js/components/CommitCardList.js';
import GithubApi from '../../js/modules/GithubApi.js';
import {
    SWIPER_CONFIG
} from '../../js/constants/SWIPER_CONFIG.js';
import {
    GITHUB_API_CONFIG
} from '../../js/constants/GITHUB_API_CONFIG.js';
import {
    createCommitsArray
} from '../../js/utils/createCommitsArray.js';
import {
    createDate
} from '../../js/utils/createDate.js';

// CONSTANTS

const cardTemplate = document.querySelector('#commit-card');
const commitsContainer = document.querySelector('.slider');

// INSTANCE

const commitsList = new CommitCardList(commitsContainer);
const gitubApi = new GithubApi(GITHUB_API_CONFIG);


gitubApi.getCommits()
    .then(res => {
        const commitArray = createCommitsArray(res, cardTemplate, CommitCard, createDate);
        commitsList.render(commitArray);
        const swiper = new Swiper('.commits__slider-wrapper', SWIPER_CONFIG);
    })
    .catch((err) => {
        console.log(err);
    })
