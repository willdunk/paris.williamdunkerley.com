import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../actions';

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
	
	return reviews.map((review, i) => (
		<Card
			key={i}
			style={{ marginTop: 8, }}
		>
			{review.title}
 			<br />
 			{review.contentSnippet}
		</Card>
	));
}

export default ReviewFeed;