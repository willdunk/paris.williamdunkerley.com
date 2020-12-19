import { createError } from '../utils';
import axios from 'axios';

export const actionTypes = {
	POST_USERLOGIN_BEGIN: "POST_USERLOGIN_BEGIN",
	POST_USERLOGIN_SUCCESS: "POST_USERLOGIN_SUCCESS",
	POST_USERLOGIN_FAILURE: "POST_USERLOGIN_FAILURE",
}

const postUserLoginBegin = () => ({
	type: actionTypes.POST_USERLOGIN_BEGIN,
});

const postUserLoginSuccess = (payload) => ({
	type: actionTypes.POST_USERLOGIN_SUCCESS,
	payload,
});

const postUserLoginFailure = (payload) => ({
	type: actionTypes.POST_USERLOGIN_FAILURE,
	payload,
});

const postUserLogin = (payload) => {
	return (dispatch) => {
		dispatch(postUserLoginBegin());
		return axios.post(`${process.env.API_BASE}/user/login`, payload, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
			},
		})
			.then((response) => {
				console.log(response.data);
				dispatch(postUserLoginSuccess(response.data));
				return response;
			})
			.catch((error) => {
				dispatch(postUserLoginFailure(createError(error)));
				return error;
			})
	}
};

export const actions = {
	postUserLogin,
}