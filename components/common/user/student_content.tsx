import React from 'react'
import Link from 'next/link'
import { User } from '@/types/index'
import EditableField from '@/common/user/editable_field'

interface StudentContentProps {
	user: User
	isEditMode: boolean
	setUpdatedProfile: React.Dispatch<React.SetStateAction<User | null>>
}

function StudentContent({
	user,
	isEditMode,
	setUpdatedProfile,
}: StudentContentProps) {
	return (
		<div className="mx-10">
			<div className="mb-3">
				<h4 className="m-0 uppercase font-bold">
					Contact Information:
				</h4>
				{!isEditMode ? (
					<>
						<h4 className="uppercase my-1">{user.email}</h4>
						<h4 className="my-1">{user?.phoneNumber}</h4>
					</>
				) : (
					<div className="flex flex-row items-center">
						<p className=" w-1/2 m-3">
							See <Link href={'/settings'}>Settings</Link> to
							change your preferred contact information.Check the
							contact methods you’d prefer to be visible to others
							on your profile.
						</p>
						<span className="flex-none m-5">
							<svg
								width="65"
								height="48"
								viewBox="0 0 65 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M27.7704 19.8607C26.6812 22.4232 26.1283 25.1435 26.1283 27.9462C26.1283 30.749 26.6812 33.4692 27.7704 36.0317C28.8227 38.5052 30.3278 40.7261 32.245 42.6328C32.5424 42.9286 32.8478 43.2147 33.1604 43.4909C30.1047 44.9813 26.668 45.8178 23.0345 45.8178C20.3895 45.8178 17.8438 45.3733 15.4726 44.5545L2.75887 47.926C1.79998 48.1807 0.789095 47.7631 0.293525 46.9076C-0.197438 46.0613 -0.061864 44.995 0.621931 44.2966C0.625221 44.2927 0.631803 44.2848 0.642333 44.2731C0.672607 44.239 0.730522 44.1709 0.810813 44.0662C0.971397 43.8574 1.22083 43.5033 1.5104 42.9856C2.08627 41.954 2.82995 40.2575 3.33342 37.7538C3.51506 36.8499 3.62957 36.0547 3.6967 35.3608C1.35838 31.7753 0 27.4972 0 22.9089C0 10.2566 10.3129 0 23.0345 0C30.1054 0 36.432 3.16863 40.6572 8.15556C40.0576 8.34603 39.466 8.564 38.8822 8.80945C36.3951 9.85606 34.1621 11.353 32.245 13.2597C30.3278 15.1663 28.8227 17.3872 27.7704 19.8607Z"
									fill="black"
								/>
								<path
									fillRule="evenodd"
									clip-rule="evenodd"
									d="M64.5143 44.6474C65.048 45.1927 65.154 46.0259 64.771 46.687C64.7512 46.7204 64.7308 46.7531 64.7098 46.7852C64.688 46.8166 64.6657 46.848 64.6426 46.8775C64.6189 46.9076 64.5952 46.937 64.5696 46.9652C64.5571 46.9789 64.5446 46.9927 64.5314 47.0064C64.5189 47.0201 64.5058 47.0339 64.4919 47.047C64.1721 47.3618 63.7384 47.5399 63.2869 47.5399C63.1401 47.5399 62.9921 47.5209 62.8453 47.4823L52.9168 44.849C51.0655 45.4885 49.0779 45.8361 47.0121 45.8361C42.7862 45.8361 38.9006 44.3869 35.8305 41.9606C31.6836 38.6833 29.0241 33.6237 29.0241 27.9462C29.0241 19.6218 34.7406 12.6254 42.4828 10.6284C43.93 10.2547 45.4477 10.0563 47.0121 10.0563C56.9465 10.0563 65 18.0659 65 27.9462C65 31.5292 63.9391 34.8699 62.1128 37.6701C62.1654 38.2114 62.2549 38.8325 62.3971 39.5381C62.79 41.4939 63.3705 42.818 63.8206 43.6244C64.0464 44.0283 64.2412 44.3051 64.3662 44.4681C64.4294 44.5499 64.4748 44.6029 64.4985 44.6298C64.5064 44.6383 64.5117 44.6448 64.5143 44.6474Z"
									fill="black"
								/>
							</svg>
						</span>
					</div>
				)}
			</div>

			<div className="SocialMedia mb-3">
				<h4 className="my-1 uppercase font-bold">Socials:</h4>
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

			<div className="mb-3">
				<h4 className="font-bold uppercase my-1">Biography</h4>
				<EditableField
					type={'area'}
					inputDetails={{
						placeholder: 'Write something about yourself...',
						defaultValue: user.biography || '',
						name: 'biography',
						className:
							'border-royalblue focus:border-royalblue rounded-none font-normal',
						handle: (e) => {
							setUpdatedProfile((prevState) => ({
								...prevState,
								biography: e.target.value,
							}))
						},
					}}
					isEditing={isEditMode}
				/>
			</div>
		</div>
	)
}

export default StudentContent
