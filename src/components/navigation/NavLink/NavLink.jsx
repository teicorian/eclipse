// NavLink.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, label, hover, path, ...props }) => {
	const hoverStyle = [];
	const isActive = path === to;

	if (!to) {
		to = '/';
	}

	if (to.charAt(0) !== '/') {
		to = `/${to}`;
	}

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
