import { gameIdPlaceholder } from '../enums/APIs';
import {
	START_FETCHING_GAMES,
	FINISH_FETCHING_GAMES,
	RECEIVE_GAMES_WITH_URLS
} from '../enums/actionTypes';

const parseGameUrl = (url, id) => url.replace(gameIdPlaceholder, id);

const filterGamesByDeviceType = (games, type) =>
	games.filter(game => game.devices.some(availableType => type === availableType));

const enrichGamesWithUrls = (games, gameLaunchUrlTemplate, gameIconsUrlTemplate) => games.map(game => ({
				...game,
				gameLaunchUrlTemplate: parseGameUrl(gameLaunchUrlTemplate, game.id),
				gameIconsUrlTemplate: parseGameUrl(gameIconsUrlTemplate, game.id)
			}));

const gamesInfo = (state = {
	gamesFetching: true,
	games: []
}, action) => {
	switch (action.type) {
		case START_FETCHING_GAMES:
			return {
				...state,
				gamesFetching: true
			};
		case FINISH_FETCHING_GAMES:
			return {
				...state,
				gamesFetching: false
			};
		case RECEIVE_GAMES_WITH_URLS:
			return {
				...state,
				games: filterGamesByDeviceType(
					enrichGamesWithUrls(
						action.games,
						action.gameLaunchUrlTemplate,
						action.gameIconsUrlTemplate
					),
					action.deviceType
				)
			};
		default:
			return state;
	}
};

export default gamesInfo;
