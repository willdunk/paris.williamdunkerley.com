import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import parse from 'html-react-parser';
import {useStyles} from './styles';

const ReviewCard = (props) => {
	const { title, content, backdropImage, rating} = props || {};
	const classes = useStyles(backdropImage)();

	const parseOptions = {
		replace: ({ name, children }) => (name === 'p' && children.length === 1 && children[0].name === "img" ? <></> : null)
	};

	return (
		<Card
			classes={{root: classes.root}}
		>
			<CardMedia
				classes={{root: classes.cardMedia}}
				component="div"
			>
				<img
					className={classes.backdropImageFrame}
					alt={title}
					src={backdropImage}
				/>
			</CardMedia>
			<CardContent
				classes={{root: classes.cardContent}}
			>
				<Typography
					variant="h6"
					classes={{root: classes.title}}
				>
					{title} - {rating}/10
				</Typography>
				<Typography
					display="inline"
					component="div"
				>
					{parse(content, parseOptions)}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default ReviewCard;