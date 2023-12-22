// NavLink.js

import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

const Card = ({ layout, ...props }) => {
	const styles = [];

	if (layout === 'fullscreen') {
		styles.push('fullscreen');
	}
	if (layout === 'centered') {
		styles.push('centered');
	}
	return (
		<div className={`page`} {...props}>
			<div className={`page-wrap ${layout ? styles : ''}`}>{content}</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	layout: PropTypes.string,
};
