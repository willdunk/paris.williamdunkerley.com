import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	link: {
		color: theme.palette.primary.contrastText,
		// "& > a": {
		// 	textDecoration: 'none',
		// },
	},
}));