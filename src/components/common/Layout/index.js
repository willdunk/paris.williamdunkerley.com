import React from 'react';
import {Grid} from '@material-ui/core';
import {Nav, Container} from '../../common';

const Layout = (props) => {
	const {children} = props;
	
	return (
		<Grid
			container
		>
			<Grid
				item
				xs={12}
			>
				<Container>
					<Nav />
				</Container>
			</Grid>
			<Grid
				item
				xs={12}
			>
				<Container {...{children}}/>
			</Grid>
		</Grid>
	);
}

export default Layout;