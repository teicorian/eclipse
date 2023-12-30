// NavLink.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, label, hover, onClick, ...props }) => {
	const currentPath = location.pathname;
	const isActive = currentPath === to;
	const hoverStyle = [];

	if (hover) {
		hoverStyle.push('navlink-wrap-hover');
	} else {
		hoverStyle.push('navlink-wrap-nohover');
	}

	return (
		<div className={`navlink ${isActive ? 'active' : ''}`}>
			<Link to={to} className={`link ${isActive ? 'active' : ''}`}>
				<div className={`${hoverStyle}`} {...props}>
					{label}
				</div>
			</Link>
		</div>
	);
};

export default NavLink;
