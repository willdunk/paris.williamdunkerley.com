import React, {useEffect} from 'react';
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
import { useDispatch } from 'react-redux';
import { actions } from './src/actions';

const store = configureStore({});

const Authentication = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.authenticateUser());
	}, []);

	// const {authenticated} = useSelector(state => ({ ...state.login }));

	return (props.children);
};

const App = () => {
	console.log(process.env.HASH);
	return (
		<div className="App">
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Authentication>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<Switch>
								{routes.map((route, key) => <Route
									{...{ key, ...route }}
								/>)}
							</Switch>
						</ThemeProvider>
					</Authentication>
				</ConnectedRouter>
			</Provider>
		</div>
	);
};

export default App;