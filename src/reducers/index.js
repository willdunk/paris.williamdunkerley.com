import {combineReducers} from 'redux';
import {letterboxdReducer} from './letterboxd';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	letterboxd: letterboxdReducer,
	form: formReducer,
});