import React from 'react';
import Input from './Input';

export default {
	title: 'Data Entry/Input',
	component: Input,
	parameters: {
		layout: 'fullscreen',
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

export const Primary = (args) => <Input {...args} />;
Primary.args = {};

export const Password = (args) => <Input {...args} />;
Password.args = { type: 'password' };

export const Email = (args) => <Input {...args} />;
Email.args = { type: 'email' };
