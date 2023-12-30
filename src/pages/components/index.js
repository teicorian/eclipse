import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComponentsHome from './ComponentsHome';
import HeaderPage from './layout/Header';

function Components() {
	return (
		<Routes>
			<Route path='' element={<ComponentsHome />} />
			<Route path=':section/:component' element={<HeaderPage />} />
		</Routes>
	);
}

export default Components;
