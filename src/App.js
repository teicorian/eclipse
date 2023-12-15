import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Storybook from './storybook'; // Import your Storybook components

function App() {
	return (
		<Router>
			<Route path='/' component={Storybook} />
		</Router>
	);
}

export default App;
