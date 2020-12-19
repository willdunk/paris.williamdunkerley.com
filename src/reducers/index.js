import {combineReducers} from 'redux';
import {letterboxdReducer as letterboxd} from './letterboxd';
import {loginReducer as login} from './login';
import { reducer as form } from 'redux-form'

export default combineReducers({
	letterboxd,
	login,
	form,
});