import React, {useEffect} from 'react';
import { Grid, Link as MUILink, Menu, MenuItem, IconButton, useMediaQuery, Typography} from '@material-ui/core';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Link } from "react-router-dom";
import { useStyles } from './styles';
import theme from '../../../../assets/theme';
import {routes} from '../../../utils';

const MobileNav = (props) => {
	const {classes} = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {setAnchorEl(event.currentTarget);};
	const handleClose = () => {setAnchorEl(null);};

	return [
		(<Grid
			item
			key={0}
		>
			<IconButton
				edge="start"
				aria-controls="nav-menu"
				aria-haspopup="true"
				onClick={handleClick}
				classes={{root: classes.link}}
			>
				<ViewHeadlineIcon />
			</IconButton>
			<Menu
				id="nav-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{routes.filter((route) => route.mainLink).map((route, key) => (
					<Link {...{ key, to: route.path, style: { textDecoration: 'none' } }}>
						<MUILink component={MenuItem} onClick={handleClose}>
							{route.text}
						</MUILink>
					</Link>
				))}
			</Menu>
		</Grid>),(
		<Grid
			item
			key={1}
		>
			<Typography variant="h5" classes={{root: classes.link}}>
				WD.com
			</Typography>
		</Grid>)
	];
};

const Nav = (props) => {
	const classes = useStyles(theme);
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Grid
			container
			justifyContent={isMobile ? "space-between" : "space-around"}
			alignItems="center"
		>
			{isMobile ? <MobileNav {...{classes}}/> : routes.filter((route) => route.mainLink).map((route, key) => (
				<Grid item {...{ key }}>
					<Link {...{ to: route.path, style: { textDecoration: 'none' } }}>
						<MUILink component={'h3'} classes={{ root: classes.link }}>
							{route.text}
						</MUILink>
					</Link>
				</Grid>
			))}
		</Grid>
	);
};

export default Nav;