import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './components/styles/base.css';
import Home from './pages/Home';
import Components from './pages/components';

function App() {
	const { page } = useParams();
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/components/*' element={<Components />} />
				<Route path='*' element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
