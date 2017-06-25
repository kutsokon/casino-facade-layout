import axios from 'axios';
import { mainUrl, configApi, playerInfoApi, gamesApi } from '../enums/APIs';
import { receiveConfig } from './config.actions';
import { receivePlayerInfo } from './playerInfo.actions';
import { startFetchingPage, finishFetchingPage } from './pageFetching.actions';
import { startFetchingGames, finishFetchingGames, receiveGames } from './gamesInfo.actions';

const fetchConfig = () => axios.get(`${mainUrl}${configApi}`);

const fetchPlayerInfo = () => axios.get(`${mainUrl}${playerInfoApi}`);

const fetchGamesForCategory = id => (dispatch) => {
	dispatch(startFetchingGames());
	return axios.get(`${mainUrl}${gamesApi}/${id}`)
		.then((response) => {
			dispatch(receiveGames(response.data));
			dispatch(finishFetchingGames());
		})
		.catch((error) => {
			console.warn(error);
			dispatch(finishFetchingGames());
		});
};

const fetchPageData = () => (dispatch) => {
	dispatch(startFetchingPage());
	return axios.all([fetchConfig(), fetchPlayerInfo()])
		.then(axios.spread((config, playerInfo) => {
			const firstCategoryId = config.data.lobbyCategories[0].id;
			dispatch(receiveConfig(config.data));
			dispatch(fetchGamesForCategory(firstCategoryId));
			dispatch(receivePlayerInfo(playerInfo.data));
			dispatch(finishFetchingPage());
		}))
		.catch((error) => {
			console.warn(error);
			dispatch(finishFetchingPage());
		});
};

export { fetchPageData, fetchGamesForCategory };
