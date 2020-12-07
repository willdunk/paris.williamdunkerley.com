import React from 'react';
import {Grid} from '@material-ui/core';
import {Nav, Container} from '../../common';
import { useStyles } from './styles';

const Layout = (props) => {
	const {children} = props;
	const classes = useStyles();
	
	return (
		<Grid
			container
		>
			<Grid
				item
				xs={12}
				classes={{root: classes.nav}}
			>
				<Container>
					<Nav />
				</Container>
			</Grid>
			<Grid
				item
				xs={12}
			>
				<Container {...{children}}/>
			</Grid>
		</Grid>
	);
}

export default Layout;