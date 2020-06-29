import React from "react";
import {Container, Grid} from "@material-ui/core";
import {useStyles} from './styles';

const ContainerWD = (props) => {
	const {children} = props;
	const classes = useStyles();

	return (
		<Container
			classes={{root: classes.root}}
			maxWidth="md"
		>
			{children}
		</Container>
	);
}

export default ContainerWD