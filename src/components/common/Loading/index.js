import React from 'react';
import loadinggif from '../../../../assets/static/loading.gif';

const Loading = (props) => {
	return (
		<img {...props} src={loadinggif} />
	);
}

export default Loading;