import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (backdropImage) => makeStyles(theme => ({
	card: {
		cursor: 'pointer',
		'&:hover .cardImage': {
			transform: `scale(${1.05})`,
		},
	},
	cardContent: {
		padding: theme.spacing(1),
		"&:last-child": {
			paddingBottom: theme.spacing(1),
		},
		"& p:last-of-type": {
			marginBottom: 0,
		},
		backgroundColor: 'white',
	},
	cardMedia: {
		width: '100%',
		background: `url(${backdropImage})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		transition: `all ${.5}s`,
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
		zIndex: 1,
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