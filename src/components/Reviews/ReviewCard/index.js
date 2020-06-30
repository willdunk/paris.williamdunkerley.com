import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Zoom
} from '@material-ui/core';
import parse from 'html-react-parser';
import {useStyles} from './styles';

const ReviewCard = (props) => {
	const {title, content, backdropImage, rating, feedLoading} = props || {};
	const classes = useStyles(backdropImage)();

	const parseOptions = {
		replace: ({ name, children }) => (name === 'p' && children.length === 1 && children[0].name === "img" ? <></> : null)
	};

	return (
		<Zoom
			in={!feedLoading}
		>
			<Card
				classes={{ root: classes.root }}
			>
				<CardMedia
					classes={{ root: classes.cardMedia }}
					component="div"
				>
					<img
						className={classes.backdropImageFrame}
						alt={title}
						src={backdropImage}
					/>
				</CardMedia>
				<CardContent
					classes={{ root: classes.cardContent }}
				>
					<Typography
						variant="h6"
						classes={{ root: classes.title }}
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
		</Zoom>
	);
}

export default ReviewCard;