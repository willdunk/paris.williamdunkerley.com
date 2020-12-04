import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../actions';
import { Loading } from '../../common';
import { useParams } from 'react-router-dom';
import {Card} from '@material-ui/core';

const Review = (props) => {
	const { review, reviewLoading, reviewError } = useSelector(state => ({ ...state.letterboxd }));
	const dispatch = useDispatch();
	const { reviewId } = useParams();

	useEffect(() => {
		dispatch(actions.getReview(reviewId));
	}, []);

	return (
		<div>
			{reviewError && <span>{reviewError.message || "There was an error"}</span>} 
			{reviewLoading && !reviewError && <Loading />}
			{!reviewLoading && !reviewError && <Card>
				{reviewId}
			</Card>}
		</div>
	)
}

export default Review;