import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	nav: {
		width: theme.spacing(6),
	},
	body: {
		width: `calc(${100}% - ${theme.spacing(6)}px)`,
	}
}));