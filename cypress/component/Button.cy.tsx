import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Button.stories'
import terminalLog from '../support/component'

const { Primary } = composeStories(stories)

describe('Button.tsx', function () {
	const label = 'Click Me!'
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary label={label} loading={false} />)
		expect(cy.get('button')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Primary label={label} loading={false} />)
		cy.checkA11y(".aut-iframe", {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa'],
			}
		}, terminalLog)
	})
	it('should render loading icon', function () {
		cy.mount(<Primary label={label} loading={true} />)
		cy.get('button').children().should('have.class', 'animate-spin')
	})
	//TODO: we are only checking if the class name is added but not if the css is actually applied
	it('should have outline on focus', function() {
		cy.mount(<Primary label={label} loading={false} />)
		cy.get('button').should('have.class', 'focus:outline-blue-500')
		cy.get('button').should('have.class', 'focus:outline-dashed')
	})
	it('should render secondary variant when called', function() {
		cy.mount(<Primary label={label} loading={false} primary={false} />)
		cy.get('button').should('have.css', 'background-color')
	})
})
