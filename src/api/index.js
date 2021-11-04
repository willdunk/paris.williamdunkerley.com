import axios from 'axios';

export const postUserLogoutAccess = (onSuccess, onFailure) => {
	return axios.post(`${process.env.API_BASE}/user/logout/access`, {}, {
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('access_token')}`
		}
	})
		.then((response) => {
			onSuccess && onSuccess(response);
			return response;
		})
		.catch((error) => {
			onFailure && onFailure(error);
			return error;
		});
};

export const postUserLogoutRefresh = (onSuccess, onFailure) => {
	return axios.post(`${process.env.API_BASE}/user/logout/refresh`, {}, {
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`
		}
	})
		.then((response) => {
			onSuccess && onSuccess(response);
			return response;
		})
		.catch((error) => {
			onFailure && onFailure(error);
			return error;
		});
};

export const postUserTokenRefresh = (onSuccess, onFailure) => {
	return axios.post(`${process.env.API_BASE}/user/token/refresh`, {}, {
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`
		}
	})
		.then((response) => {
			onSuccess && onSuccess(response);
			return response;
		})
		.catch((error) => {
			onFailure && onFailure(error)
			return error;
		})
}

export const getUserInfo = (onSuccess, onFailure) => {
	return axios.get(`${process.env.API_BASE}/user/info`, {
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('access_token')}`
		}
	})
		.then((response) => {
			onSuccess && onSuccess(response);
			return response;
		})
		.catch((error) => {
			onFailure && onFailure(error);
			return error;
		})
};

export const postUserLogin = (payload, onSuccess, onFailure) => {
	return axios.post(`${process.env.API_BASE}/user/login`, payload)
		.then((response) => {
			onSuccess && onSuccess(response);
			return response;
		})
		.catch((error) => {
			onFailure && onFailure(error);
			return error;
		})
};

export const postUserRegister = (payload, onSuccess, onFailure) => {
	return axios.post(`${process.env.API_BASE}/user/login`, payload)
		.then((response) => {
			onSuccess && onSuccess(response);
			return response;
		})
		.catch((error) => {
			onFailure && onFailure(error);
			return error;
		})
};