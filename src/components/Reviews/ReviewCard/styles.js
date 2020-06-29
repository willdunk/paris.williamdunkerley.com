import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (backdropImage) => makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(2),
	},
	cardContent: {
		padding: theme.spacing(1),
		"&:last-child": {
			paddingBottom: theme.spacing(1),
		},
		"& p:last-of-type": {
			marginBottom: 0,
		}
	},
	cardMedia: {
		width: '100%',
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
	},
}));