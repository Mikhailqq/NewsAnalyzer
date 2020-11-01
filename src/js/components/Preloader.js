class Preloader {
    constructor(container, loader, notFound) {
        this._container = container;
        this._loader = loader;
        this._notFound = notFound;
    }

    togglePreloader = (state) => {
        if (state) {
            this._container.classList.add('preloader_visible');
        } else {
            this._container.classList.remove('preloader_visible');
        }
    }

    toggleLoader = (state) => {
        if (state) {
            this._loader.classList.add('preloader__container_visible');
        } else {
            this._loader.classList.remove('preloader__container_visible');
        }
    }

    toggleNotFound = (state) => {
        if (state) {
            this._notFound.classList.add('preloader__container_visible');
        } else {
            this._notFound.classList.remove('preloader__container_visible');
        }
    }

}

export default Preloader;
