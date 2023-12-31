import React from 'react';
import Layout from './Layout';
import Page from '../components/layout/Page/Page';
import Spacer from '../components/layout/Spacer/Spacer';

import Card from '../components/surfaces/Card/Card';

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
