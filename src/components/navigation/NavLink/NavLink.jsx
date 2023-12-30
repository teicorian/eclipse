// NavLink.js

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavLink.css';

const NavLink = ({ to, label, hover, currentPath, onClick, ...props }) => {
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

NavLink.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string,
	currentPath: PropTypes.string,
};

NavLink.defaultProps = {
	to: '/',
	label: 'Home',
	currentPath: '',
};
