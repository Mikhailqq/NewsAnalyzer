export const createCommitsArray = (commitsData, cardTemplate, CommitCard, createDate) => {

	return commitsData.map(commit => {

		const cardItem = cardTemplate.cloneNode('true').content.querySelector('li');
		return new CommitCard(cardItem, commit, createDate).getCreate();
	});
}