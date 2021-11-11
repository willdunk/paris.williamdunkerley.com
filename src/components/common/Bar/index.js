import React from 'react';
import {AppBar, Toolbar, Typography, Button, Grid} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { useStyles } from './styles';
import theme from '../../../../assets/theme';
import { actions } from '../../../actions';
import { useHistory } from 'react-router-dom';
import pinkCursor from '../../../../assets/static/pinkCursor.png';

const LogoutButton = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	return (<Button
		color="inherit"
		onClick={() => {
			dispatch(actions.logoutUser(() => {
				history.push('/login');
				history.go(0);
			}));
		}}
	>
		Logout
	</Button>);
};

const UserContext = ({username, classes}) => {
	return (<Grid
		container
		spacing={1}
		alignItems="center"
	>
		<Typography classes={{root: classes.username}}>
			{username}
		</Typography>
		<LogoutButton />
	</Grid>);
};

const WDButton = ({path, label}) => {
	const history = useHistory();
	return (<Button
		color="inherit"
		onClick={() => {
			history.push(path);
			history.go(0);
		}}
	>
		{label}
	</Button>);
};

const LoginContext = (props) => {
	const buttons = [
		{
			path: "/login",
			label: "Login",
		},
		{
			path: "/registration",
			label: "Register",
		},
	]
	return (
		<Grid
			container
			spacing={1}
		>
			{buttons.map((button, i) => <Grid
				item
				key={i}
			>
				<WDButton {...button}/>
			</Grid>)}
		</Grid>
	);
}

const Bar = (props) => {
	const { authenticated, userinfo} = useSelector(state => ({ ...state.login }));
	document.body.style.cursor = userinfo && userinfo.username === "maddie" ? `url(${pinkCursor}) 0 0, auto` : 'auto';
	const classes = useStyles(theme);

	return (<AppBar
		position="static"
		color="secondary"
	>
		<Toolbar
			variant="dense"
		>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography>
					WilliamDunkerley.com
				</Typography>
				<Grid item>
					{authenticated && !!userinfo ? <UserContext {...{...userinfo, classes}} /> : <LoginContext />}
				</Grid>
			</Grid>
		</Toolbar>
	</AppBar>);
};

export default Bar;