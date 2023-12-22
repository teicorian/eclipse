import React from 'react';
import NavLink from './NavLink';

export default {
	title: 'Navigation/NavLink',
	component: NavLink,
	parameters: {
		layout: 'centered',
	},
	tags: [],
};

export const Primary = (args) => <NavLink {...args} />;
Primary.args = { to: '/', label: 'NavLink' };

export const Hover = (args) => <NavLink {...args} />;
Hover.args = { to: '/', label: 'NavLink', className: 'link sb-hover' };

export const Active = (args) => <NavLink {...args} />;
Active.args = { to: '/', label: 'NavLink', currentPath: '/' };
