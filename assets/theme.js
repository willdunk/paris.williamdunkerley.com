import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#334364',
			contrastText: '#FFFFFF'
		},
		secondary: {
			main: '#447ee3',
			contrastText: '#000000'
		}
	},
	typography: {
		fontFamily: [
			'"Dosis"',
			'sans-serif'
		].join(','),
	}
});

export default theme;