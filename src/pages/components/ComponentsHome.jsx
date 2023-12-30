import React from 'react';
import ComponentsLayout from './ComponentsLayout';
import Header from '../../components/layout/Header/Header';
import Button from '../../components/general/Button/Button';
import Logo from '../../components/brand/Logo/Logo';
import NavLink from '../../components/navigation/NavLink/NavLink';
import Spacer from '../../components/layout/Spacer/Spacer';
import MobileNavLink from '../../components/navigation/MobileNavLink/MobileNavLink';
import User from '../../components/identity/user/User';
import Line from '../../components/layout/Line/Line';
import Card from '../../components/surfaces/Card/Card';
import { Add, OpenLink } from '../../components/icons';

const ComponentsHome = () => {
	return (
		<ComponentsLayout>
			<Card type='deactivated'>
				<Card.Header>Default Navigation</Card.Header>
				<Card.Body>
					<Header border>
						<Header.TopNavigation fixed>
							<Header.Wrap>
								<Logo />
								<Spacer w={1} />
								<NavLink label='Home' to='' hover />
								<NavLink label='Guide' to='/guide' hover />
								<NavLink
									label='Components'
									to='/components'
									hover
								/>
								<NavLink label='Icons' to='/icons' hover />
								<NavLink label='Hooks' to='/hooks' hover />
								<NavLink
									label='Utilities'
									to='/utilities'
									hover
								/>
							</Header.Wrap>
							<Header.Main>
								<NavLink
									label='Contact Us'
									to='/contact'
									hover
								/>
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
				</Card.Body>
				<Card.Footer>This is a card footer</Card.Footer>
			</Card>
		</ComponentsLayout>
	);
};

export default ComponentsHome;
