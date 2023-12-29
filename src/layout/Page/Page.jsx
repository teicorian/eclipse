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

Page.Header = ({ title, ...props }) => {
	return (
		<div className={'page-header'} {...props}>
			<h1>{title}</h1>
		</div>
	);
};

Page.SideBar = ({ children, ...props }) => {
	return (
		<div className={'page-sidebar'} {...props}>
			{children}
		</div>
	);
};

export default Page;

Page.propTypes = {
	layout: PropTypes.string,
	max: PropTypes.string,
};
