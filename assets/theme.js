import {createMuiTheme} from '@material-ui/core/styles';
import {blue, lightblue} from './colors/blue';

export const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: lightblue,
		background: {
			default: blue.main,
		},
	},
	typography: {
		fontFamily: [
			'"Dosis"',
			'sans-serif'
		].join(','),
	}
});

export default theme;