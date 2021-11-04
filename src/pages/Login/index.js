import React, {useEffect} from 'react';
import { Layout } from '../../components/common';
import {LoginForm} from '../../components/Login';

const Login = (props) => {
	return (<Layout>
		<LoginForm />
	</Layout>);
};

export default Login;