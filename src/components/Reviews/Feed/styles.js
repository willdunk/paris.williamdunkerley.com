import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	cardsContainer: {
		textAlign: 'center',
	},
	loadingImg: {
		width: theme.spacing(20),
		alignSelf: 'center',
	},
	loadMore: {
		marginTop: theme.spacing(4)
	},
	loadMoreIcon: {
		marginRight: theme.spacing(1),
	},
}));