import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	cardGridRoot: {
		marginTop: -theme.spacing(5),
	},
	root: {
		width: `${100}%`,
	},
}));