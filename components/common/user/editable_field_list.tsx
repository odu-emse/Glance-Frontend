import React from 'react'
import { Input, InputProps } from '@/common/forms/inputs/input/input'
import { InstructorProfile } from '@/types/index'

interface EditableFieldListProps {
	listData: Array<string> | []
	handleUpdate: React.Dispatch<React.SetStateAction<InstructorProfile>>
	mutableData: InstructorProfile
	isEditing: boolean
	persistentData: InstructorProfile
	inputDetails: Omit<InputProps, 'onChange'>
}

export const EditableFieldList = ({
	listData,
	handleUpdate,
	mutableData,
	persistentData,
	inputDetails,
	isEditing,
}: EditableFieldListProps) => {
	return (
		<ul className="ml-3 list-none m-0">
			{listData.length > 0
				? listData.map((item, index) => {
						if (isEditing) {
							return (
								<li
									key={index}
									className="flex justify-between"
								>
									<Input
										{...inputDetails}
										defaultValue={item}
										onChange={(e) =>
											handleUpdate((prev) => ({
												...prev,
												[inputDetails.name]:
													mutableData[
														inputDetails.name
													].map((item, i) => {
														if (i === index) {
															return e
														}
														return item
													}),
											}))
										}
									/>
									<button className="bg-red-500 text-white px-2 py-1 rounded-md">
										X
									</button>
								</li>
							)
						} else {
							return (
								<li key={index} className="sans my-1">
									{item}
								</li>
							)
						}
				  })
				: null}
			{isEditing && <li className="sans my-1">add entry</li>}
		</ul>
	)
}
