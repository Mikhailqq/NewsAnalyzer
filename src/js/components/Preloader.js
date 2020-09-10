class Preloader {
  constructor(container, preloaderSearch, notFoundSection) {
  	this._container = container;
    this._preloaderSearch = preloaderSearch;
    this._notFoundSection = notFoundSection;
  }

    togglePreloader = (state) => {
    state ?
      this._container.classList.add('preloader__container_active') :
      this._container.classList.remove('preloader__container_active');
  }

  togglePreloaderSearch = (state) => {
    state ?
      this._preloaderSearch.classList.add('preloader__container_active') :
      this._preloaderSearch.classList.remove('preloader__container_active');
  }

  toggleNotFoundSection = (state) => {
    state ?
      this._notFoundSection.classList.add('preloader__container_active') :
      this._notFoundSection.classList.remove('preloader__container_active');
  }

}

export default Preloader;