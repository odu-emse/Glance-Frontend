import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: 'ye2f54',
	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
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
