import React, {useEffect} from 'react';
import { Layout } from '../../components/common';
import {LoginForm} from '../../components/Login';
import { useSelector, useDispatch} from 'react-redux';
import { actions } from '../../actions';

const Login = (props) => {
	return (<Layout>
		<LoginForm />
	</Layout>);
};

export default Login;