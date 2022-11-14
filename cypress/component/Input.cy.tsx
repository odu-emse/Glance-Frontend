import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Input.stories'
import terminalLog from '../support/component'

const {
	Default,
	Email,
	Disabled,
	ErrorStateWithDescription,
	Search,
	ErrorState,
	Descriptive
} = composeStories(stories)

describe('Input.tsx', function() {
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should prevent users from proceeding if required field is not filled out', function() {
		cy.mount(
			<form onSubmit={(e) => e.preventDefault()}>
				<Default required={true} onChange={(e) => console.log(e)} />
				<button type="submit">Submit</button>
			</form>
		)
		cy.get('button').click()
		cy.get('input:invalid').should('have.length', 1)
	})
	describe('Email', function() {
		it('should render component', function() {
			cy.mount(<Email />)
			expect(cy.get('input')).to.exist
		})
		it('should have default type of email', function() {
			cy.mount(<Email />)
			cy.get('input').should('have.attr', 'type', 'email')
		})
		it('should prevent users from submitting non-email value', function() {
			cy.mount(
				<form>
					<Email onChange={(e) => console.log(e)} />
					<button type="submit">Submit</button>
				</form>
			)
			cy.get('input').type('invalidEmail.com')
			cy.get('button').click()
			cy.get('input:invalid').should('have.length', 1)
		})
		it('should let users submit email address', function() {
			cy.mount(
				<form onSubmit={(e) => e.preventDefault()}>
					<Email onChange={(e) => console.log(e)} />
					<button type="submit">Submit</button>
				</form>
			)
			cy.get('input').type('dpapp001@odu.edu')
			cy.get('button').click()
			cy.get('input:invalid').should('have.length', 0)
		})
		it('should have no accessibility violations', function() {
			cy.mount(<Email role="textbox" name="email-input" label="Email address" ariaLabel="Email address input field" />)
			cy.checkA11y(undefined, {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508']
				}
			}, terminalLog)
		})
		it('should have a label that matches the prop passed in', function() {
			const label = 'Email address'
			cy.mount(<Email label={label} />)
			cy.get('label').should('contain.text', label)
		})
		it('should shrink the label size when input has value', function() {
			cy.mount(<Email onChange={(e) => console.log(e)} />)
			cy.get('label').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)')
			cy.get('input').type('test')
			cy.get('label').should('have.css', 'transform', 'matrix(0.75, 0, 0, 0.75, 0, -24)')
		})
	})
	describe('Disabled', function() {
		it('should render component', function() {
			cy.mount(<Disabled />)
			expect(cy.get('input')).to.exist
		})
		it('should have no accessibility violations', function() {
			cy.mount(<Disabled role="textbox" name="email-input" label="Email address" ariaLabel="Email address input field" />)
			cy.checkA11y(undefined, {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508']
				}
			}, terminalLog)
		})
		it('should have disabled cursor when hovering over element', function() {
			cy.mount(<Disabled />)
			cy.get('input').trigger('mouseover', { force: true })
			cy.get('input').should('have.css', 'cursor', 'not-allowed')
		})
	})
	describe('Error State', function() {
		it('should render component', function() {
			cy.mount(<ErrorState />)
			expect(cy.get('input')).to.exist
		})
		it('should have no accessibility violations', function() {
			cy.mount(<ErrorState role="textbox" name="error-input" label="Example" ariaLabel="input field" />)
			cy.checkA11y(undefined, {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508']
				}
			}, terminalLog)
		})
		it('should have a red border by default', function() {
			const red = 'rgb(240, 82, 82)'
			cy.mount(<ErrorState onChange={(e) => console.log(e)} />)
			cy.get('input').should('have.css', 'border-color', red)
		})
		it('should have a default border color when error is false', function() {
			const def = 'rgb(209, 213, 219)'
			cy.mount(<ErrorState error={false} onChange={(e) => console.log(e)} />)
			cy.get('input').should('have.css', 'border-color', def)
		})
	})
	describe('Error State With Description', function() {
		it('should render component', function() {
			cy.mount(<ErrorStateWithDescription />)
			expect(cy.get('input')).to.exist
		})
		it('should have no accessibility violations', function() {
			cy.mount(<ErrorStateWithDescription role="textbox" name="input" label="Example" ariaLabel="input field" />)
			cy.checkA11y(undefined, {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508']
				}
			}, terminalLog)
		})
		it('should have a red border color by default', function() {
			const red = 'rgb(240, 82, 82)'
			cy.mount(<ErrorStateWithDescription />)
			cy.get('input').should('have.css', 'border-color', red)
		})
		it('should have a default border color when error is false', function() {
			const def = 'rgb(209, 213, 219)'
			cy.mount(<ErrorStateWithDescription error={false} />)
			cy.get('input').should('have.css', 'border-color', def)
		})
		it('should have red description when error is true', function() {
			const red = 'rgb(224, 36, 36)'
			cy.mount(<ErrorStateWithDescription />)
			cy.get('p').should('have.css', 'color', red)
		})
		it('should have default text color for description when error is false', function() {
			const def = 'rgb(107, 114, 128)'
			cy.mount(<ErrorStateWithDescription error={false} />)
			cy.get('p').should('have.css', 'color', def)
		})
		it('should respect markup passed in as description', function() {
			cy.mount(<ErrorStateWithDescription description={<span className="text-blue-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos dolor eaque eius eveniet harum incidunt, inventore natus omnis quaerat quas quibusdam quis sint tempore ullam veniam veritatis voluptas, voluptatibus.</span>} />)
			cy.get('p').children('span').should('have.class', 'text-blue-500')
		})
		it('should have focus class of red on the label element', function() {
			cy.mount(<ErrorStateWithDescription />)
			cy.get('label').should('have.class', 'peer-focus:text-red-600')
		})
	})
	describe('Search', function() {
		it('should render component', function() {
			cy.mount(<Search />)
			expect(cy.get('input')).to.exist
		})
		it('should have no accessibility violations', function() {
			cy.mount(<Search role="textbox" name="search-input" label="Search" ariaLabel="Search input field" />)
			cy.checkA11y(undefined, {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508']
				}
			}, terminalLog)
		})
		it('should render search icon with submit button', function() {
			cy.mount(<Search ariaLabel="Search box input field" />)
			cy.get('input').should('have.attr', 'aria-label', 'Search box input field')
			cy.get('button').should('have.attr', 'type', 'submit')
			cy.get('button').children().should('have.length', '2')
			cy.get('button').children('span').should('have.class', 'sr-only').and('contain.text', 'Search').and('not.be', 'visible')
			cy.get('button').children('span').next().should('have.attr', 'stroke', 'currentColor').and('have.attr', 'fill', 'currentColor').and('have.attr', 'stroke-width', '0')
		})
	})
	describe('Descriptive', function() {
		it('should render component', function() {
			cy.mount(<Descriptive />)
			expect(cy.get('input')).to.exist
		})
		it('should have no accessibility violations', function() {
			cy.mount(<Descriptive role="textbox" name="email-input" label="Email address" ariaLabel="Email address input field" />)
			cy.checkA11y(undefined, {
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508']
				}
			}, terminalLog)
		})
		it('should have a default description', function() {
			cy.mount(<Descriptive />)
			cy.get('p').should('have.text', 'For more information on how your data is stored and accessed throughout the application, please visit our Privacy Policy.')
		})
		it('should respect markup passed in as description', function() {
			cy.mount(<Descriptive description={<span className="text-blue-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos dolor eaque eius eveniet harum incidunt, inventore natus omnis quaerat quas quibusdam quis sint tempore ullam veniam veritatis voluptas, voluptatibus.</span>} />)
			cy.get('p').children('span').should('have.class', 'text-blue-500')
		})
		it('should have focus class of blue on the label element', function() {
			cy.mount(<Descriptive />)
			cy.get('label').should('have.class', 'peer-focus:text-blue-600')
		})
	})
})
