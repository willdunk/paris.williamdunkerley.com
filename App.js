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
import {routes} from "./src/utils";

const App = () => (
	<div className="App">
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Switch>
						{routes.map((route, key) => <Route 
							{...{ key, ...route}} 
						/>)}
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	</div>
);

export default App;