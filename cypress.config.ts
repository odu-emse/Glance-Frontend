import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: 'fzf5cw',
	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
		setupNodeEvents(on, config) {
			on('task', {
				log(message) {
					console.log(message)

					return null
				},
				table(message) {
					console.table(message)

					return null
				},
			})
		},
		specPattern: 'cypress/component/*.cy.tsx',
	},

	e2e: {},
})
