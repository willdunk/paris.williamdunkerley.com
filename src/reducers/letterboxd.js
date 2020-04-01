import {actionTypes} from '../actions';

const initialState = {
	feed: [],
	feedLoading: false,
	feedError: undefined,
};

export const letterboxdReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_FEED_BEGIN:
			return {
				...state,
				feed: [],
				feedLoading: true,
				feedError: undefined,
			};
		case actionTypes.GET_FEED_SUCCESS:
			return {
				...state,
				feed: action.payload,
				feedLoading: false,
				feedError: undefined,
			}
		case actionTypes.GET_FEED_FAILURE:
			return {
				...state,
				feed: [],
				feedLoading: false,
				feedError: action.payload,
			}
		default:
			return state;
	}
}