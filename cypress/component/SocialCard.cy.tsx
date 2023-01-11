import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../storybook/stories/SocialCard.stories'
import terminalLog from '../support/component'

const { Primary, Secondary } = composeStories(stories)

describe('SocialCard.tsx', function () {
	const timestamp = 1387503354
	const content = 'This is a cypress test'
	const likes = 31
	const comments = 42
	const office = 'ESB 1717'
	const role = 'Prof'
	const TA = {
		firstName: 'testFirst',
		lastName: 'testLast',
		role: 'TA',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
		title: 'Chair of Department',
		office: 'ESB 2101',
		department: 'Engineering Management & Systems Engineering',
	}
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary user={TA} />)
		expect(cy.get('div')).to.exist
		expect(cy.get('img')).to.exist
		expect(cy.get('span')).to.exist
		expect(cy.get('button')).to.exist
		expect(cy.get('input')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Secondary />)
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
	it('should render a profile picture with the following class and css properties', () => {
		cy.mount(<Primary />)
		cy.get('img')
			.should(
				'have.class',
				'shadow-lg rounded-full max-w-full h-12 align-middle border-none'
			)
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'vertical-align', 'middle')
			.and('have.css', 'max-width', '100%')
			.and('have.css', 'height', '48px')
			.and('have.css', 'border-radius', '9999px')
			.and('have.css', 'border-style', 'none')
			.and(
				'have.css',
				'box-shadow',
				'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px'
			)
	})
	it('should render component role in light color with correct content', () => {
		cy.mount(<Primary user={TA} />)
		cy.get('div')
			.get('span.role')
			.should('have.class', 'text-slate-500')
			.and('have.css', 'color', 'rgb(100, 116, 139)')
			.and('have.text', 'TA')
	})
	it('should render component user-fullName in dark color with correct content', () => {
		cy.mount(<Primary user={TA} />)
		cy.get('div.fullname')
			.should('have.class', 'mb-1 text-lg font-bold text-slate-700')
			.and('have.css', 'margin-bottom', '4px')
			.and('have.css', 'font-size', '18px')
			.and('have.css', 'line-height', '28px')
			.and('have.css', 'font-weight', '700')
			.and('contain.text', 'testFirst testLast')
	})
	it('should render component timestamp with department name and their office', () => {
		TA.office = office
		cy.mount(
			<Secondary user={TA} timestamp={timestamp} content={content} />
		)
		cy.get('div.department')
			.should('have.class', 'text-xs text-neutral-500')
			.and('have.css', 'font-size', '12px')
			.and('have.css', 'line-height', '16px')
			.and('have.css', 'color', 'rgb(115, 115, 115)')
			.and('contain.text', 'ESB 1717')
		/**
		 * from now and counting the unix Timestamp to years, 1387503354 which was Dec 19 2013,
		 *   9 years from now, test result will be greater than 9 years
		 */
		cy.get('div.department')
			.invoke('text')
			.then(parseInt)
			.should('be.a', 'number')
			.and('be.at.least', 9)
	})
	it('should render component role-symbol with correct padding and color', () => {
		TA.role = role
		cy.mount(<Secondary user={TA} />)
		expect(cy.get('div.role-symbol')).to.exist
		cy.get('div.role-symbol').should('have.descendants', 'svg')
		cy.get('div.role-symbol svg')
			.should('have.class', 'text-yellow-400')
			.and('have.css', 'color', 'rgb(227, 160, 8)')
			.and('have.attr', 'height', '38')
			.and('have.attr', 'width', '38')
	})
	it('should render component content with its input text in medium-dark gray and small font', () => {
		cy.mount(<Primary content={content} />)
		cy.get('div.break-words')
			.should('have.text', 'This is a cypress test')
			.and('have.class', 'text-sm text-neutral-600')
			.and('have.css', 'font-size', '14px')
			.and('have.css', 'line-height', '20px')
			.and('have.css', 'color', 'rgb(82, 82, 82)')
	})
	it('should render components for both likes and comments with according properties', () => {
		cy.mount(<Secondary likes={likes} comments={comments} />)
		expect(cy.get('div.likes')).to.exist
		cy.get('div.likes')
			.invoke('text')
			.then(parseInt)
			.should('be.a', 'number')
			.should('eq', 31)
		cy.get('div.likes')
			.should(
				'have.class',
				'flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600'
			)
			.and('have.css', 'display', 'flex')
			.and('have.css', 'color', 'rgb(28, 100, 242)')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'cursor', 'pointer')
			.and('have.descendants', 'svg')
		cy.get('div.likes svg')
			.should('have.attr', 'height', '20')
			.and('have.attr', 'width', '20')

		expect(cy.get('div.comments')).to.exist
		cy.get('div.comments')
			.invoke('text')
			.then(parseInt)
			.should('be.a', 'number')
			.should('eq', 42)
		cy.get('div.comments')
			.should(
				'have.class',
				'flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600'
			)
			.and('have.css', 'display', 'flex')
			.and('have.css', 'color', 'rgb(28, 100, 242)')
			.and('have.css', 'align-items', 'center')
			.and('have.css', 'cursor', 'pointer')
			.and('have.descendants', 'svg')
		cy.get('div.comments svg')
			.should('have.attr', 'height', '20')
			.and('have.attr', 'width', '20')
	})
	it('should render components input-text and its ability to hold text', () => {
		cy.mount(<Primary likes={likes} comments={comments} />)
		cy.get('input')
			.should(
				'have.class',
				'border-transparent bg-transparent px-5 py-2 w-full'
			)
			.and('have.css', 'padding-top', '8px')
			.and('have.css', 'padding-bottom', '8px')
			.and('have.css', 'padding-left', '20px')
			.and('have.css', 'padding-right', '20px')
			.and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.and('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
		cy.get('input')
			.type('Something random to post')
			.should('have.value', 'Something random to post')
	})
	it('should render components file-attachment and emoji-selection', () => {
		cy.mount(<Primary likes={likes} comments={comments} />)
		cy.get("button[aria-label='attach-file']")
			.should('have.class', 'flex items-center justify-center px-5')
			.and('have.css', 'display', 'flex')
			.and('have.css', 'padding-left', '20px')
			.and('have.css', 'padding-right', '20px')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'align-items', 'center')
		cy.get("button[aria-label='attach-file']").should(
			'have.descendants',
			'svg'
		)
		cy.get("button[aria-label='attach-file'] svg")
			.should('have.attr', 'height', 20)
			.and('have.attr', 'width', 20)

		cy.get("button[aria-label='insert-emoji']")
			.should('have.class', 'flex items-center justify-center px-8')
			.and('have.css', 'display', 'flex')
			.and('have.css', 'padding-left', '32px')
			.and('have.css', 'padding-right', '32px')
			.and('have.css', 'justify-content', 'center')
			.and('have.css', 'align-items', 'center')
		cy.get("button[aria-label='insert-emoji']").should(
			'have.descendants',
			'svg'
		)
		cy.get("button[aria-label='insert-emoji'] svg")
			.should('have.attr', 'height', 20)
			.and('have.attr', 'width', 20)
	})
})
