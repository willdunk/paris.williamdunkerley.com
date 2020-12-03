import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (backdropImage) => makeStyles(theme => ({
	cardContent: {
		padding: theme.spacing(1),
		"&:last-child": {
			paddingBottom: theme.spacing(1),
		},
		"& p:last-of-type": {
			marginBottom: 0,
		},
		marginTop: theme.spacing(-6),
	},
	cardMedia: {
		width: '101%',
		background: `linear-gradient(transparent, white), url(${backdropImage})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
	},
	backdropImageFrame: {
		width: '100%',
		height: 'auto',
		visibility: 'hidden',
	},
	title: {
		textAlign: 'center',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		'-webkit-line-clamp': 1,
		'-webkit-box-orient': 'vertical',
	},
	rating: {
		textAlign: 'center',
	},
	body: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		'-webkit-line-clamp': 3,
		'-webkit-box-orient': 'vertical',
		'& p': {
			marginTop: 0,
		}
	}
}));