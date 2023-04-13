import React from 'react'
import { Input } from '@/common/forms/inputs/input/input'
import { TextArea } from '@/common/forms/inputs/text_area/text_area'

interface EditableFieldProps {
	type: 'text' | 'area'
	inputDetails: {
		type:
			| 'text'
			| 'email'
			| 'password'
			| 'url'
			| 'number'
			| 'search'
			| 'tel'
			| 'file'
		placeholder: string
		defaultValue: string
		label?: string
		name: string
		onChange: (e: string | React.ChangeEvent<HTMLTextAreaElement>) => void
		className?: string
	}
	isEditing: boolean
}

function EditableField({ type, isEditing, inputDetails }: EditableFieldProps) {
	if (type === 'text') {
		if (isEditing) {
			return (
				<Input
					type={inputDetails.type}
					placeholder={inputDetails.placeholder}
					defaultValue={inputDetails.defaultValue}
					label={inputDetails.label || null}
					name={inputDetails.name}
					onChange={inputDetails.onChange}
					className={inputDetails.className}
				/>
			)
		}
		return <h4 className="my-1 uppercase">{inputDetails.defaultValue}</h4>
	} else {
		if (isEditing) {
			return (
				<TextArea
					placeholder={inputDetails.placeholder}
					defaultValue={inputDetails.defaultValue}
					label={inputDetails.label || null}
					name={inputDetails.name}
					handle={inputDetails.onChange}
					className={inputDetails.className}
				/>
			)
		}
		return <p className="my-1 uppercase">{inputDetails.defaultValue}</p>
	}
}

export default EditableField
