// NavLink.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, label, hover, path, ...props }) => {
	if (!path) {
		path = '';
	}
	const hoverStyle = [];
	const isActive = path === to;
	to = `/${to}`;

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
