import { fetchGamesForCategory } from './fetchAPI';
import {
	RECEIVE_CONFIG,
	TOGGLE_CATEGORY,
	TOGGLE_CATEGORY_MENU
} from '../enums/actionTypes';

const receiveConfig = config => ({
	type: RECEIVE_CONFIG,
	config
});

const activateCategory = id => ({
	type: TOGGLE_CATEGORY,
	id
});

const toggleCategoryMenu = () => ({
	type: TOGGLE_CATEGORY_MENU
});

const toggleCategory = id => (dispatch) => {
	dispatch(activateCategory(id));
	dispatch(fetchGamesForCategory(id));
	dispatch(toggleCategoryMenu());
};

export { receiveConfig, toggleCategory, toggleCategoryMenu };
