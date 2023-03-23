/// <reference types="cypress" />
import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '@/common/forms/inputs/input/input.stories'
const { Primary } = composeStories(stories)

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
	it('should render component messageinput', () => {
		cy.mount(<Primary />)
		expect(cy.get('button')).to.exist
	})
	it('should let the users to attachfile, BiImageAdd and RiFileGifFill', () => {
		cy.mount(<Primary />)
		expect(cy.get('button')).to.exist
	})

	it('should render Attach File Symbol', () => {
		cy.mount(<Primary />)
		cy.get('[data-cy="Attachfile"]').click()
	})
	it('should render Image Add Symbol', () => {
		cy.mount(<Primary />)
		cy.get('[data-cy="ImageAdd"]').click()
	})
	it('should render Gif Symbol', () => {
		cy.mount(<Primary />)
		cy.get('[data-cy="GifFill"]').click()
	})
	it('should render Dollar Symbol', () => {
		cy.mount(<Primary />)
		cy.get('[data-cy="DollarSign"]').click()
	})
})
