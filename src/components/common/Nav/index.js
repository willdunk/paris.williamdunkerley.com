import React from 'react';
import {Grid, Link as MUILink} from '@material-ui/core';
import { Link } from "react-router-dom";
import { useStyles } from './styles';
import theme from '../../../../assets/theme';

const items = [
	{
		link: "/",
		text: "Home",
	},
	{
		link: "/reviews",
		text: "Reviews",
	},
	{
		link: "/travel",
		text: "Travel",
	},
	{
		link: "/photography",
		text: "Photography",
	},
	{
		link: "/blog",
		text: "Blog",
	},
	{
		link: "/podcasts",
		text: "Podcasts",
	},
]

const Nav = (props) => {
	const classes = useStyles(theme);
	return (
		<Grid
			container
			justify="space-around"
		>
			{items.map((item, key) => (
				<Grid item {...{key}}>
					<Link {...{to:item.link, style: {textDecoration: 'none'}}}>
						<MUILink component={'h3'} classes={{root: classes.link}}>
							{item.text}
						</MUILink>
					</Link>
				</Grid>
			))}
			
		</Grid>
	);
};

export default Nav;