import React from 'react';
import Header from './Header';

export default {
	title: 'Layout/Header',
	component: Header,
	parameters: {
		layout: 'centered',
	},
	control: {
		type: 'object',
		render: {
			// Custom renderer to display JSX input without quotes
			options: (props) => React.createElement('div', {}, props),
		},
	},
	tags: [],
};

export const Primary = (args) => <Header {...args} />;
Primary.args = {};
