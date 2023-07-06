/// <reference types="cypress" />
import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as pie from '@/common/charts/pie/pie.stories'
import terminalLog from '../support/component'
import * as line from '@/common/charts/line/line.stories'
import * as radar from '@/common/charts/radar/radar.stories'
import { LineComponent } from '../../components/common/charts/line/line'
import { PieComponent } from '../../components/common/charts/pie/pie'
import { RadarComponent } from '../../components/common/charts/radar/radar'

const { Simple: SimplePie } = composeStories(pie)

const { Simple: SimpleLine } = composeStories(line)

const { Simple: SimpleRadar } = composeStories(radar)

// Line Chart Test Cases
describe('Line Chart', function () {
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component1', () => {
		cy.mount(
			<SimpleLine legend={true}>
				<div className="h-96" id="w-full">
					<LineComponent
						data={[
							{ name: 'January', graph1: 120 },
							{ name: 'February', graph1: 500 },
							{ name: 'March', graph1: 600 },
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
			</SimpleLine>,
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
			<SimplePie legend={true}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'January', value: 120, fill: '' },
							{ name: 'February', value: 500, fill: '' },
							{ name: 'March', value: 600, fill: '' },
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
					/>
				</div>
			</SimplePie>,
		)
		cy.checkA11y(
			undefined,
			{
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508'],
				},
			},
			terminalLog,
		)
	})

	it('should respect panel width with charts', () => {
		cy.mount(
			<SimplePie legend={true} size={2}>
				<div className="h-64" id="test-id">
					<PieComponent
						data={[
							{ name: 'January', value: 120, fill: '#454545' },
							{ name: 'February', value: 500, fill: '#454545' },
							{ name: 'March', value: 600, fill: '#454545' },
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
					/>
				</div>
			</SimplePie>,
		)
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('be.visible')
	})
})

// Pie Chart Test Cases
describe('Pie Chart', function () {
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(
			<SimplePie legend={true}>
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
			</SimplePie>,
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
			<SimplePie legend={true}>
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
			</SimplePie>,
		)
		cy.checkA11y(
			undefined,
			{
				runOnly: {
					type: 'tag',
					values: ['wcag2a', 'wcag2aa', 'section508'],
				},
			},
			terminalLog,
		)
	})
	it('should respect panel width with charts', () => {
		cy.mount(
			<SimplePie legend={true} size={2}>
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
			</SimplePie>,
		)
		cy.get('div')
			.children('div.recharts-responsive-container')
			.should('be.visible')
	})
})

// Radar Chart Test Cases

describe('Radar Chart', function () {
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
		cy.mount(
			<SimpleRadar legend={true}>
				<div className="h-64" id="test-id">
					<RadarComponent
						data={data}
						legend={false}
						tooltip={false}
						width={100}
						height={100}
						dataKey={'A'}
						fillColor={'#ff7300'}
						strokeColor={'#ff7300'}
						fillOpacity={0.6}
					>
						{null}
					</RadarComponent>
				</div>
			</SimpleRadar>,
		)
	})
})
