import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/ModuleCard.stories'
import terminalLog from '../support/component'

const { Primary, Secondary, Tertiary} = composeStories(stories)

describe('ModuleCard.tsx', function () {
    const courseName = 'ENMA'
    const courseNumber = 601
    const moduleIdentifiers = 'M 178P'
    const percentage = 50
    const returnIdPage = '178P'
    const moduleName = 'Ethnics and Philosophy in Engineering Applications'
    const treeView = '178P/treeview'
    const moduleObject = {
        courseName,
        courseNumber,
        moduleIdentifiers,
        moduleName,
        percentage,
        returnIdPage,
        treeView
    }
	beforeEach(() => {
		cy.injectAxe()
	})

    it('should render component', () => {
		cy.mount(<Primary />)
		expect(cy.get('div.moduleCard')).to.exist
	})

    it('should have no accessibility violations', () => {
		cy.mount(<Primary module={moduleObject}  />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
    
    it('should change color when the modules view percentage changes', function () {
		cy.mount(<Primary module={moduleObject} />)
		cy.get('div.statusColorCode').should('have.css', 'background-color', 'rgb(164, 202, 254)')
	})

})

