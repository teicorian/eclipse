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
			<div className={`page-container ${layout ? layout : ''}`}>
				<div className={`page-wrapper ${max ? maxWidth : ''}`}>
					{children}
				</div>
			</div>
		</div>
	);
};

Page.Header = ({ layout, bg, children, ...props }) => {
	return (
		<div className={`page-header ${bg ? 'bg' : ''}`}>
			<div
				className={`page-header-wrap ${layout ? layout : ''}`}
				{...props}
			>
				<h1>{children}</h1>
			</div>
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

Page.Body = ({ children, ...props }) => {
	return (
		<div className={'page-body'} {...props}>
			{children}
		</div>
	);
};

export default Page;

Page.propTypes = {
	layout: PropTypes.string,
	max: PropTypes.string,
};
