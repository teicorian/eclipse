import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import ComponentsHome from './ComponentsHome';
import HeaderPage from './layout/Header';
import UserPage from './identity/User';
import ButtonPage from './general/Button';

function Components() {
	const componentMappings = {
		// ////////////////////////////////////////////////////////// //
		// ///// General //////////////////////////////////////////// //
		button: ButtonPage,

		// ////////////////////////////////////////////////////////// //
		// ///// Identity /////////////////////////////////////////// //
		user: UserPage,

		// ////////////////////////////////////////////////////////// //
		// ///// Layout ///////////////////////////////////////////// //
		header: HeaderPage,
	};

	const DynamicComponents = () => {
		const { component } = useParams();
		const ComponentToRender = componentMappings[component];

		if (!ComponentToRender) {
			// Handle the case when the component is not found
			return <div>Component not found</div>;
		}

		return <ComponentToRender />;
	};
	return (
		<Routes>
			<Route path='' element={<ComponentsHome />} />
			<Route path=':section/:component' element={<DynamicComponents />} />
		</Routes>
	);
}

export default Components;
