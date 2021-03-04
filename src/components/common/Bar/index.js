import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { useStyles } from './styles';
import theme from '../../../../assets/theme';
import { actions } from '../../../actions';
import { useHistory } from 'react-router-dom';

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

const UserContext = ({username}) => {
	return (<>
		<Typography>
			{username}
		</Typography>
		<LogoutButton/>
	</>);
};

const LoginButton = (props) => {
	const history = useHistory();
	return (<Button
		color="inherit"
		onClick={() => {
			history.push('/login');
			history.go(0);
		}}
	>
		Login
	</Button>);
};

const Bar = (props) => {
	const { authenticated, userinfo} = useSelector(state => ({ ...state.login }));
	const classes = useStyles(theme);

	return (<AppBar
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
			{authenticated && !!userinfo ? <UserContext {...userinfo}/> : <LoginButton/>}
		</Toolbar>
	</AppBar>);
};

export default Bar;