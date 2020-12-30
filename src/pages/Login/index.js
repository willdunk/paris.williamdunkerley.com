import React from 'react';
import { Layout } from '../../components/common';
import {LoginForm} from '../../components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../actions';

const Login = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.getUserInfo());
	}, []);

	// <Route exact path="/">
	// 	{loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
	// </Route>

	return (<Layout>
		<LoginForm />
	</Layout>);
};

export default Login;