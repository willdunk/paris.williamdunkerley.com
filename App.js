import React from 'react';
import { ThemeProvider, CssBaseline, Drawer } from '@material-ui/core';
import theme from './assets/theme';
import { Provider } from 'react-redux';
import store from './src/store';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import {Main, Reviews, Podcasts} from './src/pages';

const App = () => (
	<div className="App">
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path="/">
							<Main/>
						</Route>
						<Route path="/reviews">
							<Reviews/>
						</Route>
						<Route path="/travel">
							<span>There</span>
						</Route>
						<Route path="/podcasts">
							<Podcasts />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	</div>
);

export default App;