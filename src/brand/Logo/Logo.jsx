import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

/**
 * Primary UI component for user interaction
 */
const Logo = ({ src, w, h, ...props }) => {
	const source = src ? src : '/logo.svg';
	return (
		<a href='/'>
			<div className={'logo'}>
				<img src={source} {...props} />
			</div>
		</a>
	);
};

export default Logo;

Logo.propTypes = {
	src: PropTypes.string,
	w: PropTypes.string,
	h: PropTypes.string,
};

Logo.defaultProps = {
	src: '/logo.svg',
};
