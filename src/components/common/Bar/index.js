import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { useStyles } from './styles';
import theme from '../../../../assets/theme';
import { actions } from '../../../actions';

const LogoutButton = (props) => {
	const dispatch = useDispatch();
	const x = 5;
	return (<Button
		color="inherit"
		onClick={() => {
			console.log("logout");
			dispatch(actions.postUserLogout(()=>{console.log(5)}));
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
	return (<Button
		color="inherit"
		onClick={() => {
			console.log("login");
		}}
	>
		Login
	</Button>);
};

const Bar = (props) => {
	const { authenticated, userinfo, redirectToLogin, redirectToHome } = useSelector(state => ({ ...state.login }));
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
			{authenticated && !!userinfo.username ? <UserContext {...userinfo}/> : <LoginButton/>}
		</Toolbar>
	</AppBar>);
};

export default Bar;