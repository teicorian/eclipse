import React from 'react';
import Header from './Header';
import Button from '../../general/Button/Button';
import Logo from '../../brand/Logo/Logo';
import NavLink from '../../navigation/NavLink/NavLink';
import Spacer from '../../layout/Spacer/Spacer';
import MobileNavLink from '../../navigation/MobileNavLink/MobileNavLink';
import User from '../../identity/user/User';
import Line from '../../layout/Line/Line';
import { Add, OpenLink } from '../../icons';

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
		<>
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
			</Header>
			<Header>
				<Header.Mobile>
					<Header.MobileBrand>
						<Logo />
					</Header.MobileBrand>
					<Header.MobileMenu>
						<Button label='Contact' />
						<Spacer h={2} />
						<User
							right
							firstName='TJ'
							lastName='Bredemeyer'
							email='tj@teicor.com'
							src={
								'https://assets-dev.teicor.com/users/b7b67021253446dfb2280c908bae2115/4093e38d4f174594846b8dbfec77aa96'
							}
						/>
						<Spacer h={1} />
						<Line horizontal />
						<MobileNavLink label='Dashboard' />
						<MobileNavLink
							label='Settings'
							currentPath='/settings'
							to='/settings'
						/>
						<MobileNavLink label='New Team'>
							<Add />
						</MobileNavLink>
						<MobileNavLink label='Theme' />
						<MobileNavLink label='Log Out' />
						<Spacer h={2} />
						<h2>Resources</h2>
						<MobileNavLink label='Changelog' />
						<MobileNavLink label='Help' />
						<MobileNavLink label='Documentation' />
						<MobileNavLink label='Teicor Homepage'>
							<OpenLink />
						</MobileNavLink>
					</Header.MobileMenu>
				</Header.Mobile>
			</Header>
			<Header border>
				<Header.SubNavigation>
					<NavLink
						label='About'
						to='/about'
						currentPath='/about'
						hover
					/>
					<NavLink label='Services' to='/services' hover />
					<NavLink label='Pricing' to='/pricing' hover />
					<NavLink label='Services' to='/services' hover />
					<NavLink label='Pricing' to='/pricing' hover />
					<NavLink label='Services' to='/services' hover />
					<NavLink label='Pricing' to='/pricing' hover />
					<NavLink label='Services' to='/services' hover />
					<NavLink label='Pricing' to='/pricing' hover />
				</Header.SubNavigation>
			</Header>
		</>
	),
};

export const Public = (args) => <Header {...args} />;
Public.args = {
	children: (
		<Header border>
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
		<Header border>
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
