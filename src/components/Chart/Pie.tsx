import * as React from 'react'
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type {
	HorizontalAlignmentType,
	IconType,
	VerticalAlignmentType,
} from 'recharts/types/component/DefaultLegendContent'
import type { LayoutType } from 'recharts/types/util/types'

export const PieComponent = ({
	data,
	tooltip,
	legend,
	legendConfig,
	innerRadius,
	outerRadius,
	paddingAngle,
	width,
	height,
	centerYCoor,
	centerXCoor,
	mt,
	ml,
	mr,
	mb,
}: PieProps) => {
	return (
		<ResponsiveContainer width={`${width}%`} height={`${height}%`}>
			<PieChart margin={{ top: mt, right: mr, left: ml, bottom: mb }}>
				<Pie
					cx={centerXCoor && centerXCoor}
					cy={centerYCoor && centerYCoor}
					endAngle={0}
					startAngle={360}
					outerRadius={outerRadius}
					innerRadius={innerRadius}
					data={data}
					paddingAngle={paddingAngle}
					dataKey="value"
					fill="#fff"
					stroke="#000"
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
			</PieChart>
		</ResponsiveContainer>
	)
}

export type PieProps = {
	/**
	 * The data to be displayed in the chart.
	 * Each element in the array must have the following properties:
	 * - **name**: The name of the data point.
	 * - **value**: The value of the data point.
	 * - **fill**: The fill color of the data point.
	 */
	data: { name: string; value: number; fill: string }[]
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
