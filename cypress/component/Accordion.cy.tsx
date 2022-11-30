import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Accordion.stories'
import terminalLog from '../support/component'


const { Topic1,Topic2, Topic3 } = composeStories(stories)

describe('Accordion.tsx', function () {

    
    const title = 'Topic 1'
	const lessons = [
		{
			label: 'Module1',
			url: 'lesonlink/module-1',
			checked: true,
		},
		{
			label: 'Module2',
			url: 'lessonlink/module-2',
			checked: false,
		},
		{
			label: 'Module3',
			url: 'lessonlink/module-3',
			checked: true,
		},
	]
    
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Topic1 />)
		expect(cy.get('div')).to.exist
       
        expect(cy.get('button')).to.exist
       
        expect(cy.get('p')).to.exist
       





	})
	it('should have no accessibility violations', () => {
		cy.mount(<Topic1 />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
 
    it('should render component with title and LessonLinks length', () => {
		cy.mount(<Topic1 />)
		
		cy.get('button').should('have.class', 'flex items-center justify-between w-80 p-5 font-medium text-left border border-b-0 border-gray-400 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-400 dark:bg-gray-800 text-black dark:text-white')
	})
    it('should render component moduleIdentifier with list of lessons', () => {
		cy.mount(<Topic1 />)
		cy.get('p').should('have.class', 'mb-2 text-gray-900 dark:text-gray-400')
		
	})
})