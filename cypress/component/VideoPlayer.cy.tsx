import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../storybook/stories/VideoPlayer.stories'
import terminalLog from '../support/component'


const { Sample } = composeStories(stories)

describe('VideoPlayer.tsx', function () {
    beforeEach(() => {
		cy.injectAxe()
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
})