import React, { useState } from 'react'
export const ToggleSwitch: React.FC<ToggleProps> = ({
	identifier,
	label,
	variant,
	checked = false,
	size,
	disabled,
	onChange,
	onClick,
}): React.ReactElement => {
	const classes = [
		'relative inline-block items-center mb-5 cursor-pointer',
		// 'relative inline-flex items-center mb-5 cursor-pointer',
	].join(' ')
	// const input = ['sr-only peer'].join(' ')
	// const slider = [`w-9`].join(' ')

	// const [isChecked, setIsChecked] = useState(checked)
	// const handleToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setIsChecked(event.target.checked)
	// 	onChange(event.target.checked)
	// }

	const [toggle, setToggle] = useState(false)

	const handleToggleChange = () => {
		setToggle(!toggle)
	}

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setIsChecked(event.target.checked)
	// 	onChange(event.target.checked)
	// }
	return (
		<div className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer">
			{/* Switch */}
			<div className="bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md"></div>
		</div>
	)
}

export type ToggleProps = {
	identifier?: string
	label?: string
	variant?: 'primary' | 'secondary'
	checked?: boolean
	size?: 'small' | 'base' | 'large'
	disabled?: boolean
	onChange: () => void
	onClick: any
}
