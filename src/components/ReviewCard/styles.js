import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(2),
		padding: theme.spacing(1),
		"& p > img": {
			width: 100, 
		},
		"& p:first-of-type": {
			textAlign: 'center',
		}
	}
}));