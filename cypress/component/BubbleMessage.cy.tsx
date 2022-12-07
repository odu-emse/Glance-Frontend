import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/BubbleMessage.stories'
import terminalLog from '../support/component'

const {Primary,Secondary}= composeStories(stories)

describe('BubbleMessage.tsx', function () {
	const message = [
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'Hi!',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'Hello?',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'Is this thing on?',
			timestamp: 1664376815,
		},]
    const timeStamp1=''
	beforeEach(() => {
		cy.injectAxe()
	})
    it('should render component', () => {
		cy.mount(<Primary />)
		expect(cy.get('div')).to.exist
		expect(cy.get('ul')).to.exist
        expect(cy.get('li')).to.exist
        expect(cy.get('img')).to.exist
        expect(cy.get('span')).to.exist
	})
	// it('should have no accessibility violations', () => {
	// 	cy.mount(<Primary />)
	// 	cy.checkA11y(undefined, {
	// 		runOnly: {
	// 			type: 'tag',
	// 			values: ['wcag2a', 'wcag2aa', "section508"],
	// 		}
	// 	}, terminalLog)
	// })
    it('should render messages at the left', () => {
        cy.mount(<Primary />)
		cy.get('li.left-li').should('have.class', 'flex items-center  ')
		cy.get('div').should('have.class','w-50 h-50 px-2')
		cy.get('img').should('have.class', 'shadow-lg rounded-full max-w-full h-8 align-middle border-none')
		cy.get('div').should('have.class','relative max-w-xl px-4 py-2 text-white bg-blue-300 bg-gray-300 rounded shadow')
		cy.get('div').should('have.class','w-50 h-50 px-2 opacity-50')
		cy.get('span').should('have.class','block text-xs text-slate-500')
	})
	it('should render messages at the right', () => {
        cy.mount(<Primary />)
		cy.get('li.right-li').should('have.class', 'flex justify-center')
		cy.get('div').should('have.class','w-50 h-50 px-2 t-100')
		cy.get('span').should('have.class','block text-xs text-slate-500')
	})


    


})  

