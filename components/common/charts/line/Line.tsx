import * as React from 'react'
import {
	Line,
	LineChart,
	Tooltip,
	Legend,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts'
import type {
	HorizontalAlignmentType,
	IconType,
	VerticalAlignmentType,
} from 'recharts/types/component/DefaultLegendContent'
import { LayoutType } from 'recharts/types/util/types'

export const LineComponent = ({
	data,
	tooltip,
	legend,
	legendConfig,
	width,
	height,
	centerYCoor,
	centerXCoor,
	mt,
	ml,
	mr,
	mb,
}: LineProps) => {
	return (
		<ResponsiveContainer width={`${width}%`} height={`${height}%`}>
			<LineChart
				margin={{ top: mt, right: mr, left: ml, bottom: mb }}
				data={data}
			>
				<XAxis dataKey="name" />
				<YAxis dataKey="graph2" />
				<Line
					cx={centerXCoor && centerXCoor}
					cy={centerYCoor && centerYCoor}
					dataKey="graph1"
					fill="#6495ED"
					stroke="#6495ED"
				/>
				<Line
					cx={centerXCoor && centerXCoor}
					cy={centerYCoor && centerYCoor}
					dataKey="graph2"
					fill="#CCCCFF"
					stroke="#CCCCFF"
				/>
				{tooltip && <Tooltip />}
				{legend && (
					<Legend
						layout={
							legendConfig.layout
								? legendConfig.layout
								: 'horizontal'
						}
						align={
							legendConfig.align ? legendConfig.align : 'center'
						}
						verticalAlign={
							legendConfig.vertical
								? legendConfig.vertical
								: 'middle'
						}
						iconType={
							legendConfig.iconType
								? legendConfig.iconType
								: 'circle'
						}
					/>
				)}
			</LineChart>
		</ResponsiveContainer>
	)
}

export type LineProps = {
	/**
	 * The data to be displayed in the chart.
	 * Each element in the array must have the following properties:
	 * - **name**: The name of the data point.
	 * - **value**: The value of the data point.
	 * - **fill**: The fill color of the data point.
	 */
	xaxisValues: string[]
	data: { name: string; graph1: number }[]
	data1: { name: string; graph2: number }[]

	// data1: { name: string; value: number; fill: string }[]

	// data2: { name: string; value: number; fill: string }[]

	/**
	 * The configuration of the legend. If legend is set to false, the configuration is ignored.
	 * The configuration of the legend is an object with the following properties:
	 * - **layout**: The layout of the legend. Valid values are 'horizontal' and 'vertical'.
	 * - **align**: The alignment of the legend. Valid values are 'center', 'left', 'right', 'top', and 'bottom'.
	 * - **vertical**: The vertical alignment of the legend. Valid values are 'top', 'middle', and 'bottom'.
	 * - **iconType**: The type of the icon. Valid values are 'circle', 'square', 'rect', 'cross', 'diamond', 'star', 'triangle', and 'wye'.
	 */
	legendConfig: {
		layout: LayoutType
		align: HorizontalAlignmentType
		vertical: VerticalAlignmentType
		iconType: IconType
	}
	/**
	 * If true, the on hover tooltip interaction will be displayed.
	 * @default true
	 */
	tooltip: boolean
	/**
	 * If true, the legend will be displayed.
	 * @default true
	 */
	legend: boolean
	/**
	 * The inner radius of the pie chart.
	 * @default 50
	 */
	innerRadius?: number
	/**
	 * The outer radius of the pie chart.
	 * @default 100
	 */
	outerRadius?: number
	/**
	 * The padding angle of the pie chart.
	 * @default 5
	 */
	paddingAngle?: number
	/**
	 * The width of the chart in percentage.
	 * @default 100
	 */
	width?: number | string
	/**
	 * The height of the chart in percentage.
	 * @default 100
	 */
	height?: number | string
	/**
	 * The center y coordinate of the chart.
	 * @default 50
	 */
	centerYCoor?: number
	/**
	 * The center x coordinate of the chart.
	 * @default 50
	 */
	centerXCoor?: number
	/**
	 * The margin top of the chart.
	 * @default 0
	 */
	mt?: number
	/**
	 * The margin left of the chart.
	 * @default 0
	 */
	ml?: number
	/**
	 * The margin right of the chart.
	 * @default 0
	 */
	mr?: number
	/**
	 * The margin bottom of the chart.
	 * @default 0
	 */
	mb?: number
}
