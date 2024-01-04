// NavLink.js

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MobileNavLink.css';

const MobileNavLink = ({ to, label, children, ...props }) => {
	if (!to) {
		to = '/';
	}

	if (to.charAt(0) !== '/') {
		to = `/${to}`;
	}

	return (
		<Link to={to} className={'mobile-navlink'}>
			<div className={'label'}>{label}</div>
			<div className={'action'}>{children}</div>
		</Link>
	);
};

export default MobileNavLink;

MobileNavLink.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string,
};

MobileNavLink.defaultProps = {
	to: '/',
	label: 'Home',
};
