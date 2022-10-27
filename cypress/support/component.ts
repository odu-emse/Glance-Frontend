import './commands'
import { mount } from 'cypress/react18'
import 'cypress-axe'
import '../../src/output.css'

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			mount: typeof mount
		}
	}
}

export default function terminalLog(violations: any[]) {
	cy.task(
		'log',
		`${violations.length} accessibility violation${
			violations.length === 1 ? '' : 's'
		} ${violations.length === 1 ? 'was' : 'were'} detected`
	)
	// pluck specific keys to keep the table readable
	const violationData = violations.map(
		({ id, impact, description, nodes }) => ({
			id,
			impact,
			description,
			nodes: nodes.length
		})
	)

	cy.task('table', violationData)
}

Cypress.Commands.add('mount', mount)
