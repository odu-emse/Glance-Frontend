import * as React from 'react'
import { useRef, useEffect } from 'react'
import useAutosizeTextArea from './use_autosize_text_area'

export const TextArea: React.FC<TextAreaProps> = ({
	handle = () => null,
	value = '',
	id = 'text-area',
	role = 'textbox',
	name = 'text-area',
	rows = 2,
	placeholder = '',
	disabled = false,
	maxLength = 1000,
	required = false,
	readOnly = false,
	wrap = 'soft',
	autofocus = false,
	label = '',
	onChange,
	defaultValue = '',
	className = '',
	icon = true,
}): React.ReactElement => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	useAutosizeTextArea(textAreaRef.current, value)
	const classes = [
		className,
		'w-full bg-white placeholder:italic border border-2 border-wgray shadow-md focus:outline-none focus:ring-0 peer rounded-sm py-2 pl-3 pr-10 disabled:opacity-50 disabled:cursor-not-allowed',
		value.length === maxLength
			? 'border-red-400 focus:border-red-500 hover:border-red-400'
			: 'focus:border-royalblue',
		!disabled && value.length !== maxLength ? 'hover:border-royalblue' : '',
	].join(' ')

	return (
		<div>
			<label htmlFor={id} className="">
				{label && <h2>{label.toUpperCase()}</h2>}
				<div className="relative">
					<textarea
						id={id}
						defaultValue={defaultValue}
						onChange={handle}
						ref={textAreaRef}
						rows={rows}
						name={name}
						role={role}
						placeholder={placeholder}
						disabled={disabled}
						maxLength={maxLength}
						required={required}
						readOnly={readOnly}
						wrap={wrap}
						autoFocus={autofocus}
						className={classes}
						// onChange={(event) => onChange(event.target.value)}
					/>
					{icon && (
						<span
							className={`absolute right-2 bottom-2 flex items-center ${
								disabled ? 'opacity-50' : ''
							}`}
						>
							{/* <button type="button" aria-label="send">
								<IoSend size={20} className="mr-1" />
							</button> */}
						</span>
					)}
				</div>
				{value.length === maxLength && (
					<span className="text-xs px-2 bg-gray-100 ml-auto mr-0 block w-fit">
						Maximum characters: {maxLength}
					</span>
				)}
			</label>
		</div>
	)
}

export type TextAreaProps = {
	/**
	 * A event handler that changes the value of the text area element
	 */
	handle?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
	/**
	 * A default string value which will be displayed in the element on page load
	 */
	value?: string
	/**
	 * A string defines an identifier which must be unique in the whole document
	 */
	id?: string
	/**
	 * A string defines an explicit role for the text area element for use by assistive technologies
	 */
	role?: string
	/**
	 * A string defines the name of the text area element
	 */
	name?: string
	/**
	 * A number defines the number of rows in a text area
	 */
	rows?: number
	/**
	 * A string that provides a hint to the user of what can be entered in the text field
	 */
	placeholder?: string
	/**
	 * A boolean makes the text area not mutable, focusable, or even submitted with the form
	 */
	disabled?: boolean
	/**
	 * A number determines the maximum characters allowed for user input inside the text area
	 */
	maxLength?: number
	/**
	 * A boolean indicates that the user must specify a value for the input before the owning form can be submitted
	 */
	required?: boolean
	/**
	 * A Boolean makes the element not mutable, meaning the user can not edit the control
	 */
	readOnly?: boolean
	/**
	 * An enum that specifies how the text in a text area is to be wrapped when submitted in a form
	 */
	wrap?: 'soft' | 'hard'
	/**
	 * A boolean that determines whether the text area element should be focused on page load
	 */
	autofocus?: boolean
	/**
	 * A string that represents a caption for the text area
	 */
	label?: string
	/**
	 * A string that represents a default value for the text area
	 */
	defaultValue?: string
	/**
	 * A string that represents a class name for the text area
	 */
	className?: string
	/**
	 * A boolean that determines whether the text area should have an icon inside of it or not shown at all
	 */
	icon?: boolean
	/**
	 * The on Change event handler for the input. This is used to update the value of the input.
	 * @param value The value of the input event for the textarea.
	 */
	onChange: (e: string) => void
}
