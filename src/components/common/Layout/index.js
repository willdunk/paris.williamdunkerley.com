import React from 'react';
import {Grid} from '@material-ui/core';
import {Drawer, Container} from '../../common';
import {useStyles} from './styles';

const Layout = (props) => {
	const classes = useStyles();
	
	return (
		<Grid
			container
		>
			<Grid
				item
				classes={{ root: classes.nav }}
			>
				<Drawer />
			</Grid>
			<Grid
				item
				classes={{ root: classes.body }}
			>
				<Container />
			</Grid>
		</Grid>
	);
}

export default Layout;