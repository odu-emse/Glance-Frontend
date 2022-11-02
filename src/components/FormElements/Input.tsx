import * as React from 'react'
import { BiSearch } from 'react-icons/bi'

export const Input = ({
	label,
	name,
	role,
	onChange,
	description,
	required = false,
	type,
	ariaLabel,
	defaultValue,
	disabled = false,
	error = false,
}: InputProps) => {
	return (
		<>
			<div className="relative z-0 w-full group">
				<input
					type={type}
					name={name}
					id={name}
					placeholder=" "
					role={role}
					aria-label={ariaLabel}
					className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
						error
							? 'border-red-500 dark:border-red-400 focus:border-red-600 dark:focus:border-red-500'
							: 'dark:focus:border-blue-500 focus:border-blue-600 dark:border-gray-600 border-gray-300'
					}
					${disabled ? 'cursor-not-allowed' : ''}
					`}
					required={required}
					defaultValue={defaultValue}
					onChange={(e) => onChange(e.target.value)}
					disabled={disabled}
				/>
				<label
					htmlFor={name}
					className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
						error
							? 'peer-focus:dark:text-red-500 peer-focus:text-red-600'
							: 'peer-focus:dark:text-blue-500 peer-focus:text-blue-600'
					}`}
				>
					{label}
				</label>
				{type === 'search' && (
					<button
						type="submit"
						className="absolute right-0 top-0 bottom-0 px-3 py-2.5 text-gray-500 dark:text-gray-400 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none"
					>
						<span className="sr-only">Search</span>
						<BiSearch size={24} />
					</button>
				)}
				{description && (
					<p
						id="helper-text-explanation"
						className={`mt-2 text-sm ${
							error
								? 'text-red-600 dark:text-red-500'
								: 'text-gray-500 dark:text-gray-400'
						}`}
					>
						{description}
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
	description?: string | React.ReactNode | JSX.Element
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
	/**
	 * The default value of the input. This is used to set the value of the input when the page is first loaded.
	 */
	defaultValue?: string
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
}
