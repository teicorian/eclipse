import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { logger } from 'utilities';
import { UserProvider } from 'core/contexts/user.context';
import Core from 'core';

function App() {
	logger.debug('Entering App...');
	return (
		<BrowserRouter>
			<UserProvider>
				<Core />
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
