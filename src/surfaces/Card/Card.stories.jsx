import React from 'react';
import Card from './Card';

export default {
	title: 'Surfaces/Card',
	component: Card,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [],
};

export const Primary = (args) => <Card {...args} />;
Primary.args = {
	header: 'Header',
	body: 'Body',
	footer: {
		content: 'Footer',
		style: 'active',
	},
};
