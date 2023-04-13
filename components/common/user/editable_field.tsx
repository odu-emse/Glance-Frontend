import React from 'react'
import { Input, InputProps } from '@/common/forms/inputs/input/input'
import {
	TextArea,
	TextAreaProps,
} from '@/common/forms/inputs/text_area/text_area'

interface EditableFieldProps {
	type: 'text' | 'area'
	inputDetails: TextAreaProps | InputProps
	isEditing: boolean
	header?: string | null
}

function EditableField({
	type,
	isEditing,
	inputDetails,
	header,
}: EditableFieldProps) {
	if (type === 'text') {
		const details = inputDetails as InputProps
		if (isEditing) {
			return (
				<Input
					type={details.type}
					placeholder={details.placeholder}
					defaultValue={details.defaultValue}
					label={details.label || null}
					name={details.name}
					onChange={details.onChange}
					className={details.className}
				/>
			)
		}
		return (
			<h4 className="my-1 uppercase">
				{header ? header : inputDetails.defaultValue}
			</h4>
		)
	} else {
		const details = inputDetails as TextAreaProps
		if (isEditing) {
			return (
				<TextArea
					placeholder={details.placeholder}
					defaultValue={details.defaultValue}
					label={details.label || null}
					name={details.name}
					handle={details.handle}
					className={details.className}
				/>
			)
		}
		return (
			<h4 className="my-1 uppercase">
				{header ? header : inputDetails.defaultValue}
			</h4>
		)
	}
}

export default EditableField
