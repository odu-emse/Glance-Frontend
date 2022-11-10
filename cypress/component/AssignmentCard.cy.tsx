import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/AssignmentCard.stories'
import terminalLog from '../support/component'

const { Primary, Secondary, Tertiary } = composeStories(stories)

describe('AssignmentCard.tsx', function () {
	const questionCount = 68
	const moduleIdentifier = 'M 137G'
	const moduleName = 'Introduction to Organizational Analysis'
	const assignmentName = 'Assignment 4'
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary questionCount={questionCount} />)
		expect(cy.get('div')).to.exist
		expect(cy.get('p')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Secondary moduleIdentifier={moduleIdentifier} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
	it('should render component questionCount with sm text and light color', () => {
		cy.mount(<Secondary questionCount={questionCount} />)
		cy.get('p').should('have.css', 'margin', '12px')
		cy.get('p').should('have.css', 'font-size', '12px')
		cy.get('p').should('have.class', 'mx-3 my-3 text-gray500 inline-block text-xs')
	})
	it('should render component moduleIdentifier with uppercase, sm text and light color', () => {
		cy.mount(<Primary moduleIdentifier={moduleIdentifier} />)
		cy.get('p.uppercase').should('have.css', 'margin', '12px')
		cy.get('p.uppercase').should('have.css', 'font-size', '12px')
		cy.get('p.uppercase').should('have.css', 'padding-left', '24px')
		cy.get('p.uppercase').should('have.css', 'text-transform', 'uppercase')
		cy.get('p.uppercase').should('have.class', 'mx-3 my-3 pl-6 text-gray-500 inline-block text-xs uppercase font-semibold')
	})
	it('should render component moduleName and assignmentName with lg text and minimal margin', () => {
		cy.mount(<Tertiary moduleName={moduleName} assignmentName={assignmentName} />)
		cy.get('p.text-xl').should('have.css', 'margin', '12px')
		cy.get('p.text-xl').should('have.css', 'font-size', '20px')
		cy.get('p.text-xl').should('have.class', 'mx-3 my-3 text-xl')
	})
})
