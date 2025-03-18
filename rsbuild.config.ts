import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
	html: {
		template: './index.html',
	},

	plugins: [
		pluginReact(),
		pluginSvgr({
			svgrOptions: {
				icon: true,
				svgo: true,
				svgoConfig: {
					plugins: ['preset-default'],
				},
			},
		}),
	],
});
