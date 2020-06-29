import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../../actions';
import {Loading} from '../../common';
import {ReviewCard} from '../../Reviews';
import {useStyles} from './styles';

const ReviewFeed = (props) => {
	const {feed, feedLoading, feedError} = useSelector(state => ({...state.letterboxd}));
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(actions.getFeed());
	}, []);

	const renderBody = () => {
		if (feedError) {
			return (<span>{feedError.message || "There was an error"}</span>)
		}
		return (feedLoading ? (
			<Loading className={`${classes.loadingImg}`}/>
		) : (
			feed.sort((a, b) => b.publishedDate - a.publishedDate)
			).map((review, i) => <ReviewCard {... {key: i, ...review}} />)
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
				md={8}
				justify={'center'}
			>
				<Grid
					item
				>
					{renderBody()}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ReviewFeed;