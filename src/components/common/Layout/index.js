import React, {useEffect} from 'react';
import {Grid, Typography, AppBar, Toolbar, Button} from '@material-ui/core';
import {Nav, Container} from '../../common';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import {routes} from '../../../utils';
import theme from '../../../../assets/theme';
import { useSelector} from 'react-redux';

const Layout = (props) => {
	const {children} = props;
	const classes = useStyles(theme);
	const location = useLocation();
	const route = routes.find(route => matchPath(location.pathname, route));
	const { authenticated, userinfo } = useSelector(state => ({ ...state.login }));

	return (
		<Grid
			container
		>
			<AppBar
				position="static"
				color="secondary"
			>
				<Toolbar
					variant="dense"
				>
					<Typography
						classes={{ root: classes.title }}
					>
						WilliamDunkerley.com
					</Typography>
					{authenticated && userinfo.username !== undefined ? <Typography>
						Logged in as {userinfo.username}
					</Typography> : <Button
						color="inherit"
					>
							Login
					</Button>}
				</Toolbar>
			</AppBar>
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