import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/InformationCard.stories'
import terminalLog from '../support/component'

const { Default, Primary, Secondary } = composeStories(stories)

describe('InformationCard.tsx', function () {
    const percentComplete = 'Complete'
    const statusMessage = 'Spend 13 or more hours in module view'
    const testModule = 'Introduction to Organization Analysis'
    const moduleIdentifier = 'M 137G'
    const grade = 'A'
	beforeEach(() => {
		cy.injectAxe()
	})
    it('should render component', () => {
		cy.mount(<Default percentComplete = {percentComplete} />)
		expect(cy.get('div')).to.exist
		expect(cy.get('p')).to.exist
	})
    it('should have no accessibility violations for Default', () => {
		cy.mount(<Secondary statusMessage={statusMessage} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
	it('should have no accessibility violations for Primary', () => {
		cy.mount(<Primary testModule={testModule} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
    it('should have no accessibility violations for Secondary', () => {
		cy.mount(<Secondary grade={grade} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
})

it('should render Default variant when percentComplete prop is given', function () {
    cy.mount(<Default percentComplete={true} />)
    cy.get('#Default').should('have.css', 'background-color')
})

it('should render Primary variant when testype prop is given', function () {
    cy.mount(<Primary testType={true} />)
    cy.get('#primary').should('have.css', 'background-color')
})

it('should render Secondary variant when grade prop is given', function () {
    cy.mount(<Secondary grade={true} />)
    cy.get('#secondary').should('have.css', 'background-color')
})

it('should render component statusMessage and percentComplete with l text and xs text and with minimal margin', () => {
    cy.mount(<Default statusMessage={true} percentComplete={true} />)
    cy.get('p.text-l').should('have.class', 'mx-2 my-2 text-l')
    cy.get('p.text-xs').should('have.class', 'mx-2 my-2 text-gray-400 inline-block text-xs')
    
})

it('should render component moduleIdentifier with uppercase, sm text and semi-bold', () => {
    cy.mount(<Primary moduleIdentifier={true} />)
    cy.get('p.uppercase').should('have.css', 'font-size', '12px')
    cy.get('p.uppercase').should('have.css', 'text-transform', 'uppercase')
    cy.get('p.uppercase').should('have.class', 'mx-2 my-2 text-gray-500 inline-block text-xs uppercase font-semibold')
})

it('should render component moduleIdentifier with lg text and minimal margin', () => {
    cy.mount(<Secondary moduleIdentifier={true} percentage={true} grade={true}/>)
    cy.get('#secondary').should('have.class', 'font-medium')
    cy.get('div.text-sm').should('have.class', 'flex justify-start items-center text-gray-600 inline-block text-sm')
    cy.get('div.text-xs').should('have.class', 'flex gap-1 items-center text-gray-500 inline-block text-xs')
    cy.get('div.text-xl').should('have.class', 'text-xl')
})



