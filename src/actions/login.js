import { createError } from '../utils';
import {
	postUserLogoutAccess,
	postUserLogoutRefresh,
	postUserTokenRefresh,
	getUserInfo,
	postUserLogin,
} from '../api';

export const actionTypes = {
	POST_USERLOGIN_BEGIN: "POST_USERLOGIN_BEGIN",
	POST_USERLOGIN_SUCCESS: "POST_USERLOGIN_SUCCESS",
	POST_USERLOGIN_FAILURE: "POST_USERLOGIN_FAILURE",
	GET_USERINFO_BEGIN: "GET_USERINFO_BEGIN",
	GET_USERINFO_SUCCESS: "GET_USERINFO_SUCCESS",
	GET_USERINFO_FAILURE: "GET_USERINFO_FAILURE",
	POST_USERTOKENREFRESH_BEGIN: "POST_USERTOKENREFRESH_BEGIN",
	POST_USERTOKENREFRESH_SUCCESS: "POST_USERTOKENREFRESH_SUCCESS",
	POST_USERTOKENREFRESH_FAILURE: "POST_USERTOKENREFRESH_FAILURE",
	POST_USERLOGOUT_BEGIN: "POST_USERLOGOUT_BEGIN",
	POST_USERLOGOUT_SUCCESS: "POST_USERLOGOUT_SUCCESS",
	POST_USERLOGOUT_FAILURE: "POST_USERLOGOUT_FAILURE", 
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

const loginUser = (payload, onSuccess, onFailure) => {
	return (dispatch) => {
		dispatch(postUserLoginBegin());
		return postUserLogin(payload, (response) => {
			localStorage.setItem('access_token', response.data.access_token);
			localStorage.setItem('refresh_token', response.data.refresh_token);
			onSuccess && onSuccess(response);
			dispatch(postUserLoginSuccess(response.data));
			return response;
		},
		(error) => {
			onFailure && onFailure(error);
			dispatch(postUserLoginFailure(createError(error)));
			return error;
		})
	}
};

const getUserInfoBegin = () => ({
	type: actionTypes.GET_USERINFO_BEGIN,
});

const getUserInfoSuccess = (payload) => ({
	type: actionTypes.GET_USERINFO_SUCCESS,
	payload,
});

const getUserInfoFailure = (payload) => ({
	type: actionTypes.GET_USERINFO_FAILURE,
	payload,
});

const postUserTokenRefreshBegin = () => ({
	type: actionTypes.POST_USERTOKENREFRESH_BEGIN,
});

const postUserTokenRefreshSuccess = (payload) => ({
	type: actionTypes.POST_USERTOKENREFRESH_SUCCESS,
	payload,
});

const postUserTokenRefreshFailure = (payload) => ({
	type: actionTypes.POST_USERTOKENREFRESH_FAILURE,
	payload,
});

const authenticateUser = () => {
	return (dispatch) => {
		dispatch(postUserTokenRefreshBegin());
		return postUserTokenRefresh((response) => {
			localStorage.setItem('access_token', response.data.access_token);
			dispatch(postUserTokenRefreshSuccess(response.data));
			dispatch(getUserInfoBegin());
			getUserInfo((response) => {
				dispatch(getUserInfoSuccess(response.data));
				return response;
			},
			(error) => {
				dispatch(getUserInfoFailure(createError(error)));
				return error;
			})
			return response;
		},
		(error) => {
			dispatch(postUserTokenRefreshFailure(createError(error)));
			return error;
		});
	}
}

const postUserLogoutBegin = () => ({
	type: actionTypes.POST_USERLOGOUT_BEGIN,
});

const postUserLogoutSuccess = (payload) => ({
	type: actionTypes.POST_USERLOGOUT_SUCCESS,
	payload,
});

const postUserLogoutFailure = (payload) => ({
	type: actionTypes.POST_USERLOGOUT_FAILURE,
	payload,
});

const logoutUser = (onSuccess, onFailure) => {
	return (dispatch) => {
		dispatch(postUserLogoutBegin());
		return postUserLogoutAccess(
			(response) => {
				localStorage.setItem('access_token', undefined);
				postUserLogoutRefresh(
					(response) => {
						localStorage.setItem('refresh_token', undefined);
						onSuccess && onSuccess();
						dispatch(postUserLogoutSuccess());
						return response;
					},
					(error) => {
						onFailure && onFailure();
						dispatch(postUserLogoutFailure(createError(error)));
						return error;
					}
				);
				return response;
			},
			(error) => {
				onFailure && onFailure();
				dispatch(postUserLogoutFailure(createError(error)));
				return error;
			}
		);
	}
}

export const actions = {
	loginUser,
	authenticateUser,
	logoutUser,
}