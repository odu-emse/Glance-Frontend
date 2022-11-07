import * as React from 'react'
import { useRef } from 'react'
import useAutosizeTextArea from './useAutosizeTextArea'
import { IoSend } from 'react-icons/io5'

export const TextArea = ({
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
}: TextAreaProps) => {
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
						<button type="button">
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

type TextAreaProps = {
	handle?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
	value: string
	id?: string
	role?: string
	name?: string
	rows?: number
	placeholder?: string
	disabled?: boolean
	maxLength?: number
	required?: boolean
	readOnly?: boolean
	wrap?: 'soft' | 'hard'
	autofocus?: boolean
	label?: string
}
