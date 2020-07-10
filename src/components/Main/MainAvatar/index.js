import React from 'react';
import {Avatar} from '@material-ui/core';
import {useStyles} from './styles';

// const img = "http://dripbox-qa.williamdunkerley.com/drip/a664c077-990e-406b-a459-dcbc541e7a77";
const img = "https://avatars3.githubusercontent.com/u/6320828?s=460&u=3711ba34e57e482444bfccb4c5992024e6b4b134&v=4";

const MainAvatar = (props) => {
	const classes = useStyles();

	return (
		<Avatar 
			alt="Will Dunkerley"
			src={img}
			classes={{root: classes.root}}
		/>
	);
};

export default MainAvatar;