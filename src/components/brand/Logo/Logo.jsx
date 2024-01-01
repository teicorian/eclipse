import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

/**
 * Primary UI component for user interaction
 */
const Logo = ({ src, w, h, to, ...props }) => {
	const source = src ? src : '/logo.svg';
	return (
		<Link to={to}>
			<div className={'logo'}>
				<img src={source} {...props} />
			</div>
		</Link>
	);
};

export default Logo;
