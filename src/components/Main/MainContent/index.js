import React from 'react';
import {Card, Typography, Grid} from '@material-ui/core';
import {useStyles} from './styles';
import {MainAvatar, Social} from '../../Main';

const copy = "Hello, my name is Will. I am a New York-based software developer with experience in building full stack applications in various technologies. Check out my LinkedIn or GitHub for more details. Browse around the site for my other projects and hobbies as well. Welcome!"

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