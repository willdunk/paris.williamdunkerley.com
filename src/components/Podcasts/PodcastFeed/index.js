import React from 'react';
import {NewShowForm} from '../';
import {Grid} from '@material-ui/core';

const PodcastFeed = (props) => {
	return (
		<Grid
			container
			justify="center"
		>
			<Grid
				item
				xs={12}
				md={8}
			>
				<NewShowForm />
			</Grid>
		</Grid>
	);
}

export default PodcastFeed;