import React from 'react';
import Button from './Button';

export default {
	title: 'General/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: [],
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
	primary: true,
	label: 'Button',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
	label: 'Button',
};

export const Large = (args) => <Button {...args} />;
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = (args) => <Button {...args} />;
Small.args = {
	size: 'small',
	label: 'Button',
};
