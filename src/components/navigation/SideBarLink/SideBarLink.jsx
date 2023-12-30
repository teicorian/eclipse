import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SidebarLink.css';

const NavLink = ({ to, label, hover, currentPath, onClick, ...props }) => {
	const isActive = currentPath === to;

	return (
		<Link to={to} className={`sidebarlink ${isActive ? 'active' : ''}`}>
			{label}
		</Link>
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
