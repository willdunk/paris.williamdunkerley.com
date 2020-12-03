import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Zoom,
} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
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
			<Card>
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
						classes={{ root: classes.rating }}
					>
						<Rating {...{ value: rating / 2, max: 5, precision: 0.5, readOnly: true, }} />
					</Typography>
					<Typography
						variant="h6"
						classes={{ root: classes.title }}
					>
						{title}
					</Typography>
					<Typography
						display="inline"
						component="div"
						classes={{root: classes.body}}
					>
						{parse(content, parseOptions)[2]}
					</Typography>
				</CardContent>
			</Card>
		</Zoom>
	);
}

export default ReviewCard;