import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	gridRoot: {
		marginTop: -theme.spacing(5),
	},
	cardRoot: {
		padding: theme.spacing(1),
		paddingTop: theme.spacing(5),
	}
}));