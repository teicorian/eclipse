// NavLink.js

import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavLink.css';

const NavLink = ({ to, label, currentPath, ...props }) => {
	const isActive = currentPath === to;

	return (
		<div className={`navlink ${isActive ? 'active' : ''}`}>
			<div className={`navlink-wrap`} {...props}>
				{label}
			</div>
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
