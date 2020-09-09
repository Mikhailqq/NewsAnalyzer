export const createCommitsArray = (commitsArr, cardTemplate, CommitCard, createDate) => {

	return commitsArr.map(commit => {

		const cardItem = cardTemplate.cloneNode('true').content.querySelector('div');
		return new CommitCard(cardItem, commit, createDate);
	})
}