import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import App from './components/app/app.component';

import theme from './styles/theme';

ReactDOM.render(
	<HashRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</HashRouter>,
	document.getElementById('root')
);
