import React from 'react'
import { Input } from '@/common/forms/inputs/input/input'

export const EditableFieldList = ({
	listData,
	handleUpdate,
	mutableData,
	isEditing,
}) => {
	return (
		<ul className="ml-3 list-none m-0">
			{listData.map((item, index) => {
				if (isEditing) {
					return (
						<li key={index} className="flex justify-between">
							<Input
								label={null}
								name={'publication'}
								onChange={null}
								type={'text'}
								defaultValue={item}
							/>
							<button
								className="bg-red-500 text-white px-2 py-1 rounded-md"
								onClick={() => {
									const newPublications = listData.filter(
										(pub, i) => i !== index
									)
									handleUpdate(newPublications)
								}}
							>
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
			})}
		</ul>
	)
}
