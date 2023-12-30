import React from 'react';
import Layout from './Layout';
import Page from '../components/layout/Page/Page';
import Header from '../components/layout/Header/Header';
import Button from '../components/general/Button/Button';
import Logo from '../components/brand/Logo/Logo';
import NavLink from '../components/navigation/NavLink/NavLink';
import Spacer from '../components/layout/Spacer/Spacer';
import MobileNavLink from '../components/navigation/MobileNavLink/MobileNavLink';
import User from '../components/identity/user/User';
import Line from '../components/layout/Line/Line';
import Card from '../components/surfaces/Card/Card';
import ComponentsSidebar from './components/ComponentsSidebar';
import { Add, OpenLink } from '../components/icons';

const Home = () => {
	return (
		<Layout>
			<Page.Header fixed border bg>
				Homepage
			</Page.Header>
			<Page fixed>
				<Page.Body>
					<Card type='deactivated'>
						<Card.Header>Home Card</Card.Header>
						<Card.Body>This is a card body</Card.Body>
						<Card.Footer>This is a card footer</Card.Footer>
					</Card>
					<Spacer h={2} />
					<Card type='deactivated'>
						<Card.Header>Home Card</Card.Header>
						<Card.Body>This is a card body</Card.Body>
						<Card.Footer>This is a card footer</Card.Footer>
					</Card>
					<Spacer h={2} />
					<Card type='deactivated'>
						<Card.Header>Home Card</Card.Header>
						<Card.Body>This is a card body</Card.Body>
						<Card.Footer>This is a card footer</Card.Footer>
					</Card>
					<Spacer h={2} />
					<Card type='warning'>
						<Card.Header>Home Card</Card.Header>
						<Card.Body>This is a card body</Card.Body>
						<Card.Footer>This is a card footer</Card.Footer>
					</Card>
				</Page.Body>
			</Page>
		</Layout>
	);
};

export default Home;
