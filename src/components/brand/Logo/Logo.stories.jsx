import React from 'react';
import Logo from './Logo';

export default {
	title: 'Brand/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
	},
	tags: [],
};

export const Primary = (args) => <Logo {...args} />;
Primary.args = { src: '/logo.svg', w: '2.5rem', h: '2.5rem' };
