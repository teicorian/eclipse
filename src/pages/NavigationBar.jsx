import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Button, Logo, NavLink, Spacer } from 'components';
import MobileMenu from './MobileMenu';

const NavigationBar = () => {
	const { page } = useParams();

	const wrap = [
		{ label: 'Home' },
		{ label: 'Guide', to: 'guide' },
		{ label: 'Components', to: 'components' },
		{ label: 'Icons', to: 'icons' },
		{ label: 'Hooks', to: 'hooks' },
		{ label: 'Utilities', to: 'utilities' },
	];

	return (
		<>
			<Header border>
				<MobileMenu />
				<Header.TopNavigation fixed>
					<Header.Wrap>
						<Logo />
						<Spacer w={1} />
						{wrap.map((link) => (
							<NavLink
								key={link.label}
								label={link.label}
								path={page}
								to={link.to}
								hover
							/>
						))}
					</Header.Wrap>
					<Header.Main>
						<NavLink label='Changelog' to='changelog' />
						<NavLink label='Help' to='help' />
						<Button label='Contact' to={'contact'} />
					</Header.Main>
				</Header.TopNavigation>
				{/* <Header.SubNavigation fixed>
					{wrap.map((link) => (
						<NavLink
							key={link.label}
							label={link.label}
							path={page}
							to={link.to}
							hover
						/>
					))}
					{wrap.map((link) => (
						<NavLink
							key={link.label}
							label={link.label}
							path={page}
							to={link.to}
							hover
						/>
					))}
					{wrap.map((link) => (
						<NavLink
							key={link.label}
							label={link.label}
							path={page}
							to={link.to}
							hover
						/>
					))}
					{wrap.map((link) => (
						<NavLink
							key={link.label}
							label={link.label}
							path={page}
							to={link.to}
							hover
						/>
					))}
					{wrap.map((link) => (
						<NavLink
							key={link.label}
							label={link.label}
							path={page}
							to={link.to}
							hover
						/>
					))}
				</Header.SubNavigation> */}
			</Header>
		</>
	);
};

export default NavigationBar;
