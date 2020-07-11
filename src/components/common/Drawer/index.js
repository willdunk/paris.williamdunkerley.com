import React, {useState} from "react";
import {
	Drawer as DrawerMUI,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from './styles';
import {
	Menu as MenuIcon,
	Home as HomeIcon,
	Comment as CommentIcon,
	Mic as MicIcon,
} from '@material-ui/icons';

const items = [
	{
		link: "/",
		text: "Home",
		icon: <HomeIcon/>,
	},
	{
		link: "/reviews",
		text: "Reviews",
		icon: <CommentIcon/>,
	},
	{
		link: '/podcasts',
		text: 'Podcasts',
		icon: <MicIcon />
	},
]

const Drawer = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles();
	return (
		<div
			className={classes.bar}
		>
			<IconButton
				color='primary'
				onClick={() => setIsOpen(true)}
			>
				<MenuIcon />
			</IconButton>
			<DrawerMUI
				open={isOpen}
			>
				<List>
					{items.map((item, index) => (
						<ListItem
							component={Link}
							to={item.link}
							button
							key={item.text}
						>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								primary={item.text}
							/>
						</ListItem>
					))}
				</List>
			</DrawerMUI>
		</div>
	)
}

export default Drawer