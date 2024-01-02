import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { LiveProvider, LivePreview } from 'react-live';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import '../../code-theme.css';
import ComponentsLayout from '../ComponentsLayout';
import { User, Card, Spacer } from '../../../components';

const UserPage = () => {
	const user = {
		firstName: 'TJ',
		lastName: 'Bredemeyer',
		email: 'tj@teicor.com',
	};

	const Snippet = {};
	Snippet.import = "import { User } from '@teicor/eclipse';";

	const [generalCode, setGeneralCode] = useState(
		`<User firstName='${user.firstName}' lastName='${user.lastName}' />`
	);

	const [withEmailCode, setWithEmailCode] = useState(
		`<User firstName='${user.firstName}' lastName='${user.lastName}' email='tj@teicor.com' />`
	);

	const [pfpRightCode, setPFPRightCode] = useState(
		`<User firstName='${user.firstName}' lastName='${user.lastName}' right />`
	);

	return (
		<ComponentsLayout>
			<p>A user card displays a user profile picture, name, and email.</p>
			<Spacer h={2} />
			{/* /////////////////////////////////////////////////////////// */}
			{/* ///// General ///////////////////////////////////////////// */}
			{/* /////////////////////////////////////////////////////////// */}
			<h2>General</h2>
			<Spacer h={1} />
			Show user profile picture and name by default.
			<Spacer h={1} />
			<Card type='deactivated'>
				<Card.Body>
					<LiveProvider
						code={generalCode}
						language='jsx'
						scope={{ User }}
					>
						<LivePreview />
					</LiveProvider>
				</Card.Body>
				<Card.CodeEditor copy={generalCode}>
					<Editor
						value={generalCode}
						onValueChange={(generalCode) =>
							setGeneralCode(generalCode)
						}
						highlight={(generalCode) =>
							highlight(generalCode, languages.js)
						}
						language='jsx'
					/>
				</Card.CodeEditor>
			</Card>
			<Spacer h={2} />
			{/* /////////////////////////////////////////////////////////// */}
			{/* ///// With Email/////////////////////////////////////////// */}
			{/* /////////////////////////////////////////////////////////// */}
			<h2>With Email</h2>
			<Spacer h={1} />
			Show user profile picture and name by default.
			<Spacer h={1} />
			<Card type='deactivated'>
				<Card.Body>
					<LiveProvider
						code={withEmailCode}
						language='jsx'
						scope={{ User }}
					>
						<LivePreview />
					</LiveProvider>
				</Card.Body>
				<Card.CodeEditor copy={withEmailCode}>
					<Editor
						value={withEmailCode}
						onValueChange={(withEmailCode) =>
							setWithEmailCode(withEmailCode)
						}
						highlight={(withEmailCode) =>
							highlight(withEmailCode, languages.js)
						}
						language='jsx'
						padding={10}
					/>
				</Card.CodeEditor>
			</Card>
			<Spacer h={2} />
			{/* /////////////////////////////////////////////////////////// */}
			{/* ///// General ///////////////////////////////////////////// */}
			{/* /////////////////////////////////////////////////////////// */}
			<h2>PFP on the Right</h2>
			<Spacer h={1} />
			A User Card can display the profile picture on the left or the
			right.
			<Spacer h={1} />
			<Card type='deactivated'>
				<Card.Body>
					<LiveProvider
						code={pfpRightCode}
						language='jsx'
						scope={{ User }}
					>
						<LivePreview />
					</LiveProvider>
				</Card.Body>
				<Card.CodeEditor copy={pfpRightCode}>
					<Editor
						value={pfpRightCode}
						onValueChange={(pfpRightCode) =>
							setPFPRightCode(pfpRightCode)
						}
						highlight={(pfpRightCode) =>
							highlight(pfpRightCode, languages.js)
						}
						language='jsx'
						padding={10}
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 12,
						}}
					/>
				</Card.CodeEditor>
			</Card>
			<Spacer h={2} />
		</ComponentsLayout>
	);
};

export default UserPage;
