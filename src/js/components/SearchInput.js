class SearchInput {

    constructor(form, searchNews) {
        this._form = form;
        this._input = form.elements.input;
        this._errorItem = form.querySelector('.search-form__error');
        this._button = form.querySelector('button_section_search-form');
        this._findNews = findNews;
        this._setEventListeners();
    }

    checkInputValidity(input) {

        if (input.validity.valueMissing) {

            input.setCustomValidity('Это обязательное поле');
            return false
        }
        if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity('Должно быть от 2 до 30 символов');
            return false
        }

        input.setCustomValidity("");
        return true
    }

    setSubmitButtonState(button, state) {
        if (state) {
            this._button.removeAttribute('disabled');
        } else {
            this._button.setAttribute('disabled', true);
        }
    }

    handlerSubmitForm = (evt) => {
        evt.preventDefault();
        const word = this._input.value;
        this._findNews(word);
    }

    handlerInputForm = () => {
    const valid = this.checkInputValidity(this._input);    
    this.setSubmitButtonState(valid);
  }

  _setEventListeners() {
    this._input.addEventListener('input', this.handlerInputForm);
    this._form.addEventListener('submit', this.handlerSubmitForm);
  }


}

export default SearchInput;