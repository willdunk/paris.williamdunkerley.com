import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Nav, Container, Bar} from '../../common';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import {routes} from '../../../utils';
import theme from '../../../../assets/theme';

const Layout = (props) => {
	const {children} = props;
	const classes = useStyles(theme);
	const location = useLocation();
	const route = routes.find(route => matchPath(location.pathname, route));
	
	return (
		<Grid
			container
		>
			<Bar/>
			<Grid
				item
				xs={12}
				classes={{root: classes.nav}}
			>
				<Container>
					<Nav />
				</Container>
			</Grid>
			{!route.text && <Grid
				item
				xs={12}
			>
				<Typography variant="h3" classes={{root: classes.title}}>
					{route.text}
				</Typography>
			</Grid>}
			<Grid
				item
				xs={12}
				classes={{root: classes.container}}
			>
				<Container {...{children}}/>
			</Grid>
		</Grid>
	);
}

export default Layout;