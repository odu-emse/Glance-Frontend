import React from 'react'
import { InstructorProfile, User } from '@/types/index'
import EditableField from '@/common/user/editable_field'
import { EditableFieldList } from '@/common/user/editable_field_list'

interface StudentContentProps {
	user: User
	isEditMode: boolean
	setUpdatedProfile: React.Dispatch<React.SetStateAction<User | null>>
	instructorDetails: InstructorProfile
	setUpdatedInstructorProfile: React.Dispatch<
		React.SetStateAction<InstructorProfile | null>
	>
	immutableInstructorDetails: InstructorProfile
}

function InstructorContent({
	user,
	isEditMode,
	setUpdatedProfile,
	instructorDetails,
	setUpdatedInstructorProfile,
	immutableInstructorDetails,
}: StudentContentProps) {
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
							defaultValue:
								immutableInstructorDetails.officeLocation,
							label: null,
							name: 'officeLocation',
							onChange: (e) => {
								setUpdatedInstructorProfile((prevState) => ({
									...prevState,
									officeLocation: e,
								}))
							},
						}}
						header={immutableInstructorDetails.officeLocation}
						isEditing={isEditMode}
					/>
				</div>
				<div className="col-span-1 row-span-1">
					<h4 className="m-0 uppercase font-bold">Office hours</h4>
					<EditableFieldList
						listData={instructorDetails.officeHours}
						handleUpdate={setUpdatedInstructorProfile}
						mutableData={instructorDetails}
						persistentData={immutableInstructorDetails}
						isEditing={isEditMode}
						inputDetails={{
							type: 'text',
							placeholder: null,
							name: 'officeHours',
							label: null,
						}}
					/>
				</div>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Biography</h4>
				<EditableField
					type={'area'}
					inputDetails={{
						placeholder: 'Write something about yourself...',
						defaultValue: immutableInstructorDetails.background,
						name: 'background',
						className:
							'border-royalblue focus:border-royalblue rounded-none font-normal',
						handle: (e) => {
							setUpdatedInstructorProfile((prevState) => ({
								...prevState,
								background: e.target.value,
							}))
						},
					}}
					header={immutableInstructorDetails.background}
					isEditing={isEditMode}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Contact Policy</h4>
				<EditableField
					type={'area'}
					inputDetails={{
						defaultValue: immutableInstructorDetails.contactPolicy,
						name: 'contactPolicy',
						className:
							'border-royalblue focus:border-royalblue rounded-none font-normal',
						handle: (e) => {
							setUpdatedInstructorProfile((prevState) => ({
								...prevState,
								contactPolicy: e.target.value,
							}))
						},
					}}
					header={immutableInstructorDetails.contactPolicy}
					isEditing={isEditMode}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Research Interests</h4>
				<EditableFieldList
					listData={instructorDetails.researchInterest}
					handleUpdate={setUpdatedInstructorProfile}
					mutableData={instructorDetails}
					persistentData={immutableInstructorDetails}
					isEditing={isEditMode}
					inputDetails={{
						type: 'text',
						placeholder: null,
						name: 'researchInterest',
						label: null,
					}}
				/>
			</div>
			<div className="w-full my-4">
				<h4 className="m-0 uppercase font-bold">Publications</h4>
				<EditableFieldList
					listData={instructorDetails.selectedPapersAndPublications}
					handleUpdate={setUpdatedInstructorProfile}
					mutableData={instructorDetails}
					persistentData={immutableInstructorDetails}
					isEditing={isEditMode}
					inputDetails={{
						type: 'text',
						placeholder: null,
						name: 'selectedPapersAndPublications',
						label: null,
					}}
				/>
			</div>
		</div>
	)
}

export default InstructorContent
