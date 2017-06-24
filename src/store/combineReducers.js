import { combineReducers } from 'redux';
import { pageFetching, config, playerInfo, gamesInfo } from '../containers/Page/page.reducer';

export default combineReducers({ pageFetching, config, playerInfo, gamesInfo });
