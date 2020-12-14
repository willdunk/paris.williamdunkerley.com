import React, {useEffect, useState} from 'react';
import {Grid, Fab} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../../actions';
import {Loading} from '../../common';
import {Card} from '../../Reviews';
import {useStyles} from './styles';
import {MoreHoriz} from '@material-ui/icons';

const Feed = (props) => {
	const {feed, feedLoading, feedError} = useSelector(state => ({...state.letterboxd}));
	const dispatch = useDispatch();
	const classes = useStyles();

	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(actions.getFeed(page));
	}, []);

	const handleNextPage = () => {
		setPage(page+1);
		console.log(page);
		dispatch(actions.getFeed(page+1));
	} 

	const renderLoading = () => {
		if (feedError) {
			return (<span>{feedError.message || "There was an error"}</span>)
		}
		return (
			feedLoading ? (
				<Loading className={`${classes.loadingImg}`}/>
			) : (
				<Fab
					color="secondary"
					aria-label="Load More"
					variant="extended"
					classes={{ root: classes.loadMore }}
					onClick={handleNextPage}
				>
					<MoreHoriz
						className={classes.loadMoreIcon}
					/>
					Load More
				</Fab>
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
				{feed.map((review, key) => <Grid item {...{ key, xs: 12, sm: 6, md: 4 }}><Card {... { feedLoading, ...review }} /></Grid>)}
			</Grid>
			<Grid
				item
			>
				{renderLoading()}
			</Grid>
		</Grid>
	)
}

export default Feed;