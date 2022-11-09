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
		cy.get('button').should('have.class', 'h-10 w-auto py-2 px-5')
        cy.get('button').should('have.css', 'padding', '8px 20px')
    })

    it('should change submit button color to a lighter blue on hover and keep text white', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').should('have.class', 'hover:bg-blue-500')
        cy.get('button').should('have.class', 'text-white')
    })

    it('should have dotted outline on submit button when clicked', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').should('have.class', 'focus:outline-blue-500')
        cy.get('button').should('have.class', 'focus:outline-dashed')
	})

    it('should change users cursor to pointer on hover', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button').should('have.class', 'cursor-pointer')
        cy.get('button').should('have.css', 'cursor', 'pointer')
	})

    it('should change the textbox underline to blue when clicked on', function () {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('input').should('have.class', 'focus:border-blue-600')
	})

    it('should allow users to enter text inside the first and last name boxes', function () {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('input[type=text]').should('have.attr', 'type', 'text')
	})

    it('should allow users to enter emails inside the email box', function () {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('input[type=email]').should('have.attr', 'type', 'email')
	})

    it('should allow users to enter passwords inside the password box', function () {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('input[type=password]').should('have.attr', 'type', 'password')
	})

    it('should turn placeholder text to blue when focused', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('label').should('have.class', 'peer-focus:dark:text-blue-500 peer-focus:text-blue-600')
	})

    it('should transition placeholder above input box and shrink font size by 75%', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('label').should('have.class', 'transform -translate-y-6 scale-75 top-3 -z-10')
	})

    it('should show a previous/back button', function() {
		cy.mount(<Default allowPrevious={true} previousLabel={previousLabel} proceedLabel={proceedLabel} />)
		cy.get('button[type=reset]').should('have.attr', 'type', 'reset')
    })  

    it('should name the previous/next button to the given previousLabel (Previous!)', function() {
		cy.mount(<Default allowPrevious={true} previousLabel={"Previous!"} proceedLabel={proceedLabel}/>)
        cy.get('button[type=reset]').should('have.attr', 'type', 'reset')
        cy.get('button[type=reset]').should('contain', "Previous!")
    })

    it('should name the proceed/next button to the given proceedLabel (Next!)', function() {
		cy.mount(<Default allowPrevious={allowPrevious} previousLabel={previousLabel} proceedLabel={"Next!"} />)
        cy.get('button[type=submit]').should('have.attr', 'type', 'submit')
        cy.get('button[type=submit]').should('have.text', "Next!")
    })
})
