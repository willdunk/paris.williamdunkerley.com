import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../../actions';
import {Loading} from '../../common';
import {Card} from '../../Reviews';
import {useStyles} from './styles';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const Feed = (props) => {
	const {feed, feedLoading, feedError} = useSelector(state => ({...state.letterboxd}));
	const dispatch = useDispatch();
	const classes = useStyles();

	const [page, setPage] = useState(0);

	const handleNextPage = () => {
		setPage(page+1);
		dispatch(actions.getFeed(page+1));
	}

	const infiniteRef = useInfiniteScroll({
		loading: feedLoading,
		hasNextPage: !(feedError || feed.length%9!==0),
		onLoadMore: handleNextPage,
	});

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
				ref={infiniteRef}
			>
				{feed.map((review, key) => <Grid item {...{ key, xs: 12, sm: 4}}><Card {... { feedLoading, ...review }} /></Grid>)}
				{feedLoading && <Loading className={`${classes.loadingImg}`} />}
			</Grid>
		</Grid>
	)
}

export default Feed;