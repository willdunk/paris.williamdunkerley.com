import React, {useEffect} from 'react';
import {Card, Grid} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../actions';
import Loading from '../Loading';
import ReviewCard from '../ReviewCard';

const ReviewFeed = (props) => {
	const {feed, feedLoading} = useSelector(state => ({...state.letterboxd}));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.getFeed());
	}, []);

	const items = feed.items || [];
	const reviews = items.filter((item) => {
		return item.guid.includes('letterboxd-review');
	});

	const renderBody = () => {
		return (feedLoading ? (
			<Loading style={{ width: 100, height: 'auto' }} />
		) : (
			reviews.map((review, i) => (<ReviewCard key={i} {...review} />))
		));
	}

	return (
		<Grid
			container
			justify={"center"}
		>
			<Grid
				item
			>
				{renderBody()}
			</Grid>
		</Grid>
	)
}

export default ReviewFeed;