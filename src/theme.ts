import { createTheme } from '@mui/material';

const fontFamilyNunito = '"Nunito Variable", sans-serif';

export const theme = createTheme({
	palette: {
		primary: {
			'500': '#ed7117',
		},
		background: {
			default: '#ffffff',
			paper: '#ffffff',
		},
		text: {
			primary: '#3a3a3a',
			secondary: '#909090',
		},
		divider: '#efeeee',
	},
	typography: {
		fontFamily: fontFamilyNunito,
		body1: {
			fontSize: 16,
		},
		body2: {
			fontSize: 14,
		},
		h1: {
			fontSize: 26,
			fontWeight: 600,
		},
		h2: {
			fontSize: 26,
			fontWeight: 700,
		},
		h3: {
			fontSize: 16,
			fontWeight: 600,
		},
		button: {
			fontSize: 12,
			fontWeight: 600,
		},
		caption: {
			fontSize: 12,
		},
	},
	components: {
		MuiLink: {
			defaultProps: {
				color: 'textSecondary',
			},
			styleOverrides: {
				root: {
					':hover': {
						color: '#ed7117',
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontSize: 12,
				},
				input: {
					fontSize: 12,
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: 12,
				},
			},
		},
	},
});
