import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(2),
	},
	cardContentRoot: {
		padding: theme.spacing(1),
		"&:last-child": {
			paddingBottom: theme.spacing(1),
		},
		"& p:last-of-type": {
			marginBottom: 0,
		}

	},
}));