import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

/**
 * Primary UI component for user interaction
 */
const Logo = ({ src, w, h, ...props }) => {
	const source = src ? src : '/logo.svg';
	const style = {};

	if (w) {
		style.width = w;
	}

	if (h) {
		style.height = h;
	}
	return (
		<a href='/'>
			<div className={'logo'} style={style}>
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
