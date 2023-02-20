import React, { useState } from 'react'
export const ToggleSwitch: React.FC<ToggleProps> = ({
	label,
	variant,
	checked = false,
	size,
	disabled = false,
}) => {
	const [isChecked, setIsChecked] = useState(checked)
	const handleToggleSwitch = () => {
		if (!disabled) setIsChecked(!isChecked)
	}

	const switchSize =
		size === 'base' ? 'w-16' : size === 'small' ? 'w-12' : 'w-20'
	const switchTranslateX =
		size === 'base'
			? 'translate-x-6'
			: size === 'large'
			? 'translate-x-10'
			: 'translate-x-4'
	const switchVariant =
		variant === 'primary'
			? 'bg-green-400'
			: variant === 'secondary'
			? 'bg-blue-400'
			: 'bg-red-400'
	const switchBorderColor =
		variant === 'primary'
			? 'border-green-300'
			: variant === 'secondary'
			? 'border-blue-300'
			: 'border-red-300'
	const switchSlider = size === 'small' ? 'w-4 h-4' : 'w-6 h-6'
	const switchDisabled = disabled === true ? '' : 'cursor-pointer'
	return (
		<div className="flex items-center">
			<input
				type="checkbox"
				className="sr-only"
				checked={isChecked}
				onChange={handleToggleSwitch}
				disabled={disabled}
			/>
			<div
				className={`${switchSize} p-1 rounded-full overflow-hidden ${switchDisabled} border-4 ${
					isChecked
						? `${switchVariant} ${switchBorderColor}`
						: 'bg-gray-300'
				}`}
				onClick={handleToggleSwitch}
			>
				<span
					className={`mt-0.5 text-sm font-bold absolute place-content-center select-none ${
						isChecked
							? 'text-white translate-x-0'
							: size === 'base'
							? 'translate-x-6 text-gray-500'
							: 'translate-x-9 text-gray-500'
					} ${size === 'small' ? 'hidden' : ''}`}
				>
					{isChecked ? 'ON' : 'OFF'}
				</span>
				<div
					className={`transition ${switchSlider} bg-white rounded-full transform ${
						isChecked ? switchTranslateX : 'translate-x-0'
					}`}
				></div>
			</div>

			<p className={`${label === '' ? '' : 'ml-1'} select-none`}>
				{label}
			</p>
		</div>
	)
}

export type ToggleProps = {
	/**
	 * A string that captions for the toggle switch
	 */
	label?: string
	/**
	 * An enum that specifies how the color theme of the toggle switch
	 */
	variant: 'primary' | 'secondary' | 'tertiary'
	/**
	 * A boolean determines whether the toggle switch is checked or not
	 */
	checked?: boolean
	/**
	 * An enum that specifies the size of the toggle switch
	 */
	size: 'small' | 'base' | 'large'
	/**
	 * A boolean makes the toggle switch not mutable, focusable
	 */
	disabled?: boolean
}
