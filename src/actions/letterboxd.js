import Parser from 'rss-parser';
import {createError} from '../utils';
import axios from 'axios';
import parse5 from 'parse5';

export const actionTypes = {
	GET_FEED_BEGIN: "GET_FEED_BEGIN",
	GET_FEED_SUCCESS: "GET_FEED_SUCCESS",
	GET_FEED_FAILURE: "GET_FEED_FAILURE",
	GET_OVERVIEW_BEGIN: "GET_OVERVIEW_BEGIN",
	GET_OVERVIEW_SUCCESS: "GET_OVERVIEW_SUCCESS",
	GET_OVERVIEW_FAILURE: "GET_OVERVIEW_FAILURE",
}

const getFeedBegin = () => ({
	type: actionTypes.GET_FEED_BEGIN,
});

const getFeedSuccess = (payload) => ({
	type: actionTypes.GET_FEED_SUCCESS,
	payload,
});

const getFeedFailure = (payload) => ({
	type: actionTypes.GET_FEED_FAILURE,
	payload,
});

const getFeed = () => {
	return (dispatch) => {
		dispatch(getFeedBegin());
		return axios.get("https://prague.williamdunkerley.com/review")
			.then((response) => {
				dispatch(getFeedSuccess(response.data.map((review) => ({
					title: review.filmTitle,
					content: review.content,
					movieListing: review.link,
					backdropImage: review.backdrop,
				}))));
				return response;
			})
			.catch((error) => {
				dispatch(getFeedFailure(createError(error)));
				return error;
			})
	}
}

export const actions = {
	getFeed,
}