import React, {useState} from "react";
import {Container, Grid} from "@material-ui/core";
import Drawer from "../Drawer";
import MainContent from '../MainContent';
import MainAvatar from '../MainAvatar';
import {blue} from '../../assets/colors/blue';

const ContainerWD = (props) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<Container fixed>
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
				>
					<MainContent />
				</Grid>
			</Grid>
		</Container>
	);
}

export default ContainerWD