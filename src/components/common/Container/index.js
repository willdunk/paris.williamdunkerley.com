import React from "react";
import {Container, Grid} from "@material-ui/core";
import MainContent from '../../Main/MainContent';
import MainAvatar from '../../Main/MainAvatar';
import ReviewFeed from '../../ReviewFeed';
import {useStyles} from './styles';

const ContainerWD = (props) => {
	const classes = useStyles();

	return (
		<Container
			classes={{root: classes.root}}
			maxWidth="md"
		>
			<Grid
				container
				justify="center"
			>
				<Grid
					item
				>
					<MainAvatar />
				</Grid>
				<Grid
					item
					xs={12}
					classes={{ root: classes.cardGridRoot }}
				>
					<MainContent />
				</Grid>
				<Grid
					item
					xs={12}
					md={8}
				>
					<ReviewFeed />
				</Grid>
			</Grid>
		</Container>
	);
}

export default ContainerWD