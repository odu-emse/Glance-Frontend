import * as React from 'react'
import { Select } from 'components/common/forms/inputs/select/select'
import { ContentArea } from 'components/common/admin_panel/content_area'
import { Button } from 'components/common/button/button'

export const Lessonpage: React.FC<lessonpageProps> = ({
	lessonName,
	sectionNumber,
}): React.ReactElement => {
	return (
		<>
			<div>
				<p className=" text-xl font-bold leading-7 text-gray-900 sm:truncate  sm:tracking-tight">
					{' '}
					Section {sectionNumber} : {lessonName}{' '}
				</p>
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
			<div className="content-area">
				<ContentArea />
			</div>
			<div className="flex flex-row justify-end">
				<Button size="small" className="mx-2">
					<p>Confirm</p>
				</Button>

				<Button size="small" className="mx-2">
					<p>Cancel</p>
				</Button>
			</div>
		</>
	)
}

export type lessonpageProps = {
	/**
	 * A descriptive label for the title
	 */
	lessonName: string
	/**
	 * A descriptive section number for the title
	 */
	sectionNumber: number
}
