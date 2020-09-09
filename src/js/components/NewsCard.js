class NewsCard {

    static _template = document.querySelector("#card-template").content;

    constructor(item, template) {
        this.item = item;
        this._template = template;
    }

}

export default NewsCard;