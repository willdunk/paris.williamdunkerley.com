import React from 'react';
import Card from '@material-ui/core/Card';
import parse from 'html-react-parser';
import {useStyles} from './styles';

const ReviewCard = (props) => {
	const {title, content} = props || {};
	const classes = useStyles();
	
	console.log(props);

	return (
		<Card
			classes={{root: classes.root}}
		>
			{title}
			<br />
			{parse(content)}
		</Card>
	);
}

export default ReviewCard;