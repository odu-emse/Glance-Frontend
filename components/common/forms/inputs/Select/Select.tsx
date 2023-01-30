import * as React from 'react'

export const Select: React.FC<dropdownProps> = ({
	options,
	handle = () => null,
	label,
	disabled = false,
	required = false,
	name,
	id,
	multiple = false,
	size = 1,
	autoFocus = false,
}): JSX.Element => {
	return (
		<label className="items-center flex gap-1 mb-2 text-l font-medium text-gray-900">
			{label && label}
			<select
				className={`bg-gray-50 text-gray-900 text-sm w-28 w-fit py-3 border-0 focus:ring-0 ml-1 focus:outline-dashed focus:outline-blue-500 ${
					disabled ? 'cursor-not-allowed' : ''
				}`}
				onChange={handle}
				disabled={disabled}
				required={required}
				name={name}
				id={id}
				multiple={multiple}
				size={size}
				autoFocus={autoFocus}
			>
				{options &&
					options.map((option, optionIndex) => (
						<option
							key={optionIndex}
							value={
								typeof option === 'string'
									? option
									: option.value
							}
							selected={
								typeof option === 'string'
									? false
									: option.selected
							}
							disabled={
								typeof option === 'string'
									? false
									: option.disabled
							}
						>
							{typeof option === 'string' ? (
								option
							) : (
								<>
									{option.icon && option.icon}
									{option.label}
								</>
							)}
						</option>
					))}
			</select>
		</label>
	)
}

export type dropdownProps = {
	/**
	 * The options to be displayed in the dropdown
	 */
	options: dropdownOption[] | string[]
	/**
	 * The function to be called when the select value changes
	 * @param event
	 * @returns void
	 * @default () => null
	 */
	handle?: (event: React.ChangeEvent<HTMLSelectElement>) => void
	/**
	 * The displayed label for the dropdown
	 */
	label?: string
	/**
	 * Specifies that a drop-down list should be disabled
	 * @default false
	 */
	disabled?: boolean
	/**
	 * Specifies that the user is required to select a value before submitting the form
	 * @default false
	 */
	required?: boolean
	/**
	 * The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).
	 */
	name?: string
	/**
	 * Specifies a unique id for the drop-down list
	 */
	id?: string
	/**
	 * Specifies that multiple options can be selected at once
	 * @default false
	 */
	multiple?: boolean
	/**
	 * Defines the number of visible options in a drop-down list
	 * @default 1
	 */
	size?: number
	/**
	 * Specifies that the drop-down list should automatically get focus when the page loads
	 * @default false
	 */
	autoFocus?: boolean
}

export type dropdownOption = {
	/**
	 * The programmatically accessible value of the option
	 */
	value: string
	/**
	 * The displayed label of the option
	 */
	label: string
	/**
	 * Optional icon to be displayed in the dropdown before the option
	 */
	icon?: JSX.Element
	/**
	 * Specifies that an option should be disabled
	 */
	disabled?: boolean
	/**
	 * Specifies that an option should be pre-selected when the page loads
	 */
	selected?: boolean
}
