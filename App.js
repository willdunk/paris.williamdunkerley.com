import React from 'react';
import { ThemeProvider, CssBaseline, Drawer } from '@material-ui/core';
import theme from './assets/theme';
import { Provider } from 'react-redux';
import configureStore, { history } from './src/store';
import {
	Switch,
	Route,
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import {routes} from "./src/utils";

const store = configureStore({});

const App = () => {
	console.log(process.env.HASH);
	return (
		<div className="App">
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Switch>
							{routes.map((route, key) => <Route
								{...{ key, ...route }}
							/>)}
						</Switch>
					</ThemeProvider>
				</ConnectedRouter>
			</Provider>
		</div>
	);
}

export default App;