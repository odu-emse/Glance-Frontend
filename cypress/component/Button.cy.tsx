import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Button.stories'
import terminalLog from '../support/component'

const { Primary, Secondary, Loading, Small, Large, Disabled } = composeStories(stories)

describe('Button.tsx', function () {
	const label = 'Click Me!'
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary label={label} />)
		expect(cy.get('button')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Primary label={label} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
	it('should render loading icon when loading prop is true', function () {
		cy.mount(<Loading label={label} loading={true} />)
		cy.get('button').children().should('have.class', 'animate-spin')
	})
	//TODO: we are only checking if the class name is added but not if the css is actually applied
	it('should have outline on focus', function() {
		cy.mount(<Primary label={label} />)
		cy.get('button').should('have.class', 'focus:outline-blue-500')
		cy.get('button').should('have.class', 'focus:outline-dashed')
	})
	it('should render secondary variant when called', function() {
		cy.mount(<Secondary label={label} primary={false} />)
		cy.get('button').should('have.css', 'background-color')
	})
	it('should be disabled when disable prop is true', function() {
		cy.mount(<Disabled label={label} disabled={true} />)
		cy.get('button').should('have.attr', 'disabled')
	})
	it('should have a type of button by default', function() {
		cy.mount(<Primary label={label} />)
		cy.get('button').should('have.attr', 'type', 'button')
	})
	it('should have a type of submit when type prop is submit', function() {
		cy.mount(<Primary label={label} type="submit" />)
		cy.get('button').should('have.attr', 'type', 'submit')
	})
	it('should have a type of reset when type prop is reset', function() {
		cy.mount(<Primary label={label} type="reset" />)
		cy.get('button').should('have.attr', 'type', 'reset')
	})
	it('should have increased size if size prop is set to large', function() {
		cy.mount(<Large label={label} size="large" />)
		cy.get('button').should('have.css', 'padding', '32px 40px')
		cy.get('button').should('have.class', 'h-12 w-auto py-8 px-10')
	})
	it('should have decreased size if size prop is set to small', function() {
		cy.mount(<Small label={label} size="small" />)
		cy.get('button').should('have.css', 'padding', '16px 8px')
		cy.get('button').should('have.class', 'h-4 w-auto py-4 px-2')
	})
})
