import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarLink.css';

const NavLink = ({ to, label, hover, ...props }) => {
	const currentPath = location.pathname;
	const isActive = currentPath === to;
	return (
		<Link to={to} className={`sidebarlink ${isActive ? 'active' : ''}`}>
			{label}
		</Link>
	);
};

export default NavLink;
