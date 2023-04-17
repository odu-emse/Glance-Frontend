import { version } from 'package.json'

export const DynamicVersion = ({
	backendVersion,
	isLight,
	modifyCSS
}: DynamicVersionProps) => {
	const frontendVersion = version

	return (
		<span
			className={`sans font-bold ${!modifyCSS && 'absolute' } bottom-1 left-3 gap-4 sans text-4xl ${
				isLight && 'text-white' 
			} ${modifyCSS}`}
		>
			<small className="m-0 p-0">API Version {backendVersion}</small>
			<span className="mx-1">&bull;</span>
			<small className="m-0 p-0">FE Version {frontendVersion}</small>
		</span>
	)
}

export type DynamicVersionProps = {
	backendVersion: string
	isLight: boolean
	modifyCSS?: string
}
