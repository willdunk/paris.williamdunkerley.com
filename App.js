import React from 'react';
import { ThemeProvider, CssBaseline, Drawer } from '@material-ui/core';
import theme from './assets/theme';
import { Provider } from 'react-redux';
import store from './src/store';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {Main, Reviews, Review} from './src/pages';

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
						<Route path={"/reviews"}>
							<Reviews/>
						</Route>
						<Route path={"/review/:reviewId"}>
							<Review/>
						</Route>
						<Route path="/travel">
							<span>There</span>
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	</div>
);

export default App;