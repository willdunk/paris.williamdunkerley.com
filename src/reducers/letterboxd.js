import {actionTypes} from '../actions';

const initialState = {
	feed: [],
	feedLoading: false,
};

export const letterboxdReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_FEED_BEGIN:
			return {
				...state,
				feed: [],
				feedLoading: true,
			};
		case actionTypes.GET_FEED_SUCCESS:
			return {
				...state,
				feed: action.payload,
				feedLoading: false,
			}
		case actionTypes.GET_FEED_FAILURE:
			return {
				...state,
				feed: [],
				feedLoading: false,
			}
		default:
			return state;
	}
}