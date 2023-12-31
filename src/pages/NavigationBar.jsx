import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Button from '../components/general/Button/Button';
import Logo from '../components/brand/Logo/Logo';
import NavLink from '../components/navigation/NavLink/NavLink';
import Spacer from '../components/layout/Spacer/Spacer';
import MobileMenu from './MobileMenu';

const NavigationBar = () => {
	const { page } = useParams();

	const wrap = [
		{ label: 'Home', to: '' },
		{ label: 'Guide', to: 'guide' },
		{ label: 'Components', to: 'components' },
		{ label: 'Icons', to: 'icons' },
		{ label: 'Hooks', to: 'hooks' },
		{ label: 'Utilities', to: 'utilities' },
	];

	return (
		<>
			<Header border>
				<Header.TopNavigation fixed>
					<Header.Wrap>
						<Logo />
						<Spacer w={1} />
						{wrap.map((link) => (
							<NavLink
								key={link.label}
								label={link.label}
								to={link.to}
								path={page}
								hover
							/>
						))}
					</Header.Wrap>
					<Header.Main>
						<NavLink label='Contact Us' to='/contact' />
						<Button label='Log In' to={'/login'} />
						<Button label='Sign Up' to={'/register'} primary />
					</Header.Main>
				</Header.TopNavigation>
			</Header>
			<MobileMenu />
		</>
	);
};

export default NavigationBar;
