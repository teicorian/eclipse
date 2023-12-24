import React from 'react';
import Header from './Header';
import Button from '../../general/Button/Button';
import Logo from '../../brand/Logo/Logo';
import NavLink from '../../navigation/NavLink/NavLink';
import Spacer from '../../layout/Spacer/Spacer';

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
	children: (
		<Header>
			<Header.TopNavigation>
				<Header.Wrap>
					<Logo />
					<Spacer w={1} />
					<NavLink label='About' to='/about' />
					<NavLink label='Services' to='/services' />
					<NavLink label='Pricing' to='/pricing' />
				</Header.Wrap>
				<Header.Main>
					<NavLink label='Contact Us' to='/contact' />
					<Button label='Log In' />
					<Button label='Sign Up' primary />
				</Header.Main>
			</Header.TopNavigation>
			<Header.SubNavigation>
				<NavLink label='About' to='/about' currentPath='/about' hover />
				<NavLink label='Services' to='/services' hover />
				<NavLink label='Pricing' to='/pricing' hover />
			</Header.SubNavigation>
		</Header>
	),
};

export const Public = (args) => <Header {...args} />;
Public.args = {
	children: (
		<Header>
			<Header.TopNavigation>
				<Header.Wrap>
					<Logo />
					<Spacer w={1} />
					<NavLink
						label='About'
						to='/about'
						currentPath='/about'
						hover
					/>
					<NavLink label='Services' to='/services' hover />
					<NavLink label='Pricing' to='/pricing' hover />
				</Header.Wrap>
				<Header.Main>
					<NavLink label='Contact Us' to='/contact' />
					<Button label='Log In' />
					<Button label='Sign Up' primary />
				</Header.Main>
			</Header.TopNavigation>
		</Header>
	),
};

export const Authentication = (args) => <Header {...args} />;
Authentication.args = {
	children: (
		<Header>
			<Header.TopNavigation>
				<Header.Wrap>
					<Logo />
				</Header.Wrap>
				<Header.Main>
					<NavLink label='Contact Us' to='/contact' />
					<Button label='Sign Up' />
				</Header.Main>
			</Header.TopNavigation>
		</Header>
	),
};
