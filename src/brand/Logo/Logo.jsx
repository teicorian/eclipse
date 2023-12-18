import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

/**
 * Primary UI component for user interaction
 */
const Logo = ({ src, size, ...props }) => {
	if (src) {
		return (
			<div className={'logo'}>
				<img src={src} {...props} />
			</div>
		);
	} else {
		return (
			<div className={'logo'}>
				<img src={'/logo.svg'} {...props} />
			</div>
		);
	}
};

export default Logo;

Logo.propTypes = {
	src: PropTypes.string,
};

Logo.defaultProps = {
	src: '/logo.svg',
};
