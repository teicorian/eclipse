import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'components';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
	const { section } = useParams();
	return (
		<>
			<NavigationBar />
			{children}
		</>
	);
};

export default Layout;
