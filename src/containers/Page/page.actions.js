import axios from 'axios';
import { deviceType, MOBILE } from '../../utils/deviceDetection';
import {
	mainUrl,
	configApi,
	playerInfoApi,
	gamesApi
} from '../../enums/ApiUrls';
import {
	RECEIVE_CONFIG,
	RECEIVE_PLAYER_INFO,
	TOGGLE_CATEGORY,
	TOGGLE_CATEGORY_MENU,
	START_FETCHING_PAGE,
	FINISH_FETCHING_PAGE,
	START_FETCHING_GAMES,
	FINISH_FETCHING_GAMES,
	RECEIVE_GAMES_WITH_URLS
} from '../../enums/ActionTypes';

const startFetchingGames = {
	type: START_FETCHING_GAMES
};

const finishFetchingGames = {
	type: FINISH_FETCHING_GAMES
};

const startFetchingPage = {
	type: START_FETCHING_PAGE
};

const finishFetchingPage = {
	type: FINISH_FETCHING_PAGE
};

const receiveConfig = config => ({
	type: RECEIVE_CONFIG,
	config
});

const receivePlayerInfo = playerInfo => ({
	type: RECEIVE_PLAYER_INFO,
	playerInfo
});

const activateCategory = id => ({
	type: TOGGLE_CATEGORY,
	id
});

const toggleCategoryMenu = () => ({
	type: TOGGLE_CATEGORY_MENU
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

const fetchConfig = () => axios.get(`${mainUrl}${configApi}`);

const fetchPlayerInfo = () => axios.get(`${mainUrl}${playerInfoApi}`);

const fetchGamesForCategory = id => (dispatch) => {
	dispatch(startFetchingGames);
	return axios.get(`${mainUrl}${gamesApi}/${id}`)
		.then((response) => {
			dispatch(receiveGames(response.data));
			dispatch(finishFetchingGames);
		})
		.catch((error) => {
			console.log(error);
			dispatch(finishFetchingGames);
		});
};

const fetchPageData = () => (dispatch) => {
	dispatch(startFetchingPage);
	return axios.all([fetchConfig(), fetchPlayerInfo()])
		.then(axios.spread((config, playerInfo) => {
			const firstCategoryId = config.data.lobbyCategories[0].id;
			dispatch(receiveConfig(config.data));
			dispatch(fetchGamesForCategory(firstCategoryId));
			dispatch(receivePlayerInfo(playerInfo.data));
			dispatch(finishFetchingPage);
		}))
		.catch((error) => {
			console.log(error);
			dispatch(finishFetchingPage);
		});
};

const toggleCategory = id => (dispatch) => {
	dispatch(activateCategory(id));
	dispatch(fetchGamesForCategory(id));
	if (deviceType === MOBILE) {
		dispatch(toggleCategoryMenu());
	}
};

export { toggleCategory, toggleCategoryMenu, fetchPageData, fetchGamesForCategory };
