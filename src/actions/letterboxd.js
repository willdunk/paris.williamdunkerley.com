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
		return axios.get(`https://${process.env.API_SUBDOMAIN}.williamdunkerley.com/review`)
			.then((response) => {
				dispatch(getFeedSuccess(response.data.map((review) => ({
					reviewId: review.review_id,
					title: review.title,
					rating: review.rating,
					reviewLink: review.review_link,
					movieLink: review.movie_link,
					backdropImage: review.banner_image_link,
					content: review.content,
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