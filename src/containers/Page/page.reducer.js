import {
	brandNamePlaceholder,
	gameIdPlaceholder
} from '../../enums/ApiUrls';
import {
	RECEIVE_CONFIG,
	RECEIVE_PLAYER_INFO,
	START_FETCHING_PAGE,
	FINISH_FETCHING_PAGE,
	TOGGLE_CATEGORY,
	TOGGLE_CATEGORY_MENU,
	START_FETCHING_GAMES,
	FINISH_FETCHING_GAMES,
	RECEIVE_GAMES_WITH_URLS
} from '../../enums/ActionTypes';

const parseLogoUrl = (url, brandName) => url.replace(brandNamePlaceholder, brandName);

const parseGameUrl = (url, id) => url.replace(gameIdPlaceholder, id);

const activateFirstCategory = categories => categories.map((category, index) => ({
	...category,
	active: index === 0
}));

const toggleCategory = (lobbyCategories, id) => lobbyCategories.map((category) => {
		category.active = category.id === id;
		return category;
	});

const filterGamesByDeviceType = (games, type) =>
	games.filter(game => game.devices.some(availableType => type === availableType));

const enrichGamesWithUrls = (games, gameLaunchUrlTemplate, gameIconsUrlTemplate) => games.map(category => ({
				...category,
				gameLaunchUrlTemplate: parseGameUrl(gameLaunchUrlTemplate, category.id),
				gameIconsUrlTemplate: parseGameUrl(gameIconsUrlTemplate, category.id)
			}));

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

const config = (state = {
	brandName: '',
	lobbyCategories: [],
	isCategorySectionOpened: false,
	gameLaunchUrlTemplate: '',
	gameIconsUrlTemplate: '',
	logoUrlTemplate: ''
}, action) => {
	switch (action.type) {
		case RECEIVE_CONFIG:
			return {
				...state,
				brandName: action.config.brandName,
				lobbyCategories: activateFirstCategory(action.config.lobbyCategories),
				gameLaunchUrlTemplate: action.config.gameLaunchUrlTemplate,
				gameIconsUrlTemplate: action.config.gameIconsUrlTemplate,
				logoUrlTemplate: parseLogoUrl(action.config.logoUrlTemplate, action.config.brandName)
			};
		case TOGGLE_CATEGORY:
			return {
				...state,
				lobbyCategories: toggleCategory(state.lobbyCategories, action.id)
			};
		case TOGGLE_CATEGORY_MENU:
			return {
				...state,
				isCategorySectionOpened: !state.isCategorySectionOpened
			};
		default:
			return state;
	}
};

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

export { pageFetching, config, playerInfo, gamesInfo };
