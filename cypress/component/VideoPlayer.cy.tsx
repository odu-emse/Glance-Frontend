import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../storybook/stories/VideoPlayer.stories'
import terminalLog from '../support/component'
import cypressConfig from 'cypress.config'

const { Sample } = composeStories(stories)

describe('VideoPlayer.tsx', function () {
	const pauseTime = 3.0
	const secondPauseTime = 4.3
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
		// cypress test 500ms delay to ensure previous test registered correctly
		cy.wait(500)

		// simulating click to volume button to unmute and pause video after a click on start
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
	it('captions should be displaying expected output string after video being played ', () => {
		cy.mount(<Sample />)
		cy.get('body')
			.trigger('mouseover')
			.get('button[data-cy=caption]')
			.should('exist')
			.click()
			.get('button[data-cy=play-button]')
			.should('exist')
			.click()
			.get('video')
			.then(($video) => {
				const video = $video[0]
				const track = video.textTracks[0]
				track.mode = 'showing'
				// pause at 3.0 seconds into the clip
				video.currentTime = pauseTime
				video.pause()
				track.oncuechange = () => {
					// https://github.com/mdn/interactive-examples/blob/a31ab1f205d90b93a945dff726d6dbfead150ea1/live-examples/media/examples/friday.vtt
					let captionText = track.activeCues[0].text
					expect(captionText).to.equal(
						"Yes, he's in - in a bad humor"
					)
				}
				// pause at 4.3 seconds into the clip
				video.currentTime = secondPauseTime
				video.pause()
				track.oncuechange = () => {
					// https://github.com/mdn/interactive-examples/blob/a31ab1f205d90b93a945dff726d6dbfead150ea1/live-examples/media/examples/friday.vtt
					let captionText = track.activeCues[0].text
					expect(captionText).to.equal(
						"Somebody must've stolen the crown jewels"
					)
				}
			})
	})
	it('captions should be disabled by default and the button should have the toggle option', () => {
		cy.mount(<Sample />)
		cy.get('video').then(($video) => {
			const video = $video[0]
			const track = video.textTracks[0]

			expect(track.mode).to.equal('disabled')
		})
		cy.get('body')
			.trigger('mouseover')
			.get('button[data-cy=caption]')
			.should('exist')
			.click()
			.get('video')
			.then(($video) => {
				const video = $video[0]
				const track = video.textTracks[0]

				expect(track.mode).to.equal('showing')
			})
			.get('button[data-cy=caption]')
			.should('exist')
			.click()
			.get('video')
			.then(($video) => {
				const video = $video[0]
				const track = video.textTracks[0]

				expect(track.mode).to.equal('disabled')
			})
	})
	it('the HUD overlay should be hidden when the mouse is not hovering over the video player', () => {
		cy.mount(<Sample />)
		cy.get('button[data-cy=caption]').should('not.be.visible')
		cy.get('body').trigger('mouseover')
		cy.get('button[data-cy=caption]').should('be.visible')
	})
	it('should be to open and close live comments and write comments', () => {
		cy.mount(<Sample />)
		// list of live comments should be hidden by default
		cy.get('body')
			.trigger('mouseover')
			.get('button[data-cy=comment]')
			.should('not.be.visible')
			.should('exist')
			.click()
			.should('be.visible')
			.get('button[data-cy=send]')
			.should('not.be.visible')
		// writing message to the textarea and verifying it
		cy.get('textarea[data-cy=message]')
			.type('Hello World')
			.should('have.value', 'Hello World')
		cy.get('textarea[data-cy=message]')
			.get('button[data-cy=send]')
			.should('be.visible')
	})
})
