import { START_FETCHING_PAGE, FINISH_FETCHING_PAGE } from '../enums/actionTypes';

const startFetchingPage = () => ({
	type: START_FETCHING_PAGE
});

const finishFetchingPage = () => ({
	type: FINISH_FETCHING_PAGE
});

export { startFetchingPage, finishFetchingPage };
