// MobileMenuItems.js
import React from 'react';
import Header from '../components/layout/Header/Header';
import Logo from '../components/brand/Logo/Logo';
import Button from '../components/general/Button/Button';
import MobileNavLink from '../components/navigation/MobileNavLink/MobileNavLink';
import User from '../components/identity/User/User';
import Spacer from '../components/layout/Spacer/Spacer';
import Line from '../components/layout/Line/Line';
import { Add, OpenLink } from '../components/icons';

const MobileMenu = () => (
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
				<MobileNavLink label='Settings' to='/settings' />
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
);

export default MobileMenu;
