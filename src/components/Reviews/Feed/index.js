import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../../actions';
import {Loading} from '../../common';
import {Card} from '../../Reviews';
import {useStyles} from './styles';

const Feed = (props) => {
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
		return (
			feedLoading ? (
				<Loading className={`${classes.loadingImg}`}/>
			) : (
				feed.sort((a, b) => b.publishedDate - a.publishedDate)
				.map((review, key) => <Grid item {...{ key, xs:12, sm:6, md:4 }}><Card {... { feedLoading, ...review }} /></Grid>)
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

export default Feed;