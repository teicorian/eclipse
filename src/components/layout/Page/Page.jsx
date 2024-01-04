// NavLink.js

import React, { useState, useEffect } from 'react';
import { Chevron, Bars, Close } from '../../icons';
import './Page.css';

const Page = ({ fullscreen, fixed, centered, max, children, ...props }) => {
	const maxWidth = max ? `maxWidth--${max}` : '';

	const layout = {};
	if (fullscreen) {
		layout.type = 'fullscreen';
	}
	if (fixed) {
		layout.type = 'fixed';
	}
	if (centered) {
		layout.type = 'centered';
	}

	const [padding, setPadding] = useState(0);

	useEffect(() => {
		const calculatePadding = () => {
			const navigationElement = document.querySelector('.navigation');
			const titleElement = document.querySelector('.page-header');
			const windowHeight = window.innerHeight;

			if (navigationElement && titleElement) {
				const navigationHeight =
					navigationElement.getBoundingClientRect().height;
				const titleHeight = titleElement.getBoundingClientRect().height;
				setPadding(windowHeight - navigationHeight - titleHeight);
			}
		};

		calculatePadding();
		window.addEventListener('resize', calculatePadding);

		return () => {
			window.removeEventListener('resize', calculatePadding);
		};
	}, []);

	return (
		<div
			className={'page'}
			style={{
				height: '100% !important',
				minHeight: `${padding}px !important`,
			}}
			{...props}
		>
			<div className={`page-container ${layout.type ? layout.type : ''}`}>
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
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const title = {};
	if (id) {
		title.id = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();
	}

	return (
		<>
			<div className={'page-sidebar'} {...props}>
				{React.Children.map(children, (child) =>
					React.cloneElement(child, { id })
				)}
			</div>
			{title.id ? (
				<>
					<div
						className={`mobile-sidebar-button ${
							sidebarOpen ? 'toggled' : ''
						}`}
						onClick={toggleSidebar}
					>
						<div className={'mobile-sidebar-button-icon'}>
							{sidebarOpen ? <Chevron down /> : <Chevron right />}
						</div>
						<h3>{title.id}</h3>
					</div>
					<div
						className={`mobile-sidebar ${
							sidebarOpen ? 'toggled' : ''
						}`}
						{...props}
					>
						{React.Children.map(children, (child) =>
							React.cloneElement(child, { id })
						)}
					</div>
				</>
			) : (
				''
			)}
		</>
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
