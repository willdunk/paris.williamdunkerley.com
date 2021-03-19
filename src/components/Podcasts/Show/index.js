import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { useStyles } from './styles';
import theme from '../../../../assets/theme';
import {Episode} from '../../Podcasts';

const Show = (props) => {
	const {show_id, title, description, episodes} = props;
	const classes = useStyles(theme);

	return [
		<Grid
			key={0}
			container
			direction="column"
			alignItems="center"
		>
			<Grid
				item
			>
				<Typography
					variant='h2'
					classes={{root: classes.title}}
				>
					{title}
				</Typography>
			</Grid>
			<Grid
				item
			>
				<Typography
					variant='subtitle1'
					classes={{ root: classes.title }}
				>
					{description}
				</Typography>
			</Grid>
		</Grid>,
		<Grid
			key={1}
			container
			justify="center"
		>
			{episodes.map((episode, i) => (<Grid
				key={i}
				item
				xs={10}
			>
				<Episode {...episode}/>
			</Grid>))}
		</Grid>
	];
};

export default Show;