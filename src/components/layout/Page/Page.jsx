// NavLink.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Chevron } from '../../icons';
import './Page.css';

const Page = ({ fullscreen, fixed, centered, max, children, ...props }) => {
	const maxWidth = [];
	if (max) {
		maxWidth.push(`maxWidth--${max}`);
	}

	const layout = [];
	if (fullscreen) {
		layout.push('fullscreen');
	}
	if (fixed) {
		layout.push('fixed');
	}
	if (centered) {
		layout.push('centered');
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

Page.Header = ({
	fullscreen,
	fixed,
	centered,
	bg,
	border,
	children,
	...props
}) => {
	const layout = [];
	if (fullscreen) {
		layout.push('fullscreen');
	}
	if (fixed) {
		layout.push('fixed');
	}
	if (centered) {
		layout.push('centered');
	}
	return (
		<div
			className={`page-header ${bg ? 'bg' : ''} ${
				border ? 'border' : ''
			}`}
		>
			<div
				className={`page-header-wrap ${layout ? layout : ''}`}
				{...props}
			>
				<h1>{children}</h1>
			</div>
		</div>
	);
};

Page.Sidebar = ({ id, children, ...props }) => {
	return (
		<div className={'page-sidebar'} {...props}>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, { id })
			)}
		</div>
	);
};

Page.SidebarSection = ({ label, children, ...props }) => {
	return (
		<div className={'page-sidebar-section'} {...props}>
			<div className={'label'}>{label}</div>
			<div className={'section-content'}>{children}</div>
		</div>
	);
};

Page.SidebarSectionCollapse = ({ label, children, toggled, id, ...props }) => {
	const { section } = useParams();
	const [isCollapsed, setIsCollapsed] = useState(() => {
		const toggleStore = localStorage.getItem(`${id}Toggle`);
		return toggleStore ? JSON.parse(toggleStore)[label] : false;
	});

	if (toggled) {
		setIsCollapsed(true);
	}

	const handleToggleCollapse = () => {
		const toggleStore = localStorage.getItem(`${id}Toggle`);
		const existingToggleStore = toggleStore ? JSON.parse(toggleStore) : {};
		existingToggleStore[label] = !isCollapsed;
		localStorage.setItem(
			`${id}Toggle`,
			JSON.stringify(existingToggleStore)
		);
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={'page-sidebar-section-collapse'} {...props}>
			<div
				className='section-collapse-wrap'
				onClick={handleToggleCollapse}
			>
				<div className={`label ${isCollapsed ? 'collapse' : ''}`}>
					{label}
				</div>
				<div className={`toggle ${isCollapsed ? 'collapse' : ''}`}>
					{/* Assuming Chevron is a functional component */}
					<Chevron size={12} />
				</div>
			</div>
			<div className={`section-content ${isCollapsed ? 'collapse' : ''}`}>
				{children}
			</div>
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
