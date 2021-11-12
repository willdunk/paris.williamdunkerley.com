import React from 'react';
import {
	Twitter as TwitterIcon,
	LinkedIn as LinkedInIcon,
	GitHub as GitHubIcon,
	Email as EmailIcon,
	AssignmentInd as ProfileIcon,
} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

const icons = [
	{
		Shape: TwitterIcon,
		link: "https://twitter.com/JGGhahaveryfun", 
	},
	{
		Shape: LinkedInIcon,
		link: "https://www.linkedin.com/in/william-eric-dunkerley",
	},
	{
		Shape: GitHubIcon,
		link: "https://github.com/hahaveryfun",
	},
	{
		Shape: EmailIcon,
		link: "mailto:me@williamdunkerley.com",
	}
]

const Social = (props) => {
	return icons.map((icon, i) => {
		const {Shape, link} = icon;
		return (<IconButton
			size="medium"
			key={i}
			color="primary"
			href={link}
		>
			<Shape />
		</IconButton>);
	});
};

export default Social;