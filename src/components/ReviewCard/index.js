import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import parse from 'html-react-parser';
import {useStyles} from './styles';

const ReviewCard = (props) => {
	const { title, content, backdropImage } = props || {};
	const classes = useStyles();

	return (
		<Card
			classes={{root: classes.root}}
		>
			<CardMedia
				component={"img"}
				src={backdropImage}
				alt={title}
				classes={{root: classes.cardMediaRoot}}
			/>
			<CardContent
				classes={{root: classes.cardContentRoot}}
			>
				<Typography variant="h6">
					{title}
				</Typography>
				<Typography>
					{parse(content)}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default ReviewCard;