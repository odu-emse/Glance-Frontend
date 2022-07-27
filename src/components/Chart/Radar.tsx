import * as React from 'react'
import {
	Legend,
	PolarAngleAxis,
	PolarGrid,
	Radar,
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
}: RadarProps): JSX.Element => {
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
				<PolarAngleAxis dataKey="subject" />
				<Radar
					name="Current semester"
					dataKey="A"
					stroke="#e74d3c"
					fill="#e74d3c"
					fillOpacity={0.5}
				/>
				<Radar
					name="Next semester"
					dataKey="B"
					stroke="#f39d12"
					fill="#f39d12"
					fillOpacity={0.5}
				/>
				<Radar
					name="Projected semester"
					dataKey="C"
					stroke="#7ccc63"
					fill="#7ccc63"
					fillOpacity={0.5}
				/>
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
	data: {
		subject: string
		A: number
		B: number
		C: number
		fullMark: number
	}[]
	width: number
	height: number
	tooltip?: boolean
	legend?: boolean
	aspectLock?: boolean
	outerRadius?: number
	centerYCoor?: number
	centerXCoor?: number
}
