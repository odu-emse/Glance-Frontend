import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../storybook/stories/VideoPlayer.stories'
import terminalLog from '../support/component'
import cypressConfig from 'cypress.config'

const { Sample } = composeStories(stories)

describe('VideoPlayer.tsx', function () {
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Sample />)
		expect(cy.get('div')).to.exist
		expect(cy.get('img')).to.exist
		expect(cy.get('span')).to.exist
		expect(cy.get('button')).to.exist
		expect(cy.get('input')).to.exist
		expect(cy.get('video')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Sample />)
		cy.checkA11y(
			undefined,
			{
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508'],
				},
			},
			terminalLog
		)
	})
	it('video should be muted and unmuted when volume button gets clicked', () => {
		cy.mount(<Sample />)
		
		// simulating click to volume button to mute and play video after a click on start
		cy.get('body')
			.trigger('mouseover')
			.get('button[data-cy=volume]')
			.should('exist')
			.click()
			.get('button[data-cy=play-button]')
			.should('exist')
			.click()
			.get('video')
			.then(($video) => {
				expect($video[0].muted).to.be.true
				expect($video[0].paused).to.be.false
			})
		// cypress test 500ms delay to ensure previous test registered
		cy.wait(500)
		
		// simulating click to volume button to unmute and play pause video after a click on start
		cy.get('body')
			.trigger('mouseover')
			.get('button[data-cy=volume]')
			.should('exist')
			.click()
			.get('button[data-cy=play-button]')
			.should('exist')
			.click()
			.get('video')
			.then(($video) => {
				expect($video[0].muted).to.be.false
				expect($video[0].paused).to.be.true
			})
	})
})
