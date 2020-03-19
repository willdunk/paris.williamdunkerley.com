import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container';

const App = () => (
	<div className="App">
		<Container />
	</div>
);
ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
