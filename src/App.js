import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/styles/base.css';
import Home from './pages/Home';
import HeaderPage from './pages/components/layout/Header';
import Components from './pages/components';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/components/*' element={<Components />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
