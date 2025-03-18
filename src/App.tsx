import { CssBaseline, ThemeProvider } from '@mui/material';
import { PartnersPage } from './pages/PartnersPage';
import { theme } from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PartnersPage />
		</ThemeProvider>
	);
};

export default App;
