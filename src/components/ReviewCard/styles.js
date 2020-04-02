import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(2),
	},
	cardContentRoot: {
		padding: theme.spacing(1),
	},
}));