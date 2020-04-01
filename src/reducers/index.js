import {combineReducers} from 'redux';
import {letterboxdReducer} from './letterboxd';

export default combineReducers({
	letterboxd: letterboxdReducer,
});