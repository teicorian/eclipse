import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarLink.css';

const NavLink = ({ key, to, label, hover, ...props }) => {
	if (!to) {
		to = '/';
	}

	if (to.charAt(0) !== '/') {
		to = `/${to}`;
	}

	if (!key) key = label;

	const currentPath = location.pathname;
	const isActive = currentPath === to;
	return (
		<Link to={to} className={`sidebarlink ${isActive ? 'active' : ''}`}>
			{label}
		</Link>
	);
};

export default NavLink;
