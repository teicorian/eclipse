// MobileMenuItems.js
import React from 'react';
import Header from '../components/layout/Header/Header';
import Logo from '../components/brand/Logo/Logo';
import Button from '../components/general/Button/Button';
import MobileNavLink from '../components/navigation/MobileNavLink/MobileNavLink';
import Spacer from '../components/layout/Spacer/Spacer';
import { Add, OpenLink } from '../components/icons';

const MobileMenu = () => {
	const wrap = [
		{ label: 'Home' },
		{ label: 'Guide', to: 'guide' },
		{ label: 'Components', to: 'components' },
		{ label: 'Icons', to: 'icons' },
		{ label: 'Hooks', to: 'hooks' },
		{ label: 'Utilities', to: 'utilities' },
	];

	return (
		<Header>
			<Header.Mobile>
				<Header.MobileBrand>
					<Logo />
				</Header.MobileBrand>
				<Header.MobileMenu>
					<Button label='Contact' />
					<Spacer h={2} />
					{wrap.map((link) => (
						<MobileNavLink
							key={link.label}
							label={link.label}
							to={link.to}
						/>
					))}
					<Spacer h={2} />
					<h2>Resources</h2>
					<MobileNavLink label='Changelog' />
					<MobileNavLink label='Help' />
					<MobileNavLink label='Teicor Homepage'>
						<OpenLink />
					</MobileNavLink>
				</Header.MobileMenu>
			</Header.Mobile>
		</Header>
	);
};

export default MobileMenu;
