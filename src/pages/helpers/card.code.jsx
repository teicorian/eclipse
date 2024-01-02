import React, { useState } from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { highlight, languages } from 'prismjs';
import Editor from 'react-simple-code-editor';
import { Card, Spacer } from 'components';

const CodeCard = ({ code, scope, language }) => {
	const [currentCode, setCurrentCode] = useState(code);

	return (
		<>
			<Card type='code'>
				<Card.Body>
					<LiveProvider code={currentCode} scope={scope}>
						<LivePreview />
					</LiveProvider>
				</Card.Body>
				<Card.CodeEditor copy={currentCode}>
					<Editor
						value={currentCode}
						onValueChange={(currentCode) =>
							setCurrentCode(currentCode)
						}
						highlight={(currentCode) =>
							highlight(currentCode, languages[language])
						}
						tabSize={4}
					/>
				</Card.CodeEditor>
			</Card>
			<Spacer h={2} />
		</>
	);
};

export default CodeCard;
