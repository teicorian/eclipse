import React from 'react';
import Header from './Header';
import Button from '../../general/Button/Button';
import Logo from '../../brand/Logo/Logo';
import NavLink from '../../navigation/NavLink/NavLink';

export default {
	title: 'Layout/Header',
	component: Header,
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

export const Primary = (args) => <Header {...args} />;
Primary.args = {
	wrap: (
		<>
			<Logo />
			<NavLink to='/' label='Home' currentPath='/' />
			<NavLink to='/services' label='Services' />
			<NavLink to='/about' label='About' />
			<NavLink to='/contact' label='Contact' />
		</>
	),
	main: (
		<>
			<Button label='Log In' />
			<Button label='Sign Up' primary />
		</>
	),
};
