import * as React from 'react'
import { Select } from 'components/common/forms/inputs/select/select'

export const Lessonpage: React.FC<lessonpageProps> = ({
	lessonName,
	sectionNumber,
}): React.ReactElement => {
	return (
		<>
			<div>
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
					{' '}
					Section {sectionNumber} : {lessonName}{' '}
				</h2>
			</div>
			<div>
				<Select
					handle={() => {}}
					id="sort-input"
					label="Content Type"
					name="sort"
					options={[
						{
							label: 'Quiz',
							value: 'quiz',
						},
						{
							label: 'Pdf',
							value: 'pdf',
						},
						{
							label: 'Video',
							value: 'video',
						},
					]}
					size={1}
				/>
			</div>
			{/* <div className='content-area'>
					Content Area Component
		 </div> */}
		</>
	)
}

export type lessonpageProps = {
	/**
	 * A descriptive label for the title
	 */
	 lessonName: string,
	 /**
	  * A descriptive section number for the title
	  */
	 sectionNumber: number,
}
