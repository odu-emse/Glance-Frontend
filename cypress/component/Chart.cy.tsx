import * as React from 'react'
import { Radar } from 'recharts'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../storybook/stories/Chart/Pie.stories'
import terminalLog from '../support/component'
import { LineComponent } from '../../storybook/components/Chart/Line'
import { PieComponent } from '../../storybook/components/Chart/Pie'
import {
	RadarComponent,
	RadarProps,
} from '../../storybook/components/Chart/Radar'

const { Simple, SingleChildrenRadar, MultipleChildrenRadar } =
	composeStories(stories)

// Line Chart Test Cases
describe('Line Chart', function () {
	const legend = true
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component1', () => {
		cy.mount(
			<Simple legend={true}>
				<div className="h-96" id="w-full">
					<LineComponent
						data={[
							{ name: 'January', graph1: 120, graph2: 200 },
							{ name: 'February', graph1: 500, graph2: 700 },
							{ name: 'March', graph1: 600, graph2: 900 },
						]}
						legend={true}
						tooltip={true}
						legendConfig={{
							align: 'right',
							layout: 'vertical',
							vertical: 'middle',
							iconType: 'circle',
						}}
						width={100}
						height={100}
						xaxisValues={[]}
						data1={[]}
					/>
				</div>
			</Simple>
		)
		expect(cy.get('div')).to.exist
		cy.get('div').should('exist')
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('exist')
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('be.visible')
	})

	it('should have no accessibility violations', () => {
		cy.mount(
			<Simple legend={true}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'January', graph1: 120, graph2: 200 },
							{ name: 'February', graph1: 500, graph2: 700 },
							{ name: 'March', graph1: 600, graph2: 900 },
						]}
						legend={true}
						tooltip={true}
						legendConfig={{
							align: 'right',
							layout: 'vertical',
							vertical: 'middle',
							iconType: 'circle',
						}}
						width={100}
						height={100}
						xaxisValues={[]}
						data1={[]}
					/>
				</div>
			</Simple>
		)
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

	it('should respect panel width with charts', () => {
		cy.mount(
			<Simple legend={true} size={2}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'January', graph1: 120, graph2: 200 },
							{ name: 'February', graph1: 500, graph2: 700 },
							{ name: 'March', graph1: 600, graph2: 900 },
						]}
						legend={true}
						tooltip={true}
						legendConfig={{
							align: 'right',
							layout: 'vertical',
							vertical: 'middle',
							iconType: 'circle',
						}}
						width={100}
						height={100}
						xaxisValues={[]}
						data1={[]}
					/>
				</div>
			</Simple>
		)
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('be.visible')
	})
})

// Pie Chart Test Cases
describe('Pie Chart', function () {
	const legend = true
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(
			<Simple legend={true}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'iphone4', value: 120, fill: '#ff7300' },
							{ name: 'iphone4s', value: 500, fill: '#e5671a' },
							{ name: 'iphone5', value: 600, fill: '#907213' },
						]}
						legend={false}
						tooltip={false}
						legendConfig={{
							align: 'right',
							layout: 'vertical',
							vertical: 'middle',
							iconType: 'circle',
						}}
						width={100}
						height={100}
					/>
				</div>
			</Simple>
		)
		expect(cy.get('div')).to.exist
		cy.get('div').should('exist')
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('exist')
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('be.visible')
	})
	it('should have no accessibility violations', () => {
		cy.mount(
			<Simple legend={true}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'iphone4', value: 120, fill: '#ff7300' },
							{ name: 'iphone4s', value: 500, fill: '#e5671a' },
							{ name: 'iphone5', value: 600, fill: '#907213' },
						]}
						legend={false}
						tooltip={false}
						legendConfig={{
							align: 'right',
							layout: 'vertical',
							vertical: 'middle',
							iconType: 'circle',
						}}
						width={100}
						height={100}
					/>
				</div>
			</Simple>
		)
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
	it('should respect panel width with charts', () => {
		cy.mount(
			<Simple legend={true} size={2}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'iphone4', value: 120, fill: '#ff7300' },
							{ name: 'iphone4s', value: 500, fill: '#e5671a' },
							{ name: 'iphone5', value: 600, fill: '#907213' },
						]}
						legend={false}
						tooltip={false}
						legendConfig={{
							align: 'right',
							layout: 'vertical',
							vertical: 'middle',
							iconType: 'circle',
						}}
						width={100}
						height={100}
					/>
				</div>
			</Simple>
		)
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('be.visible')
	})
})

// Radar Chart Test Cases

describe('Radar Chart', function () {
	const legend = true
	const data = [
		{
			subject: 'ENMA 600',
			A: 50,
		},
		{
			subject: 'ENMA 601',
			A: 48,
		},
		{
			subject: 'ENMA 603',
			A: 52,
		},
		{
			subject: 'ENMA 604',
			A: 99,
		},
		{
			subject: 'ENMA 614',
			A: 62,
		},
		{
			subject: 'ENMA 715',
			A: 25,
		},
	]
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		// TODO: The Radar Rendering, No accessibility Voilation and panel width TestCase Component.
		// Ended up cy.Mount error, which needs to be fixed in Radar Chart Component.
	})
})
