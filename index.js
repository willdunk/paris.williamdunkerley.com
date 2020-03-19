import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from '@material-ui/core';
import theme from './assets/theme';
import Container from './components/Container';

const App = () => (
	<div className="App">
		<ThemeProvider theme={theme}>
			<Container />
		</ThemeProvider>
	</div>
);
ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
