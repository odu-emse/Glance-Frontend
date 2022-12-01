import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Button.stories'
import terminalLog from '../support/component'

const { Primary, PrimaryIcon, Secondary, Loading, Small, Large, Disabled, Pill } = composeStories(stories)

describe('Button.tsx', function () {
	const label = <p>Click Me!</p>
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary>{ label }</Primary>)
		expect(cy.get('button')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Primary>{ label }</Primary>)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
	it('should render loading icon when loading prop is true', function () {
		cy.mount(<Loading loading={true}>{ label }</Loading>)
		cy.get('button').children().should('have.class', 'animate-spin')
	})
	//TODO: we are only checking if the class name is added but not if the css is actually applied
	it('should have outline on focus', function() {
		cy.mount(<Primary>{ label }</Primary>)
		cy.get('button').should('have.class', 'focus:outline-blue-500')
		cy.get('button').should('have.class', 'focus:outline-dashed')
	})
	it('should render secondary variant when called', function() {
		cy.mount(<Secondary variant='secondary'>{ label }</Secondary>)
		cy.get('button').should('have.class', 'bg-gray-300')
	})
	it('should be disabled when disable prop is true', function() {
		cy.mount(<Disabled disabled={true}>{ label }</Disabled>)
		cy.get('button').should('have.attr', 'disabled')
	})
	it('should have a type of button by default', function() {
		cy.mount(<Primary>{ label }</Primary>)
		cy.get('button').should('have.attr', 'type', 'button')
	})
	it('should have a type of submit when type prop is submit', function() {
		cy.mount(<Primary type="submit">{ label }</Primary>)
		cy.get('button').should('have.attr', 'type', 'submit')
	})
	it('should have a type of reset when type prop is reset', function() {
		cy.mount(<Primary type="reset">{ label }</Primary>)
		cy.get('button').should('have.attr', 'type', 'reset')
	})
	it('should have medium weight font', function() {
		cy.mount(<Primary>{ label }</Primary>)
		cy.get('button').should('have.class', 'font-medium')
	})
	it('should have increased size if size prop is set to large', function() {
		cy.mount(<Large size="large">{ label }</Large>)
		cy.get('button').should('have.class', 'text-lg')
	})
	it('should have decreased size if size prop is set to small', function() {
		cy.mount(<Small size="small">{ label }</Small>)
		cy.get('button').should('have.class', 'text-sm')
	})
	it('should have pill shape if shape prop is set to pill', function() {
		cy.mount(<Pill shape="pill">{ label }</Pill>)
		cy.get('button').should('have.class', 'rounded-full')
	})
	it('should have regular rounded shape if shape prop is set to regular/by default', function() {
		cy.mount(<Primary>{ label }</Primary>)
		cy.get('button').should('have.class', 'rounded')
	})
})
