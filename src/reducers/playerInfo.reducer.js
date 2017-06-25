import { RECEIVE_PLAYER_INFO } from '../enums/actionTypes';

const playerInfo = (state = {
	displayName: '',
	balance: {
		cash: 0,
		bonus: 0
	}
}, action) => {
	switch (action.type) {
		case RECEIVE_PLAYER_INFO:
			return action.playerInfo;
		default:
			return state;
	}
};

export default playerInfo;
