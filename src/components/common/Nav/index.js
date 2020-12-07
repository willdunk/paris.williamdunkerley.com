import React from 'react';
import {Grid, Link as MUILink} from '@material-ui/core';
import { Link } from "react-router-dom";
import { useStyles } from './styles';
import theme from '../../../../assets/theme';
import {routes} from '../../../utils';

const Nav = (props) => {
	const classes = useStyles(theme);
	return (
		<Grid
			container
			justify="space-around"
		>
			{routes.filter((route) => route.mainLink).map((route, key) => (
				<Grid item {...{key}}>
					<Link {...{to:route.path, style: {textDecoration: 'none'}}}>
						<MUILink component={'h3'} classes={{root: classes.link}}>
							{route.text}
						</MUILink>
					</Link>
				</Grid>
			))}
		</Grid>
	);
};

export default Nav;