import React, { useState } from 'react'
import { Input } from '@/common/forms/inputs/input/input'
import { InstructorProfile, User } from '@/types/index'
import EditableField from '@/common/user/editable_field'
import { EditableFieldList } from '@/common/user/editable_field_list'

interface StudentContentProps {
	user: User
	isEditMode: boolean
	setUpdatedProfile: React.Dispatch<React.SetStateAction<User | null>>
	instructorDetails: InstructorProfile
}

function InstructorContent({
	user,
	isEditMode,
	setUpdatedProfile,
	instructorDetails,
}: StudentContentProps) {
	const [instructorDetail, setInstructorDetail] = useState({
		...instructorDetails,
	})
	return (
		<div className="md:mx-10 mt-3 w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-1">
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">
						Contact Information:
					</h4>
					<EditableField
						type={'text'}
						inputDetails={{
							type: 'email',
							placeholder: 'EMAIL:',
							defaultValue: user.email,
							label: null,
							name: 'email',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									email: e,
								}))
							},
						}}
						isEditing={isEditMode}
						header={user.email}
					/>
					<EditableField
						type={'text'}
						inputDetails={{
							type: 'tel',
							placeholder: 'PHONE:',
							defaultValue: user.phoneNumber,
							label: null,
							name: 'phoneNumber',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									phoneNumber: e,
								}))
							},
						}}
						isEditing={isEditMode}
						header={user.phoneNumber}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Socials</h4>
					<EditableField
						type={'text'}
						platform={'github'}
						headerURL={'https://youtube.com'}
						inputDetails={{
							type: 'url',
							placeholder: 'GITHUB:',
							defaultValue: user.social?.github || '',
							name: 'github',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									social: {
										...prevState?.social,
										github: e,
									},
								}))
							},
						}}
						isEditing={isEditMode}
						header={`@${user.social?.github}`}
					/>
					<EditableField
						type={'text'}
						platform={'twitter'}
						headerURL={'https://youtube.com'}
						inputDetails={{
							type: 'url',
							placeholder: 'TWITTER:',
							defaultValue: user.social?.twitter || '',
							name: 'twitter',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									social: {
										...prevState?.social,
										twitter: e,
									},
								}))
							},
						}}
						isEditing={isEditMode}
						header={`@${user.social?.twitter}`}
					/>
					<EditableField
						type={'text'}
						platform={'linkedin'}
						headerURL={'https://youtube.com'}
						inputDetails={{
							type: 'url',
							placeholder: 'LINKEDIN:',
							defaultValue: user.social?.linkedin || '',
							name: 'linkedin',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									social: {
										...prevState?.social,
										linkedin: e,
									},
								}))
							},
						}}
						isEditing={isEditMode}
						header={`@${user.social?.linkedin}`}
					/>
					<EditableField
						type={'text'}
						platform={'facebook'}
						headerURL={'https://youtube.com'}
						inputDetails={{
							type: 'url',
							placeholder: 'FACEBOOK:',
							defaultValue: user.social?.facebook || '',
							name: 'facebook',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									social: {
										...prevState?.social,
										facebook: e,
									},
								}))
							},
						}}
						isEditing={isEditMode}
						header={`@${user.social?.facebook}`}
					/>
					<EditableField
						type={'text'}
						platform={'url'}
						headerURL={'https://youtube.com'}
						inputDetails={{
							type: 'url',
							placeholder: 'PORTFOLIO:',
							defaultValue: user.social?.portfolio || '',
							name: 'portfolio',
							onChange: (e) => {
								setUpdatedProfile((prevState) => ({
									...prevState,
									social: {
										...prevState?.social,
										portfolio: e,
									},
								}))
							},
						}}
						isEditing={isEditMode}
						header={user.social?.portfolio}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Office location</h4>
					<EditableField
						type={'text'}
						isHeader={false}
						inputDetails={{
							type: 'text',
							placeholder: 'OFFICE LOCATION:',
							defaultValue: instructorDetail.officeLocation,
							label: null,
							name: 'officeLocation',
							onChange: (e) => {
								setInstructorDetail((prevState) => ({
									...prevState,
									officeLocation: e,
								}))
							},
						}}
						header={instructorDetail.officeLocation}
						isEditing={isEditMode}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Office hours</h4>

					<EditableFieldList
						listData={instructorDetail.officeHours}
						handleUpdate={setInstructorDetail}
						mutableData={instructorDetail}
						persistentData={instructorDetails}
						isEditing={isEditMode}
					/>
				</div>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Biography</h4>
				<EditableField
					type={'area'}
					inputDetails={{
						placeholder: 'Write something about yourself...',
						defaultValue: instructorDetail.background,
						name: 'background',
						className:
							'border-royalblue focus:border-royalblue rounded-none font-normal',
						handle: (e) => {
							setInstructorDetail((prevState) => ({
								...prevState,
								background: e.target.value,
							}))
						},
					}}
					header={instructorDetail.background}
					isEditing={isEditMode}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Contact Policy</h4>
				<EditableField
					type={'area'}
					inputDetails={{
						defaultValue: instructorDetail.contactPolicy,
						name: 'contactPolicy',
						className:
							'border-royalblue focus:border-royalblue rounded-none font-normal',
						handle: (e) => {
							setInstructorDetail((prevState) => ({
								...prevState,
								contactPolicy: e.target.value,
							}))
						},
					}}
					header={instructorDetail.contactPolicy}
					isEditing={isEditMode}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Research Interests</h4>
				<EditableField
					type={'area'}
					inputDetails={{
						defaultValue: instructorDetail.researchInterest,
						name: 'researchInterest',
						className:
							'border-royalblue focus:border-royalblue rounded-none font-normal',
						handle: (e) => {
							setInstructorDetail((prevState) => ({
								...prevState,
								researchInterest: e.target.value,
							}))
						},
					}}
					header={instructorDetail.researchInterest}
					isEditing={isEditMode}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Publications</h4>
				{!isEditMode ? (
					<ul className="ml-3 list-none m-0">
						{instructorDetails.selectedPapersAndPublications?.map(
							(publication, index) => (
								<li key={index} className="sans my-4">
									{publication}
								</li>
							)
						)}
					</ul>
				) : (
					<div>
						{instructorDetails.selectedPapersAndPublications?.map(
							(publication, index) => (
								<div
									key={index}
									className="flex justify-between"
								>
									<Input
										label={null}
										name={'publication'}
										onChange={null}
										type={'text'}
										defaultValue={publication}
									/>
									<button
										className="bg-red-500 text-white px-2 py-1 rounded-md"
										onClick={() => {
											const newPublications =
												instructorDetails.selectedPapersAndPublications?.filter(
													(pub, i) => i !== index
												)
											setInstructorDetail(
												(prevState) => ({
													...prevState,
													selectedPapersAndPublications:
														newPublications,
												})
											)
										}}
									>
										X
									</button>
								</div>
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default InstructorContent
