import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './components/styles/base.css';
import './pages/code-theme.css';
import Home from './pages/Home';
import Components from './pages/production_components';

function App() {
	const pageMappings = {
		components: Components,
	};

	const DynamicComponents = () => {
		const { page } = useParams();
		const PageToRender = pageMappings[page];

		if (!PageToRender) {
			// Handle the case when the component is not found
			return <div>Page not found</div>;
		}

		return <PageToRender />;
	};
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:page/*' element={<DynamicComponents />} />
				<Route path='*' element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
