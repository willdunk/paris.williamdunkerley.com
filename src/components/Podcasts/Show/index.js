import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { useStyles } from './styles';
import theme from '../../../../assets/theme';

const Show = (props) => {
	const {show_id, title, description, episodes} = props;
	const classes = useStyles(theme);

	return (
		<Grid
			container
			justify="center"
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
		</Grid>
	);
};

export default Show;