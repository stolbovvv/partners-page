import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import css from '@eslint/css';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import('eslint').Linter.Config[]}
 */
export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	prettierRecommended,
	{
		ignores: ['**/node_modules/', '**/public/', '**/build/', '**/dist/'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			'prettier/prettier': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	},
];
