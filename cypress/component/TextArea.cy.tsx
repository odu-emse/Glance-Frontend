import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/TextArea.stories'
import terminalLog from '../support/component'

const { Primary, Disabled, WithLabel, MaxLength } = composeStories(stories)

describe('TextArea.tsx', function () {

    const value='This is a default value text for the text area component.'
	const id= 'text-area'
	const role= 'textbox'
	const name= 'text-area'
	const rows= 1
	const placeholder= 'This is a placeholder text for the text area component.'
	const disabled=false
	const maxLength= 1000
	const required= false
	const readOnly= false
	const wrap= 'soft'
	const autofocus= false
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary />)
		expect(cy.get('div')).to.exist
        expect(cy.get('textarea')).to.exist
        expect(cy.get('span')).to.exist
        expect(cy.get('button')).to.exist
        expect(cy.get('span')).to.exist



	})
	it('should have no accessibility violations', () => {
		cy.mount(<Primary />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
    it('should render component ', () => {
		cy.mount(<Primary />)
		
	/*	cy.get('textarea').should('have.class', 
        'w-full bg-white placeholder:italic border border-slate-400 shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-2
         focus:outline-dashed focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-blue-400')
         <span
						className={`absolute right-2 bottom-2 flex items-center ${
							disabled ? 'opacity-50' : ''
						}`}

					>
                    <span className="text-xs px-2 bg-gray-100 ml-auto mr-0 block w-fit">
						Maximum characters: {maxLength}
					</span>
         */
         cy.get('textarea').should('have.class', 'focus:outline-2')
		cy.get('textarea').should('have.class', 'focus:outline-dashed')
        cy.get('textarea').should('have.class', 'focus:ring-0')
        cy.get('textarea').should('have.class', 'focus:outline-blue-400')


	})
	it('should render component with disabled TextArea', () => {
		cy.mount(<Disabled />)
        cy.get('textarea').should('have.class', 'disabled:opacity-50')
        cy.get('textarea').should('have.class', 'disabled:cursor-not-allowed')
        cy.get('span').should('have.class', 'absolute right-2 bottom-2 flex items-center opacity-50')
        cy.get('textarea').trigger('mouseover', { force: true })
        cy.get('textarea').should('have.css', 'cursor', 'not-allowed')


	})
	it('should render component with a label on the top', () => {
		cy.mount(<WithLabel />)
		cy.get('label')
	})
	it('should render component which accepts specific max length', () => {
        const length='10'

		cy.mount(<MaxLength />)
        cy.get('textarea').should('have.attr', 'maxLength',length)
       

	})
})
