import React from 'react';
import { TextField } from '@material-ui/core';
import { Main, Reviews, Review, Login, Registration, Podcasts} from '../pages';
const WIP = () => <span>WIP</span>

export const createError = ({message}) => {
	return {
		message,
	};
};

export const routes = [
	{
		path: "/",
		text: "Home",
		exact: true,
		mainLink: true,
		noTitle: true,
		children: <Main />
	},
	{
		path: "/reviews",
		text: "Reviews",
		mainLink: true,
		children: <Reviews />
	},
	{
		path: "/review/:reviewId",
		text: "Reviews",
		mainLink: false,
		children: <Review />
	},
	{
		path: "/travel",
		text: "Travel",
		mainLink: true,
		children: <WIP />
	},
	{
		path: "/photography",
		text: "Photography",
		mainLink: true,
		children: <WIP />
	},
	{
		path: "/blog",
		text: "Blog",
		mainLink: true,
		children: <WIP />
	},
	{
		path: "/podcasts",
		text: "Podcasts",
		mainLink: true,
		children: <Podcasts />
	},
	{
		path: "/login",
		noTitle: true,
		mainLink: false,
		children: <Login />
	},
	{
		path: "/registration",
		noTitle: true,
		mainLink: false,
		children: <Registration />
	}
]

// export const headers = (auth_token) = {
// 	'Authorization': `Bearer ${auth_token}`,
// };

export const ReduxTextField = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
}) => (<TextField
	label={label}
	placeholder={label}
	error={touched && invalid}
	helperText={touched && error}
	{...input}
	{...custom}
/>)