import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../../actions';
import {Loading} from '../../common';
import {ReviewCard} from '../../Reviews';
import {useStyles} from './styles';
import {useParams} from 'react-router-dom';

const ReviewFeed = (props) => {
	const {feed, feedLoading, feedError} = useSelector(state => ({...state.letterboxd}));
	const dispatch = useDispatch();
	const classes = useStyles();
	const {reviewId} = useParams();

	useEffect(() => {
		dispatch(actions.getFeed());
	}, []);

	const renderBody = () => {
		if (feedError) {
			return (<span>{feedError.message || "There was an error"}</span>)
		}
		return (
			feedLoading ? (
				<Loading className={`${classes.loadingImg}`}/>
			) : (
				feed.sort((a, b) => b.publishedDate - a.publishedDate)
				.filter((review) => reviewId===undefined || review.reviewId===reviewId)
				.map((review, key) => <Grid item {...{ key, xs:4 }}><ReviewCard {... { feedLoading, ...review }} /></Grid>)
			)
		);
	}

	return (
		<Grid
			container
			justify={"center"}
		>
			<Grid
				item
				container
				xs={12}
				justify={'center'}
				spacing={2}
			>
				{renderBody()}
			</Grid>
		</Grid>
	)
}

export default ReviewFeed;