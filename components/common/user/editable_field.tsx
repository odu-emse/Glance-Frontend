import React from 'react'
import { Input, InputProps } from '@/common/forms/inputs/input/input'
import {
	TextArea,
	TextAreaProps,
} from '@/common/forms/inputs/text_area/text_area'
import { FaFacebook, FaGithub, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface EditableFieldProps {
	/**
	 * The type of input field to display
	 */
	type: 'text' | 'area'
	/**
	 * The details of the input field
	 */
	inputDetails: TextAreaProps | InputProps
	/**
	 * Whether the field is in edit mode
	 */
	isEditing: boolean
	/**
	 * The header to display when not in edit mode
	 */
	header?: string | null
	/*
	 * The platform to display an icon for
	 */
	platform?: string
}

function EditableField({
	type,
	isEditing,
	inputDetails,
	header,
	platform = 'url',
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
			<div className="flex gap-3 items-center ml-3">
				<IconSwitch platform={platform} />
			<h4 className="my-1 sans text-royalblue">
				{platform !== 'url' && "@"}{header}
			</h4>
			</div>
		)
	}
	if (type === 'area'){
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
			<p className="my-3.5 sans ml-3">
				{header ? header : details.defaultValue}
			</p>
		)
	}
}

const IconSwitch = ({ platform } : {platform: string}) => {
	switch (platform) {
		case 'facebook':
			return (
				<FaFacebook />
			)
		case 'github':
			return (
				<FaGithub />
			)
		case 'linkedin':
			return (
				<FaLinkedin />
			)
		case 'twitter':
			return (
				<FaTwitter />
			)
		case 'url':
			return (
				<FaLink />
			)
		default:
			return null
	}
}

export default EditableField
