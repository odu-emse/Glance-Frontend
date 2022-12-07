import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/MessageInput.stories'
import terminalLog from '../support/component'
import { MessageInput } from '../../src/components/MessageInput'

const { Primary} = composeStories(stories)

describe('MessageInput.tsx', function () {
	beforeEach(() => {
		cy.injectAxe()
	})

    it('should render component', () => {
		cy.mount(<Primary />)
        expect(cy.get('div')).to.exist
		expect(cy.get('div')).to.exist
        expect(cy.get('div')).to.exist
        expect(cy.get('div')).to.exist
        expect(cy.get('button')).to.exist
	})

    
	})
