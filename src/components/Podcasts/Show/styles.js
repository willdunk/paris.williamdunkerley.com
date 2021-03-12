import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	title: {
		color: theme.palette.getContrastText(theme.palette.background.default)
	}
}));