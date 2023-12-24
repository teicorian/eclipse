// NavLink.js

import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

const Page = ({ layout, max, children, ...props }) => {
	const maxWidth = [];
	if (max) {
		maxWidth.push(`maxWidth--${max}`);
	}
	return (
		<div className={`page`} {...props}>
			<div className={`page container ${layout ? layout : ''}`}>
				<div className={`page-wrapper ${max ? maxWidth : ''}`}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Page;

Page.propTypes = {
	layout: PropTypes.string,
	max: PropTypes.string,
};
