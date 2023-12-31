import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import ComponentsLayout from '../ComponentsLayout';
import Card from '../../../components/surfaces/Card/Card';
import Spacer from '../../../components/layout/Spacer/Spacer';
import User from '../../../components/identity/User/User';

const UserPage = () => {
	const user = {
		firstName: 'TJ',
		lastName: 'Bredemeyer',
		email: 'tj@teicor.com',
	};

	const Snippet = {};
	Snippet.import = "import { User } from '@teicor/eclipse';";

	const scope = { User };

	const [generalCode, setGeneralCode] = useState(
		`<User firstName='TJ' lastName='Bredemeyer' to={''} />`
	);

	return (
		<ComponentsLayout>
			<p>A user card displays a user profile picture, name, and email.</p>
			<h2>General</h2>
			Show user profile picture and name by default.
			<Spacer h={1} />
			<Card type='deactivated'>
				<Card.Body>
					<LiveProvider
						code={generalCode}
						language='jsx'
						scope={scope}
					>
						<LivePreview />
					</LiveProvider>
				</Card.Body>
				<Card.Footer>
					<Editor
						value={generalCode}
						onValueChange={(generalCode) =>
							setGeneralCode(generalCode)
						}
						highlight={(generalCode) =>
							highlight(generalCode, languages.js)
						}
						language='jsx'
						padding={10}
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 12,
						}}
					/>
				</Card.Footer>
			</Card>
		</ComponentsLayout>
	);
};

export default UserPage;
