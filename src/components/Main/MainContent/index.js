import React from 'react';
import {Card, Typography, Grid} from '@material-ui/core';
import {useStyles} from './styles';
import {MainAvatar, Social} from '../../Main';

const copy = "I go by many names, including Will, Eric, Slam, and Dunks just to name a few. I'm a Computer Science Student at Stevens Institute of Technology. Check out my resume for the specifics, if you're into that sort of thing. I've got a lot of cool stuff on here, like some of my photography and podcasts. Primarily, I am a programmer and web developer, as my major and career field suggests, but that doesn't mean I can't enjoy other things. I have some of my featured photography on this site under the \"Photography\" page. I also like talking about stuff, so what better way to do that than to podcast, which is under the \"Podcast\" page. Flipside is my primary project, a music - related show, but I do plan to expand out into other subjects like movies and such. Take a look around here, I've got some cool stuff on this site! Contact me with questions, and I'll have an answer! (Although, I can't guarantee that the answer won't be \"I don't know\".)"

const MainContent = (props) => {
	const classes = useStyles();

	return (
		<Grid
			container
			justifyContent="center"
		>
			<Grid
				item
			>
				<MainAvatar />
			</Grid>
			<Grid
				item
				xs={12}
				classes={{ root: classes.gridRoot }}
			>
				<Card
					classes={{ root: classes.cardRoot }}
				>
					<Grid
						container
						justifyContent="center"
					>
						<Grid
							item
							xs={12}
						>
							<Typography>
								{copy}
							</Typography>
						</Grid>
						<Grid
							item
						>
							<Social />
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
}

export default MainContent;