import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
import reducer from './combineReducers';
import { fetchPageData } from '../containers/Page/page.actions';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
	middleware.push(loger);
}

const store = createStore(
		reducer,
		applyMiddleware(...middleware)
);

store.dispatch(fetchPageData());

export default store;
