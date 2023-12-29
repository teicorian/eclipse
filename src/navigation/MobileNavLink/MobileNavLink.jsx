// NavLink.js

import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MobileNavLink.css';

const MobileNavLink = ({ to, label, children, ...props }) => {
	return (
		<div className={'mobile-navlink'}>
			<div className={'label'}>{label}</div>
			<div className={'action'}>{children}</div>
		</div>
	);
};

export default MobileNavLink;

MobileNavLink.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string,
	currentPath: PropTypes.string,
};

MobileNavLink.defaultProps = {
	to: '/',
	label: 'Home',
	currentPath: '',
};
