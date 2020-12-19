import { actionTypes } from '../actions';

const initialState = {
	access_token: undefined,
	refresh_token: undefined,
	login_error: undefined,
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.POST_USERLOGIN_BEGIN:
			return {
				...state,
				access_token: undefined,
				refresh_token: undefined,
				login_error: undefined,
			};
		case actionTypes.POST_USERLOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				login_error: undefined,
			};
		case actionTypes.POST_USERLOGIN_FAILURE:
			return {
				...state,
				access_token: undefined,
				refresh_token: undefined,
				login_error: action.payload,
			};
		default:
			return state;
	}
}