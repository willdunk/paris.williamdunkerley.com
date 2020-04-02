import React from 'react';
import Card from '@material-ui/core/Card';
import parse from 'html-react-parser';
import {useStyles} from './styles';

const ReviewCard = (props) => {
	const { title, content, backdropImage } = props || {};
	const classes = useStyles();

	return (
		<Card
			classes={{root: classes.root}}
		>
			{title}
			<br />
			<img src={backdropImage} />
			<br />
			{parse(content)}
		</Card>
	);
}

export default ReviewCard;