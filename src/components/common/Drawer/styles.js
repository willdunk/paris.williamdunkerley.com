import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	bar: {
		width: `${100}%`,
		height: `${100}%`,
		minHeight: `${100}vh`,
		backgroundColor: theme.palette.secondary.main,
	},
}));