import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComponentsHome from './ComponentsHome';
import HeaderPage from './layout/Header';
import UserPage from './identity/User';

function Components() {
	return (
		<Routes>
			<Route path='' element={<ComponentsHome />} />

			{/* Identity */}
			<Route path=':section/:component' element={<UserPage />} />

			{/* Layout */}
			<Route path=':section/:component' element={<HeaderPage />} />
		</Routes>
	);
}

export default Components;
