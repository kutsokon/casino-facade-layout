import { RECEIVE_PLAYER_INFO } from '../enums/actionTypes';

const receivePlayerInfo = playerInfo => ({
	type: RECEIVE_PLAYER_INFO,
	playerInfo
});

export { receivePlayerInfo };
