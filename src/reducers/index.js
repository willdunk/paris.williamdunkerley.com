import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import {letterboxdReducer as letterboxd} from './letterboxd';
import {loginReducer as login} from './login';
import { reducer as form } from 'redux-form'

export default (history) => combineReducers({
	router: connectRouter(history),
	letterboxd,
	login,
	form,
});