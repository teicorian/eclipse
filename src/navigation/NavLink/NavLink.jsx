// NavLink.js

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NavLink.css';

const NavLink = ({ to, label, currentPath, ...props }) => {
	const isActive = currentPath === to;

	return (
		<div className={`navlink ${isActive ? 'active' : ''}`}>
			<a ahref={to}>
				<div className={`navlink-wrap`} {...props}>
					{label}
				</div>
			</a>
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
