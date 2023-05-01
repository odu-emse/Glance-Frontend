import React, { useState } from 'react'

export const Input = ({
	label,
	name,
	role,
	onChange,
	required = false,
	type,
	disabled = false,
	description,
	error = false,
	placeholder = 'Enter here',
	className = '',
	length,
	content,
	min,
	max,
	value,
	checked = false,
}: InputProps) => {
	const [isChecked, setIsChecked] = useState(checked)
	const inputShape = type === 'radio' ? 'rounded-full' : 'rounded-sm'
	const handleInputChange = () => {
		if (!disabled) setIsChecked(!isChecked)
	}
	const inputLength =
		length === 'short'
			? 'w-1/6'
			: length === 'normal'
			? 'w-1/3'
			: length === 'long'
			? 'w-1/2'
			: 'w-full'
	const classes = [
		className,
		'block appearance-none focus:outline-none focus:ring-0 peer',
		error ? 'border-red-500 focus:border-red-600' : 'border-wgray',
		disabled
			? 'cursor-not-allowed'
			: 'focus:border-royalblue hover:border-royalblue',
		length ? `${inputLength}` : '',
		type === 'radio' || type === 'checkbox' ? 'sr-only' : 'border-2',
		type === 'range' ? 'h-1 cursor-ew-resize' : '',
	].join(' ')

	return (
		<>
			<div
				className={` ${
					type === 'radio' || type === 'checkbox'
						? 'flex items-center'
						: ''
				}`}
			>
				{label && (
					<h2 className="font-medium mb-1">
						<label htmlFor={name}> {label.toUpperCase()}</label>
					</h2>
				)}
				<input
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					role={role}
					aria-label={type}
					className={classes}
					checked={isChecked}
					required={required}
					disabled={disabled}
					min={type === 'range' ? min : undefined}
					max={type === 'range' ? max : undefined}
					value={type === 'range' ? value : undefined}
					onChange={(event) => {
						if (type === 'checkbox' || type === 'radio') {
							handleInputChange()
						}
						onChange(event.target.value)
					}}
					// onChange={handleInputChange}
				/>
				{type === 'radio' || type === 'checkbox' ? (
					<div
						className={`flex items-center w-4 h-4 ${inputShape} border ${
							disabled ? '' : 'cursor-pointer'
						} ${
							isChecked
								? 'bg-white border-royalblue'
								: 'bg-white border-wgray' // Change the color of the custom checkbox/radio based on isChecked state
						}`}
						onClick={handleInputChange}
					>
						{isChecked && (
							<div
								className={`w-3 h-3 mx-auto my-auto bg-royalblue ${
									type === 'radio'
										? 'rounded-full'
										: 'rounded'
								}`}
							></div>
						)}
					</div>
				) : null}
				{type === 'radio' || type === 'checkbox' ? (
					<label className="ml-1">{content}</label>
				) : null}
				{description && (
					<p
						id="helper-text-explanation"
						className={`my-0 ${error ? 'text-red-600' : ''}`}
					>
						{error ? `Wrong ${type}` : 'This is a test message'}
					</p>
				)}
			</div>
		</>
	)
}

export type InputProps = {
	/**
	 * The label for the input. This will be the floating element that is displayed above the input.
	 */
	label: string
	/**
	 * The name of the input. This is used to identify the input when it is submitted. This value is also used by the label element to identify the `htmlFor` attribute.
	 */
	name: string
	/**
	 * The role attribute on the input allows the browser to gather knowledge about the purpose of the input. This improves accessibility, device adaptation, and cross browser synchronicity.
	 */
	role?: string
	/**
	 * The on Change event handler for the input. This is used to update the value of the input.
	 * @param value The value of the input event.
	 */
	onChange: (e: string) => void
	/**
	 * The description value is used to give users additional information about the either the input or the error that happened. This is used to provide additional context to the user, under the input element. This is just supplementary information, so it's visual hierarchy should not interfere with the input element's.
	 */
	description?: string | React.ReactNode | React.ReactElement
	/**
	 * The required attribute is used to indicate weather the input element is required or not.
	 */
	required?: boolean
	/**
	 * The input type determines the way browsers conduct their validation and on a device by device basis it can change the keyboard behavior for the user.
	 */
	type:
		| 'text'
		| 'email'
		| 'password'
		| 'search'
		| 'url'
		| 'tel'
		| 'number'
		| 'file'
		| 'radio'
		| 'checkbox'
		| 'range'
	/**
	 * The disabled attribute is used to indicate weather the input element is disabled or not.
	 */
	disabled?: boolean
	/**
	 * The error value is used to render different styles of the input element based on the current error state that is passed in as a parameter.
	 */
	error?: boolean
	/**
	 * The aria-label attribute is used to provide a label for the input element. This is used to provide additional context to the user, under the input element. This is just supplementary information, so its visual hierarchy should not interfere with the input element's.
	 */
	ariaLabel?: string
	/**
	 * The placeholder value is used to provide a placeholder for the input element. This is used to provide additional context to the user, under the input element.
	 */
	placeholder?: string
	/**
	 * The className value is used to provide a custom class name to the input element.
	 */
	className?: string
	/**
	 * An enum that specifies the length of the input field
	 */
	length: 'short' | 'normal' | 'long' | 'full'
	/**
	 * Content string for radio input
	 */
	content?: string
	/**
	 * A boolean determines whether the input box is checked or not
	 */
	checked?: boolean
	/**
	 * The `min` attribute is used to specify the minimum value for a range slider
	 */
	min?: number
	/**
	 * The `max` attribute is used to specify the maximum value for a range slider
	 */
	max?: number
	/**
	 * The `value` attribute is used to define the initial value of a range slider
	 */
	value?: number
}
