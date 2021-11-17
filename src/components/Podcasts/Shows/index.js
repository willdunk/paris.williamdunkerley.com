import React from 'react';
import { useSelector } from 'react-redux';
import {NewShowForm} from '../';

const Shows = (props) => {
	const { authenticated, userinfo } = useSelector(state => ({ ...state.login }));
	return (authenticated && !!userinfo.is_admin) ? <NewShowForm /> : null;
};

export default Shows;