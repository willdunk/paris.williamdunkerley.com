import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (backdropImage) => makeStyles(theme => ({
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
		opacity: .5,
		fontSize: `calc((min(${20}vw, ${theme.breakpoints.values.md/5}px)) - ${theme.spacing(8)/5}px)`,
		marginBottom: theme.spacing(1)
	},
	header: {
		marginTop: theme.spacing(-10),
	},
}));