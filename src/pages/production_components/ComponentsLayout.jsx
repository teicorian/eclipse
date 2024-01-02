import React from 'react';
import { useParams } from 'react-router-dom';
import { Page, Spacer } from '../../components';
import Layout from '../Layout';
import ComponentsSidebar from './ComponentsSidebar';
import { Chevron } from '../../components/icons';

const ComponentsLayout = ({ children }) => {
	const { section, component } = useParams();
	return (
		<Layout>
			<Page.Header fixed bg border>
				Components
			</Page.Header>
			<Page fixed>
				<ComponentsSidebar />
				<Page.Body>
					<h1>
						{section ? section : 'Components'}
						{section ? (
							<>
								<Spacer w={0.5} />
								<Chevron size={16} right />
								<Spacer w={0.5} />
								{component}
							</>
						) : (
							''
						)}
					</h1>
					{children}
				</Page.Body>
			</Page>
		</Layout>
	);
};

export default ComponentsLayout;
