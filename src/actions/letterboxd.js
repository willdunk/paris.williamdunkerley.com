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
		const parser = new Parser();
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
		return parser.parseURL(`${CORS_PROXY}https://letterboxd.com/hahaveryfun/rss`)
			.then((response) => {
				const reviews = response.items.filter((item) => item.guid.includes('letterboxd-review'));
				const sanitizedReviews = reviews.map((review) => {
					return {
						title: review.title,
						content: review.content,
						movieListing: review.link.replace(response.link, "https://letterboxd.com/"),
						backdropImage: undefined,
					};
				});
				return Promise.all(sanitizedReviews.map((review) => {
					return axios.get(`${CORS_PROXY}${review.movieListing}`)
						.then(function (response) {
							const a = parse5.parse(response.data).childNodes.find((el) => el.nodeName === "html");
							const b = a.childNodes.find((el) => el.nodeName === "body");
							const c = b.childNodes.find((el) => el.nodeName === "div");
							const d = c.childNodes.find((el) => el.nodeName === "div");
							const e = d.attrs.find((attr) => attr.name === "data-backdrop2x" && attr.value !== "backdrop");
							review.backdropImage = e.value;
							return review;
						})
						.catch(function (error) {
							dispatch(getFeedFailure(createError(error)));
							return error;
						});
				}))
				.then((responses) => {
					dispatch(getFeedSuccess(responses));
					return responses;
				})
				.catch((error) => {
					dispatch(getFeedFailure(createError(error)));
					return error;
				});
			})
			.catch((error) => {
				dispatch(getFeedFailure(createError(error)));
				return error;
			});
	}
}

export const actions = {
	getFeed,
}