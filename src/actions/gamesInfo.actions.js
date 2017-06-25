import { deviceType } from '../utils/deviceDetection';
import {
	START_FETCHING_GAMES,
	FINISH_FETCHING_GAMES,
	RECEIVE_GAMES_WITH_URLS
} from '../enums/actionTypes';

const startFetchingGames = () => ({
	type: START_FETCHING_GAMES
});

const finishFetchingGames = () => ({
	type: FINISH_FETCHING_GAMES
});

const receiveGamesWithUrls = (games, gameLaunchUrlTemplate, gameIconsUrlTemplate) => ({
	type: RECEIVE_GAMES_WITH_URLS,
	games,
	gameLaunchUrlTemplate,
	gameIconsUrlTemplate,
	deviceType
});

const receiveGames = games => (dispatch, getState) => {
	const gameLaunchUrlTemplate = getState().config.gameLaunchUrlTemplate;
	const gameIconsUrlTemplate = getState().config.gameLaunchUrlTemplate;
	dispatch(receiveGamesWithUrls(games, gameLaunchUrlTemplate, gameIconsUrlTemplate));
};

export { startFetchingGames, finishFetchingGames, receiveGames };
