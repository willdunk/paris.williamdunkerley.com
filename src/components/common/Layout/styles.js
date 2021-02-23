import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	nav: {
		margin: `${theme.spacing(3)}px ${0}px ${theme.spacing(4)}`,
		[theme.breakpoints.down('xs')]: {
			marginBottom: theme.spacing(0),
		},
	},
	title: {
		color: theme.palette.primary.contrastText,
		textAlign: 'center',
	},
	container: {
		padding: `${theme.spacing(2)}px ${0}px`,
	},
}));