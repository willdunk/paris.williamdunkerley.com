import React from 'react';
import { Main, Reviews, Review, Login } from '../pages';
const WIP = () => <span>WIP</span>

export const createError = ({message}) => {
	console.log(message);
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
		children: <WIP />
	},
	{
		path: "/login",
		noTitle: true,
		mainLink: false,
		children: <Login />
	},
]