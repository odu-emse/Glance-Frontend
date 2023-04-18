import React from 'react';
import { Input, InputProps } from '@/common/forms/inputs/input/input';
import { InstructorProfile } from '@/types/index';
import { Button } from '@/common/button/button';

interface EditableFieldListProps {
	listData: Array<string> | [];
	handleUpdate: React.Dispatch<React.SetStateAction<InstructorProfile>>;
	mutableData: InstructorProfile;
	isEditing: boolean;
	persistentData: InstructorProfile;
	inputDetails: Omit<InputProps, 'onChange'>;
}

export const EditableFieldList = ({
																		listData,
																		handleUpdate,
																		mutableData,
																		persistentData,
																		inputDetails,
																		isEditing,
																	}: EditableFieldListProps) => {
	const [addEntryData, setAddEntryData] = React.useState(null);
	const [isAddingEntry, setIsAddingEntry] = React.useState(false);
	return (
		<ul className='ml-3 list-none m-0'>
			{listData.length > 0
				? listData.map((item, index) => {
					if (isEditing) {
						return (
							<li
								key={index}
								className='flex justify-between gap-1'
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
														return e;
													}
													return item;
												}),
										}))
									}
								/>
								<Button className='rounded-md' size='small' onClick={() => {
									handleUpdate((prev) => ({
										...prev,
										[inputDetails.name]:
											mutableData[
												inputDetails.name
												].filter((item, i) => {
												return i !== index;
											}),
									}));
								}}>
									X
								</Button>
							</li>
						);
					} else {
						return (
							<li key={index} className='sans my-1'>
								{item}
							</li>
						);
					}
				})
				: null}
			{isEditing &&
				<>
					{isAddingEntry && (
						<div className='flex gap-1'>
							<Input label={null} name={inputDetails.name} onChange={(e) => setAddEntryData(e)} type={'text'} />
							<Button
								onClick={() => {
									handleUpdate((prev) => ({
										...prev,
										[inputDetails.name]: [
											...mutableData[inputDetails.name],
											addEntryData,
										],
									}));
									setIsAddingEntry(false);
									setAddEntryData(null);
								}}
								size="small"
							>Add</Button>
							<Button
								onClick={() => {
									setIsAddingEntry(false);
									setAddEntryData(null);
								}}
								size="small"
							>Cancel</Button>

						</div>
					)}
					<Button className='sans my-1' onClick={() => {
						setIsAddingEntry(true);
					}} size="small">Add entry</Button>
				</>
			}
		</ul>
	);
};
