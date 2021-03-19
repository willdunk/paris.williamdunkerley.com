import React, {useState} from 'react';
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Grid
} from '@material-ui/core';
import {PlayArrow, Pause} from '@material-ui/icons';

const Episode = (props) => {
	const { title, description, published_date, uri} = props;
	const [paused, setPaused] = useState(true);
	const [audio] = useState(new Audio(uri));

	const handlePlayPause = () => {
		if (audio.paused) {
			audio.play();
			setPaused(false);
		} else {
			audio.pause();
			setPaused(true);
		}
	}

	return (
		<Card>
			<CardContent>
				<Grid
					container
					justify="space-between"
					alignItems="center"
				>
					<Grid
						item
					>
						<Typography
							variant="h4"
						>
							{title}
						</Typography>
					</Grid>
					<Grid
						item
					>
						<Typography
							variant="subtitle1"
						>
							{(new Date(published_date)).toDateString()}
						</Typography>
					</Grid>
				</Grid>
				<Typography
					variant="subtitle1"
				>
					{description}
				</Typography>
				<Grid
					container
					justify="center"
				>
					<Grid
						item
					>
						<IconButton
							aria-label="play"
							onClick={handlePlayPause}
						>
							{paused ? <PlayArrow /> : <Pause />}
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Episode;