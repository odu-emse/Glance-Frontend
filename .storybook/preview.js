import '../storybook/output.css'
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: [
				'Introduction',
				'Atoms',
				'Molecules',
				'Organisms',
				'Templates',
				'Pages',
			],
		},
	},
}
