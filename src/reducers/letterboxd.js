import {actionTypes} from '../actions';

const initialState = {
	feed: [],
	feedLoading: false,
	feedError: undefined,
	review: {},
	reviewLoading: false,
	reviewError: undefined,
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
		case actionTypes.GET_REVIEW_BEGIN:
			return {
				...state,
				review: {},
				reviewLoading: true,
				reviewError: undefined,
			};
		case actionTypes.GET_REVIEW_SUCCESS:
			return {
				...state,
				review: action.payload,
				reviewLoading: false,
				reviewError: undefined,
			}
		case actionTypes.GET_REVIEW_FAILURE:
			return {
				...state,
				review: [],
				reviewLoading: false,
				reviewError: action.payload,
			}
		default:
			return state;
	}
}