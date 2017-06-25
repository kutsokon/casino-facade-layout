import pageFetching from './pageFetching.reducer';
import * as types from '../enums/actionTypes';

test('START_FETCHING_PAGE action', () => {
	expect(
		pageFetching({}, {
			type: types.START_FETCHING_PAGE
		})
	).toBeTruthy();
});

test('FINISH_FETCHING_PAGE action', () => {
	expect(
		pageFetching({}, {
			type: types.FINISH_FETCHING_PAGE
		})
	).toBeFalsy();
});
