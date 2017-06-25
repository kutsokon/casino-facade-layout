import { START_FETCHING_PAGE, FINISH_FETCHING_PAGE } from '../enums/actionTypes';

const pageFetching = (state = true, action) => {
	switch (action.type) {
		case START_FETCHING_PAGE:
			return true;
		case FINISH_FETCHING_PAGE:
			return false;
		default:
			return false;
	}
};

export default pageFetching;
