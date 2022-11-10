import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Panel.stories'
import terminalLog from '../support/component'

const { Text, Chart, List } = composeStories(stories)

describe('Panel.tsx', function () {
	const listChildren = (
		<ul>
			<li>Some</li>
			<li>Things</li>
			<li>Are</li>
			<li>Better</li>
			<li>Then</li>
			<li>Others</li>
		</ul>
	)
	const className = 'underline underline-offset-auto'
	const fullSize = 1
	const halfSize = 2
	const oneThird = 4
	const smallSize = 6
	const title = 'This is a test title'
	beforeEach(() => {
		cy.injectAxe()
		cy.viewport(1920, 1080)
	})
	it('should render component', () => {
		cy.mount(<Text title={title} />)
		expect(cy.get('section')).to.exist
		expect(cy.get('div')).to.exist
		expect(cy.get('h1')).to.exist
		expect(cy.get('p')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Chart>{listChildren}</Chart>)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
	it('should render the addtiniaonal class text-underline-offset auto to the section', () => {
		cy.mount(<Text className={className} />)
		cy.get('section').should('have.class', 'underline underline-offset-auto')
		cy.get('section').should('have.css', 'text-underline-offset', 'auto')

	})
	it('should change the title name and render title component with large text and font-weight of 700', () => {
		cy.mount(<Text title={title} />)
		cy.get('h1').should('contain.text', 'This is a test title')
		cy.get('h1').should('have.class', 'font-bold mb-2 text-2xl')
		cy.get('h1').should('have.css', 'font-weight', '700')
		cy.get('h1').should('have.css', 'font-size', '24px')
		cy.get('h1').should('have.css', 'line-height', '32px')
		cy.get('h1').should('have.css', 'margin-bottom', '8px')

	})
	it('should render strings of the pass-in children of unordered list object and show their li css properties', () => {
		cy.mount(<List>{listChildren}</List>)
		cy.get('li').should('have.text', 'SomeThingsAreBetterThenOthers')
		cy.get('li').should('have.css', 'display', 'list-item')
	})
	it('default container should render the following css properties', () => {
		cy.mount(<Text size={fullSize} />)
		cy.get('section').should('have.class', 'rounded bg-gray-100 shadow-md p-1 md:p-4')
		cy.get('section').should('have.css', 'border-radius', '4px')
		cy.get('section').should('have.css', 'background-color', 'rgb(243, 244, 246)')
		cy.get('section').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px')                                                 
		cy.get('section').should('have.css', 'padding', '16px')
		cy.get('section').should('have.css', 'width', '1920px')
	})
	it('mobile screen should render a different padding of 4 px', () => {
		cy.viewport('iphone-6')
		cy.mount(<Text size={fullSize} />)
		cy.get('section').should('have.css', 'padding', '4px')
	})
	it('should render the correct full size', () => {
		cy.mount(<Text size={fullSize} />)
		cy.get('section').should('have.css', 'width', '1920px')
	})
	it('should render the correct half size', () => {
		cy.mount(<Text size={halfSize} />)
		cy.get('section').should('have.css', 'width', '960px')
	})
	it('should render the correct one fourth size', () => {
		cy.mount(<Text size={oneThird} />)
		cy.get('section').should('have.css', 'width', '480px')
	})
	it('should render the correct one sixth size', () => {
		cy.mount(<Text size={smallSize} />)
		cy.get('section').should('have.css', 'width', '320px')
	})
})
