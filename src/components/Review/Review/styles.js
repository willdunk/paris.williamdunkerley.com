import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (backdropImage) => makeStyles(theme => ({
	root: {
		margin: `${theme.spacing(2)}px ${0}px`,
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
		height: 'auto',
		background: `linear-gradient(transparent, white), url(${backdropImage})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
	},
	backdropImageFrame: {
		width: '100%',
		height: 'auto',
		visibility: 'hidden',
	},
	loadingImg: {
		width: theme.spacing(20),
		height: 'auto',
	},
	title: {
		textAlign: 'center',
	},
	rating: {
		fontSize: theme.spacing(10),
		marginBottom: theme.spacing(2)
	},
	header: {
		marginTop: theme.spacing(-20),
	},
}));