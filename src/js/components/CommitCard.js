class CommitCard {

    constructor(cardItem, commitData, createDate) {
        this._commitData = commitData;
        this._createDate = createDate;       
        this._card = cardItem;
        this._link = cardItem.querySelector('.slider-card');
        this._date = cardItem.querySelector('.slider-card__date');
        this._avatar = cardItem.querySelector('.slider-card__avatar');
        this._name = cardItem.querySelector('.slider-card__name');
        this._email = cardItem.querySelector('.slider-card__email');       
        this._notion = cardItem.querySelector('.slider-card__paragraph');        
    }

    getCreate = () => {
        this._avatar.src = this._commitData.author.avatar_url;
        this._name.textContent = this._commitData.commit.committer.name;
        this._date.textContent = this._createDate(this._commitData.commit.committer.date);
        this._link.href = this._commitData.html_url;
        this._email.textContent = this._commitData.commit.committer.email;
        this._notion.textContent = this._commitData.commit.message;

        return this._card;
    }

}

export default CommitCard