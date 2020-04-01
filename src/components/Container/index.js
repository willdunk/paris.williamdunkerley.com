import React, {useState} from "react";
import {Container, Grid} from "@material-ui/core";
import Drawer from "../Drawer";
import MainContent from '../MainContent';
import MainAvatar from '../MainAvatar';
import ReviewFeed from '../ReviewFeed';
import {useStyles} from './styles';

const ContainerWD = (props) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const classes = useStyles();

	return (
		<Container
			maxWidth="md"
		>
			<Drawer
				key={1}
				isOpen={isDrawerOpen}
			/>
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
					classes={{root: classes.cardGridRoot}}
				>
					<MainContent />
				</Grid>
				<Grid
					item
					xs={8}
				>
					<ReviewFeed />
				</Grid>
			</Grid>
		</Container>
	);
}

export default ContainerWD