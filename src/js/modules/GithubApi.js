class GithubApi {

    constructor(options) {

        this._perPage = options.perPage;
        this._apiUrl = options.apiUrl;
        this._user = options.user;
        this._reposName = options.reposName;
    }

    getCommits = () => {

    	return fetch(`${options.apiUrl}/repos/${options.user}/${options.reposName}/commits?per_page=${options.perPage}`, {
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