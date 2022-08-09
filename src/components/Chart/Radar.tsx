import * as React from 'react'
import {
	Legend,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts'

export const RadarComponent = ({
	data,
	width,
	height,
	tooltip,
	legend,
	aspectLock,
	outerRadius,
	centerYCoor,
	centerXCoor,
	children,
	fillColor,
	strokeColor,
	fillOpacity,
	dataKey,
	radiusAxis,
	radiusAxisAngle,
}: RadarProps): JSX.Element => {
	const matrixChildren = []

	if (children.props.children?.length > 1) {
		React.Children.map(children.props.children, (child) => {
			matrixChildren.push(child)
		})
	}
	return (
		<ResponsiveContainer
			width={width && width}
			height={aspectLock ? `${height}%` : height}
			aspect={aspectLock ? 1 : undefined}
		>
			<RadarChart
				data={data}
				outerRadius={outerRadius && outerRadius}
				cx={centerXCoor && `${centerXCoor}%`}
				cy={centerYCoor && `${centerYCoor}%`}
				margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
			>
				<PolarGrid />
				<PolarAngleAxis dataKey={dataKey} />
				{radiusAxis && <PolarRadiusAxis angle={90 | radiusAxisAngle} />}
				{matrixChildren?.length > 0
					? matrixChildren.map((child, childIndex) => {
							return React.cloneElement(child, {
								key: childIndex,
								fill: fillColor,
								stroke: strokeColor,
								fillOpacity: fillOpacity,
							})
					  })
					: React.cloneElement(children, {
							fill: fillColor,
							fillOpacity: fillOpacity,
							stroke: strokeColor,
					  })}
				{tooltip && <Tooltip />}
				{legend && (
					<Legend
						iconType={'diamond'}
						layout="vertical"
						align="right"
						verticalAlign="middle"
						margin={{
							top: 0,
							right: 0,
							bottom: 0,
							left: 150,
						}}
					/>
				)}
			</RadarChart>
		</ResponsiveContainer>
	)
}

export type RadarProps = {
	/**
	 * The data to be displayed in the chart. The data should be in the form of an array of objects, each object should have a `dataKey` property which is exactly referenced in the `dataKey` prop being passed in.
	 * @type Array<RadarPoint>
	 */
	data: RadarPoint[]
	/**
	 * The width of the chart in pixel value.
	 * @type number
	 */
	width: number
	/**
	 * The height of the chart in pixel value, unless the aspect ratio is locked, in which case it is treated as a percentage of the parent element.
	 * @type number
	 */
	height: number
	/**
	 * If true, the idiom will have the tooltip hover interaction enabled.
	 * @default false
	 */
	tooltip?: boolean
	/**
	 * If true, the idiom will include a legend
	 * @default false
	 */
	legend?: boolean
	/**
	 * If true, the aspect ratio of the chart will be locked. The idiom will also treat the height property as a percentage, rather than a px value.
	 * @default false
	 */
	aspectLock?: boolean
	outerRadius?: number
	/**
	 * The Center Y coordinate of the radar chart in percentage
	 */
	centerYCoor?: number
	/**
	 * The Center X coordinate of the radar chart in percentage.
	 */
	centerXCoor?: number
	/**
	 * The `<Radar />` component that you wish to render.
	 */
	children: React.ReactElement<
		any,
		string | React.JSXElementConstructor<any>
	> &
		React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
	/**
	 * The fill color of the chart.
	 */
	fillColor: string
	/**
	 * The stroke color of the idiom.
	 */
	strokeColor: string
	/**
	 * The property from the data object that will be used to create the corner of the chart.
	 * @default subject
	 */
	dataKey: string
	/**
	 * The opacity of the fill color that the idiom will possess.
	 * @default 0.5
	 */
	fillOpacity: number
	/**
	 * If true, the radius axis will be displayed.
	 * @default true
	 */
	radiusAxis?: boolean
	/**
	 * The radius axis' angle, if visible.
	 * @default 90
	 */
	radiusAxisAngle?: number
}

interface RadarPoint {
	x: number
	y: number
	cx?: number
	cy?: number
	angle?: number
	radius?: number
	value?: number
	payload?: any
	name?: string
}
