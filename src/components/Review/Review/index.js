import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../actions';
import { Loading } from '../../common';
import { useParams } from 'react-router-dom';
import {useStyles} from './styles';
import parse from 'html-react-parser';
import {Grid, Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import {Rating} from '@material-ui/lab';

const Review = (props) => {
	const { review, reviewLoading, reviewError } = useSelector(state => ({ ...state.letterboxd }));
	const {title, backdropImage, rating, content} = review || {}
	const dispatch = useDispatch();
	const { reviewId } = useParams();
	const classes = useStyles(backdropImage)();

	useEffect(() => {
		dispatch(actions.getReview(reviewId));
	}, []);

	const parseOptions = {
		replace: ({ name, children }) => (name === 'p' && children.length === 1 && children[0].name === "img" ? <></> : null)
	};

	return (
		<Grid
			container
		>
			<Grid
				item
				container
				justifyContent="center"
			>
				{reviewError && <span>{reviewError.message || "There was an error"}</span>}
				{reviewLoading && !reviewError && <Loading className={`${classes.loadingImg}`}/>}
				{!reviewLoading && !reviewError && <Card>
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
						<Grid container>
							<Grid item xs={12} classes={{root: classes.header}}>
								<Grid container justifyContent="center">
									<Grid item>
										<Rating {...{
											value: rating / 2,
											max: 5,
											precision: 0.5,
											readOnly: true,
											size: 'large',
											classes: { root: classes.rating }
										}} />
									</Grid>
								</Grid>
								<Typography
									variant="h4"
									classes={{ root: classes.title }}
								>
									{title}
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									display="inline"
									component="div"
								>
									{!!content && parse(content, parseOptions)}
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>}
			</Grid>
		</Grid>
	)
}

export default Review;