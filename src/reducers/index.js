import { combineReducers } from 'redux';
import pageFetching from './pageFetching.reducer';
import config from './config.reducer';
import gamesInfo from './gamesInfo.reducer';
import playerInfo from './playerInfo.reducer';

export default combineReducers({ pageFetching, config, playerInfo, gamesInfo });
