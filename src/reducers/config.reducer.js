import { brandNamePlaceholder } from '../enums/APIs';
import {
	RECEIVE_CONFIG,
	TOGGLE_CATEGORY,
	TOGGLE_CATEGORY_MENU
} from '../enums/actionTypes';

const parseLogoUrl = (url, brandName) => url.replace(brandNamePlaceholder, brandName);

const activateFirstCategory = categories => categories.map((category, index) => ({
	...category,
	active: index === 0
}));

const toggleCategory = (lobbyCategories, id) => lobbyCategories.map((category) => {
		category.active = category.id === id;
		return category;
	});

const config = (state = {
	brandName: '',
	lobbyCategories: [],
	isCategoryMenuOpened: false,
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
				isCategoryMenuOpened: !state.isCategoryMenuOpened
			};
		default:
			return state;
	}
};

export default config;
