class SearchInput {
  constructor(form, renderNews) {

      this._form = form;
      this._input = form.elements.input;
      this._errorItem = form.querySelector('.search-form__error');
      this._button = this._form.querySelector('.button_section_search-form')
      this._renderNews = renderNews;
      this._setEventListeners();

  }

  checkInputValidity(input) {

    if(input.validity.valueMissing) {
      input.setCustomValidity('Это обязательное поле');
      return false;
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Должно быть от 2 до 30 символов');
      return false
     }
    input.setCustomValidity('');
    return true;
  }

  _toggleInputError(field) {
    this._errorItem.textContent = field.validationMessage;
  }

  handlerInputForm = () => {
    const valid = this.checkInputValidity(this._input);
    this._toggleInputError(this._input);

    this.setSubmitButtonState(valid);
  }

  _handlerSubmitForm = (evt) => {
    evt.preventDefault();
    const userInput = this._input.value;
    this._renderNews(userInput);
  }

  setSubmitButtonState(state) {
    if (state) {
      this._button.removeAttribute('disabled');
      this._button.classList.remove('button_disabled');
    } else {
      this._button.setAttribute('disabled', 'disabled');
      this._button.classList.add('button_disabled');
    }
  }

  _setEventListeners() {
    this._input.addEventListener('input', this.handlerInputForm);
    this._form.addEventListener('submit', this._handlerSubmitForm);
  }

  putContent = (content) => {
    this._input.value = content;
  }

  _removeEventListeners() {

  }
}

export default SearchInput;
