import * as React from 'react'
import { useRef } from 'react'
import useAutosizeTextArea from './useAutosizeTextArea'
import { IoSend } from 'react-icons/io5'

export const TextArea: React.FC<TextAreaProps> = ({
	handle = () => null,
	value = '',
	id = 'text-area',
	role = 'textbox',
	name = 'text-area',
	rows = 1,
	placeholder = '',
	disabled = false,
	maxLength = 1000,
	required = false,
	readOnly = false,
	wrap = 'soft',
	autofocus = false,
	label = '',
}): React.ReactElement => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	useAutosizeTextArea(textAreaRef.current, value)

	return (
		<div>
			<label htmlFor={id} className="">
				{label && label}
				<div className="relative">
					<textarea
						id={id}
						onChange={handle}
						ref={textAreaRef}
						rows={rows}
						name={name}
						role={role}
						value={value}
						placeholder={placeholder}
						disabled={disabled}
						maxLength={maxLength}
						required={required}
						readOnly={readOnly}
						wrap={wrap}
						autoFocus={autofocus}
						className={`w-full bg-white placeholder:italic border border-slate-400 shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed ${
							value.length === maxLength
								? 'border-red-400 focus:border-red-500 focus:outline-red-400 focus:ring-red-400'
								: ' focus:outline-blue-400'
						}`}
					/>
					<span
						className={`absolute right-2 bottom-2 flex items-center ${
							disabled ? 'opacity-50' : ''
						}`}
					>
						<button type="button" aria-label="send">
							<IoSend size={20} className="mr-1" />
						</button>
					</span>
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
	value: string
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
}
