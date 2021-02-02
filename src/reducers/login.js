import { actionTypes } from '../actions';

const initialState = {
	userinfo: {}
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
				...action.payload,
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
			};
		default:
			return state;
	}
}