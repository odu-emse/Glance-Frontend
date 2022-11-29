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
 
    it('should render component questionCount with title and LessonLinks length', () => {
		cy.mount(<Topic1 />)
		
		cy.get('button').should('have.class', 'flex items-center justify-between w-80 p-5 font-medium text-left border border-b-0 border-gray-400 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-400 dark:bg-gray-800 text-black dark:text-white')
	})
    it('should render component moduleIdentifier with list of lessons', () => {
		cy.mount(<Topic1 />)
		cy.get('p').should('have.class', 'mb-2 text-gray-900 dark:text-gray-400')
		
	})
})

/*<div className="border-solid border-gray border">
			<div>
				<p className="mx-3 my-3 text-gray500 inline-block text-xs">
					{questionCount}{' '}
					{questionCount === 1 ? 'question' : 'questions'}
				</p>
				<p className="mx-3 my-3 pl-6 text-gray-500 inline-block text-xs uppercase font-semibold">
					{moduleIdentifier}
				</p>
			</div>
			<div>
				<p className="mx-3 my-3 text-xl">
					{moduleName} - {assignmentName}
				</p>
			</div>
		</div>

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
    it('should render component questionCount with title and LessonLinks length', () => {
		cy.mount(<Topic1 />)
		
		cy.get('button').should('have.class', 'flex items-center justify-between w-80 p-5 font-medium text-left border border-b-0 
					border-gray-400 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 
					hover:border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-400 dark:bg-gray-800 text-black dark:text-white')
	})
    it('should render component moduleIdentifier with list of lessons', () => {
		cy.mount(<Topic1 />)
		cy.get('p').should('have.class', 'mb-2 text-gray-900 dark:text-gray-400')
		
	})
	it('should render component moduleIdentifier with uppercase, sm text and light color', () => {
		cy.mount(<Primary moduleIdentifier={moduleIdentifier} />)
		cy.get('p.uppercase').should('have.css', 'margin', '12px')
		cy.get('p.uppercase').should('have.css', 'font-size', '12px')
		cy.get('p.uppercase').should('have.css', 'padding-left', '24px')
		cy.get('p.uppercase').should('have.css', 'text-transform', 'uppercase')
		cy.get('p.uppercase').should('have.class', 'mx-3 my-3 pl-6 text-gray-500 inline-block text-xs uppercase font-semibold')
	})
    it('should render component moduleIdentifier with list of lessons', () => {
		cy.mount(<Topic1 />)
		cy.get('p').should('have.class', 'mb-2 text-gray-900 dark:text-gray-400')
		
	})
	it('should render component moduleName and assignmentName with lg text and minimal margin', () => {
		cy.mount(<Tertiary moduleName={moduleName} assignmentName={assignmentName} />)
		cy.get('p.text-xl').should('have.css', 'margin', '12px')
		cy.get('p.text-xl').should('have.css', 'font-size', '20px')
		cy.get('p.text-xl').should('have.class', 'mx-3 my-3 text-xl')
	})
})
*/