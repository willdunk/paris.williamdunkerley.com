import { actionTypes } from '../actions';

const initialState = {
	userinfo: {},
	authenticated: false,
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.POST_USERLOGIN_BEGIN:
			return {
				...state,
			};
		case actionTypes.POST_USERLOGIN_SUCCESS:
			return {
				...state,
			};
		case actionTypes.POST_USERLOGIN_FAILURE:
			return {
				...state,
			};
		case actionTypes.GET_USERINFO_BEGIN:
			return {
				...state,
			};
		case actionTypes.GET_USERINFO_SUCCESS:
			return {
				...state,
				userinfo: action.payload,
			};
		case actionTypes.GET_USERINFO_FAILURE:
			return {
				...state,
				userinfo: undefined,
			};
		case actionTypes.POST_USERTOKENREFRESH_BEGIN:
			return {
				...state,
			};
		case actionTypes.POST_USERTOKENREFRESH_SUCCESS:
			return {
				...state,
				authenticated: true,
			};
		case actionTypes.POST_USERTOKENREFRESH_FAILURE:
			return {
				...state,
				authenticated: false,
			};
		case actionTypes.POST_USERLOGOUT_BEGIN:
			return {
				...state,
			};
		case actionTypes.POST_USERTOKENREFRESH_SUCCESS:
			return {
				...state,
			};
		case actionTypes.POST_USERTOKENREFRESH_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
}