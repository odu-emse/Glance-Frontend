import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Form.stories'
import terminalLog from '../support/component'

const { Default } = composeStories(stories)

describe('Form.tsx', function () {
	const allowPrevious = false
    const previousLabel = 'Back'
    const proceedLabel = 'Submit'
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		expect(cy.get('form')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})

    it('should render a primary Button Component', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').should('have.class', 'bg-blue-700')
        cy.get('button').should('have.class', 'text-white')
    })

    it('should change submit button color to a lighter blue on hover and keep text white', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').should('have.class', 'hover:bg-blue-600')
        cy.get('button').should('have.class', 'text-white')
    })

    it('should have dotted outline on submit button when clicked', function() {
		cy.mount(<Default allowPrevious={true} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').should('have.class', 'focus:outline-blue-500')
        cy.get('button').each(($el) => {
			cy.wrap($el).should('have.class', 'focus:outline-dashed')
		})
	})

    it('should change users cursor to pointer on hover', function() {
		cy.mount(<Default allowPrevious={true} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').each(($el) => {
			cy.wrap($el).trigger('mouseover').should('have.css', 'cursor', 'pointer')
		})
	})

    it('should change the input border to blue when clicked on', function () {
		cy.mount(<Default />)
		cy.get('input').each(($el) => {
			cy.wrap($el).should('have.class', 'focus:border-blue-600')
		})
	})

    it('should allow users to enter text inside the first and last name inputs', function () {
		cy.mount(<Default />)
		cy.get('input[name="firstName"]').type('John').should('have.value', 'John')
		cy.get('input[name="lastName"]').type('Doe').should('have.value', 'Doe')
	})

    it('should allow users to enter emails inside the email input', function () {
		cy.mount(<Default />)
		cy.get('input[name=email]').should('have.attr', 'type', 'email')
	})

    it('should allow users to enter passwords inside the password input', function () {
		cy.mount(<Default />)
		cy.get('input[name=password]').should('have.attr', 'type', 'password')
	})

    it('should turn label text to blue when focused', function() {
		cy.mount(<Default />)
		cy.get('input').each(($input) => {
			cy.wrap($input).focus().siblings('label').should('have.class', 'peer-focus:dark:text-blue-500 peer-focus:text-blue-600')
		})
	})

    it('should transition label above input box and shrink font size by 75%', function() {
		cy.mount(<Default />)
		cy.get('input').each(($el) => {
			cy.wrap($el).type('something smart').then(($input) => {
				cy.wrap($input).siblings('label').should('have.css', 'transform', 'matrix(0.75, 0, 0, 0.75, 0, -24)').and('have.class', 'transform -translate-y-6 scale-75 top-3 -z-10')
			})
		})
	})

    it('should render previous/back buttons if allowPrevious is true', function() {
		cy.mount(<Default allowPrevious={true} />)
		cy.get('button').should('have.length', 2)
    })  

    it('should render button with the label given to previousLabel', function() {
		cy.mount(<Default allowPrevious={true} previousLabel={"Previous!"} proceedLabel={proceedLabel}/>)
		cy.get('button.bg-gray-300').as('secondaryButton')
        cy.get('@secondaryButton').should('have.attr', 'type', 'reset')
        cy.get('@secondaryButton').should('contain', "Previous!")
    })

    it('should render button with the label given proceedLabel', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={"Next!"} />)
		cy.get('button.bg-blue-700').as('primaryButton')
        cy.get('@primaryButton').should('have.attr', 'type', 'submit')
        cy.get('@primaryButton').should('have.text', "Next!")
    })
})
