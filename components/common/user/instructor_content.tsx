import React, { useState } from 'react'
import { Input } from '@/common/forms/inputs/input/input'
import { InstructorProfile, User } from '@/types/index'
import EditableField from '@/common/user/editable_field'

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
		<div className="mx-10 w-full">
			<div className="grid grid-cols-2 grid-rows-2 gap-4">
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
						header={null}
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
						header={null}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Socials</h4>
					<EditableField
						type={'text'}
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
						header={`Github: ${user.social?.github}`}
					/>
					<EditableField
						type={'text'}
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
						header={`Twitter: ${user.social?.twitter}`}
					/>
					<EditableField
						type={'text'}
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
						header={`LinkedIn: ${user.social?.linkedin}`}
					/>
					<EditableField
						type={'text'}
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
						header={`Facebook: ${user.social?.facebook}`}
					/>
					<EditableField
						type={'text'}
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
						header={`Portfolio: ${user.social?.portfolio}`}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Office location</h4>
					<EditableField
						type={'text'}
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
						isEditing={isEditMode}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Office hours</h4>
					<EditableField
						type={'text'}
						inputDetails={{
							type: 'text',
							placeholder: 'OFFICE HOURS:',
							defaultValue: instructorDetail.officeHours,
							label: null,
							name: 'officeHours',
							onChange: (e) => {
								setInstructorDetail((prevState) => ({
									...prevState,
									officeHours: e,
								}))
							},
						}}
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
					isEditing={isEditMode}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Publications</h4>
				{!isEditMode ? (
					<ul className="ml-0 list-none m-0">
						{instructorDetails.selectedPapersAndPublications?.map(
							(publication, index) => (
								<li key={index} className="sans my-1">
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