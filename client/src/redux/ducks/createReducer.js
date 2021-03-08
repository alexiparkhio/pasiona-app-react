import { combineReducers } from 'redux';
import cardsReducer from './cards/reducers';
const createReducer = () =>
	combineReducers({
		cardsState: cardsReducer
	});

export default createReducer;
