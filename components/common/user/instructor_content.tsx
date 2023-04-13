import React, { useState } from 'react';
import { Input } from '@/common/forms/inputs/input/input';
import { TextArea } from '@/common/forms/inputs/text_area/text_area';
import { InstructorProfile, User } from '@/types/index';

interface StudentContentProps {
	user: User;
	isEditMode: boolean;
	setUpdatedProfile: React.Dispatch<React.SetStateAction<User | null>>;
	instructorDetails: InstructorProfile;
}

function InstructorContent({
														 user,
														 isEditMode,
														 setUpdatedProfile,
														 instructorDetails,
													 }: StudentContentProps) {
	const [instructorDetail, setInstructorDetail] = useState({...instructorDetails});
	return (
		<div className='mx-10 w-full'>
			<div className='grid grid-cols-2 grid-rows-2 gap-4'>
				<div className='col-span-1 row-span-1'>
					<h4 className='m-0 uppercase font-bold'>
						Contact Information:
					</h4>
					{!isEditMode ? (
						<>
							<h4 className='uppercase my-1'>{user.email}</h4>
							<h4 className='my-1'>{user?.phoneNumber}</h4>
						</>
					) : (
						<>
							<Input label={null} name={'email'} onChange={null} type={'email'} defaultValue={user.email} />
							<Input label={null} name={'phoneNumber'} onChange={null} type={'text'} defaultValue={user.phoneNumber} />
						</>
					)}
				</div>
				<div className='col-span-1 row-span-1'>
					<h4 className='m-0 uppercase font-bold'>
						Socials
					</h4>
					{!isEditMode ? (
						<>
							<h4 className='uppercase my-1'>{user?.social?.twitter}</h4>
							<h4 className='my-1'>{user?.social?.facebook}</h4>
							<h4 className='my-1'>{user?.social?.linkedin}</h4>
							<h4 className='my-1'>{user?.social?.github}</h4>
							<h4 className='my-1'>{user?.social?.portfolio}</h4>
						</>) : (
						<div className='flex flex-col gap-2 mt-2'>
							<Input
								type='url'
								placeholder='GITHUB:'
								defaultValue={user.social?.github}
								label={'GITHUB:'}
								name={'github'}
								onChange={(e: string) => {
									setUpdatedProfile((prevState) => ({
										...prevState,
										social: {
											...prevState?.social,
											github: e,
										},
									}));
								}}
								className='border-royalblue focus:border-royalblue border px-1 my-1 bg-white'
							/>
							<Input
								type='text'
								placeholder='TWITTER:'
								defaultValue={user.social?.twitter}
								label='TWITTER:'
								name={'twitter'}
								onChange={(e: string) => {
									setUpdatedProfile((prevState) => ({
										...prevState,
										social: {
											...prevState?.social,
											twitter: e,
										},
									}));
								}}
								className='border-royalblue focus:border-royalblue border px-1 my-1 bg-white'
							/>
							<Input
								type='url'
								placeholder='LINKEDIN:'
								defaultValue={user.social?.linkedin}
								label='LINKEDIN:'
								name={'linkedin'}
								onChange={(e: string) => {
									setUpdatedProfile((prevState) => ({
										...prevState,
										social: {
											...prevState?.social,
											linkedin: e,
										},
									}));
								}}
								className='border-royalblue focus:border-royalblue border px-1 my-1 bg-white'
							/>
							<Input
								type='text'
								placeholder='FACEBOOK:'
								defaultValue={user.social?.facebook}
								label='FACEBOOK:'
								name={'facebook'}
								onChange={(e: string) => {
									setUpdatedProfile((prevState) => ({
										...prevState,
										social: {
											...prevState?.social,
											facebook: e,
										},
									}));
								}}
								className='border-royalblue focus:border-royalblue border px-1 my-1 bg-white'
							/>
							<Input
								type='url'
								placeholder='PORTFOLIO:'
								defaultValue={user.social?.portfolio}
								label='PORTFOLIO:'
								name={'portfolio'}
								onChange={(e: string) => {
									setUpdatedProfile((prevState) => ({
										...prevState,
										social: {
											...prevState?.social,
											portfolio: e,
										},
									}));
								}}
								className='border-royalblue focus:border-royalblue border px-1 my-1 bg-white'
							/>

						</div>
					)}
				</div>
				<div className='col-span-1 row-span-1'>
					<h4 className='m-0 uppercase font-bold'>
						Office location
					</h4>
					{!isEditMode ? (
						<>
							<h4 className='uppercase my-1'>{instructorDetails.officeLocation}</h4>
						</>
					) : (
						<>
							<Input label={null} name={'officeLocation'} onChange={null} type={'text'} defaultValue={instructorDetails.officeLocation} />
						</>
					)}
				</div>
				<div className='col-span-1 row-span-1'>
					<h4 className='m-0 uppercase font-bold'>
						Office hours
					</h4>
					{!isEditMode ? (
						<>
							<h4 className='uppercase my-1'>{instructorDetails.officeHours}</h4>
						</>
					) : (
						<>
							<Input label={null} name={'officeHours'} onChange={null} type={'text'} defaultValue={instructorDetails.officeHours} />
						</>
					)}
				</div>
			</div>
			<div className="w-full my-4">
				<h4 className='m-0 uppercase font-bold'>
					Biography
				</h4>
				{!isEditMode ? (
					<>
						<h4 className='uppercase my-1'>{instructorDetails.background}</h4>
					</>
				) : (
					<>
					<TextArea label={null} name={'background'} handle={null} defaultValue={instructorDetails.background} />
					</>
				)}
			</div>
			<div className="w-full my-4">
				<h4 className='m-0 uppercase font-bold'>
					Contact Policy
				</h4>
				{!isEditMode ? (
					<>
						<h4 className='uppercase my-1'>{instructorDetails.contactPolicy}</h4>
					</>
				) : (
					<>
					<TextArea label={null} name={'contactPolicy'} handle={null} defaultValue={instructorDetails.contactPolicy} />
					</>
				)}
			</div>
			<div className="w-full my-4">
				<h4 className='m-0 uppercase font-bold'>
					Research Interests
				</h4>
				{!isEditMode ? (
					<>
						<h4 className='uppercase my-1'>{instructorDetails.researchInterest}</h4>
					</>
				) : (
					<>
					<TextArea label={null} name={'researchInterest'} handle={null} defaultValue={instructorDetails.researchInterest} />
					</>
				)}
			</div>
			<div className="w-full my-4">
				<h4 className='m-0 uppercase font-bold'>
					Publications
				</h4>
				{!isEditMode ? (
					<ul className="ml-0 list-none m-0">
						{instructorDetails.selectedPapersAndPublications?.map((publication, index) => (
						<li key={index} className='sans my-1'>{publication}</li>
						))}
					</ul>
				) : (
					<div>
						{instructorDetails.selectedPapersAndPublications?.map((publication, index) => (
							<div key={index} className='flex justify-between'>
								<Input label={null} name={'publication'} onChange={null} type={'text'} defaultValue={publication} />
								<button className='bg-red-500 text-white px-2 py-1 rounded-md' onClick={() => {
const newPublications = instructorDetails.selectedPapersAndPublications?.filter((pub, i) => i !== index)
									setInstructorDetail((prevState) => ({
										...prevState,
										selectedPapersAndPublications: newPublications
									}))
								}}
								>X</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default InstructorContent;