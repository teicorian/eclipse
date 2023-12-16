import React from 'react';
import Header from './Header';

export default {
	title: 'Layout/Header',
	component: Header,
	parameters: {
		layout: 'centered',
	},
	tags: [],
};

export const Primary = (args) => <Header {...args} />;
Primary.args = {
	left: Header.Left,
	right: Header.Right,
	center: Header.Center,
};
