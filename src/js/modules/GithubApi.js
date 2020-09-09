class GithubApi {

    constructor(config) {
        
        this._apiURL = config.apiURL;
        this._user = config.user;
        this._reposName = config.reposName;
        this._perPage = config.perPage;
    }

    getCommits = () => {

        return fetch(`${this._apiURL}/repos/${this._user}/${this._reposName}/commits?per_page=${this._perPage}`, {
                method: 'GET',
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                };
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export default GithubApi;