import * as React from 'react'
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import {
	HorizontalAlignmentType,
	IconType,
	VerticalAlignmentType,
} from 'recharts/types/component/DefaultLegendContent'
import { LayoutType } from 'recharts/types/util/types'

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
		<ResponsiveContainer
			width={width ? width : 750}
			height={height ? height : '100%'}
			aspect={1}
		>
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
	data: { name: string; value: number; fill: string }[]
	legendConfig: {
		layout: LayoutType
		align: HorizontalAlignmentType
		vertical: VerticalAlignmentType
		iconType: IconType
	}
	tooltip: boolean
	legend: boolean
	innerRadius?: number
	outerRadius?: number
	paddingAngle?: number
	width?: number | string
	height?: number | string
	centerYCoor?: number
	centerXCoor?: number
	mt?: number
	ml?: number
	mr?: number
	mb?: number
}
