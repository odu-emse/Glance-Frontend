import React from 'react'
import { Input, InputProps } from '@/common/forms/inputs/input/input'
import {
	TextArea,
	TextAreaProps,
} from '@/common/forms/inputs/text_area/text_area'
import {
	FaFacebook,
	FaGithub,
	FaLink,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa'
import Link from 'next/link'

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
	/**
	 * The url to link the header to
	 */
	headerURL?: string | null
	/**
	 * determines whether the text displayed will be uppercase with a h4 tag or lowercase with a p tag
	 */
	isHeader?: boolean
}

function EditableField({
	type,
	isEditing,
	inputDetails,
	header,
	platform = null,
	headerURL = null,
	isHeader = true,
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
		if(!details.defaultValue || typeof details.defaultValue === 'undefined') return null
		return (
			<div className="flex gap-3 items-center ml-3">
				{headerURL ? (
					<Link href={headerURL}>
						<a className="cursor-pointer flex gap-3 items-center no-underline" target="_blank">
							<IconSwitch platform={platform} />
							<h4 className={`my-1 sans text-royalblue`}>
								{header}
							</h4>
						</a>
					</Link>
				) : (
					<>
						<IconSwitch platform={platform} />
						{isHeader ? (
							<h4 className={`my-1 sans text-black uppercase`}>
								{header}
							</h4>
						) : (
							<p className={`my-1 sans text-black font-normal`}>
								{header}
							</p>
						)}
					</>
				)}
			</div>
		)
	}
	if (type === 'area') {
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
		if(!details.defaultValue || typeof details.defaultValue === 'undefined') return null
		return (
			<p className="my-3.5 sans ml-3">
				{details.defaultValue}
			</p>
		)
	}
}

const IconSwitch = ({ platform }: { platform: string | null }) => {
	switch (platform) {
		case 'facebook':
			return <FaFacebook />
		case 'github':
			return <FaGithub />
		case 'linkedin':
			return <FaLinkedin />
		case 'twitter':
			return <FaTwitter />
		case 'url':
			return <FaLink />
		default:
			return null
	}
}

export default EditableField
