import playerInfo from './playerInfo.reducer';
import * as types from '../enums/actionTypes';

test('initial playerInfo state', () => {
	expect(
		playerInfo(undefined, {})
	).toEqual({
		displayName: '',
		balance: {
			cash: 0,
			bonus: 0
		}
	});
});

test('RECEIVE_PLAYER_INFO action', () => {
	expect(
		playerInfo({}, {
			type: types.RECEIVE_PLAYER_INFO,
			playerInfo: {
				displayName: 'John Dow',
				balance: {
					cash: 10.33,
					bonus: 3.11
				}
			}
		})
	).toEqual({
		displayName: 'John Dow',
		balance: {
			cash: 10.33,
			bonus: 3.11
		}
	});
});

