import * as React from 'react'
import { Select } from 'components/common/forms/inputs/select/select'
import { content_area } from 'components/common/admin_panel/content_area'
export type lessonpageProps = {}
export const Lessonpage: React.FC<
	lessonpageProps
> = ({}): React.ReactElement => {
	return (
		<>
			<>
				<div>
					{' '}
					<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
						Title{' '}
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
			</>
			<>
				{' '}
				<section className="container">
					<div {...getRootProps({ className: 'dropzone' })}>
						<input {...getInputProps()} />
						<div className="flex items-center justify-center w-auto">
							<label
								for="dropzone-file"
								class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										aria-hidden="true"
										className="w-10 h-10 mb-3 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										></path>
									</svg>
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold">
											Click to upload
										</span>{' '}
										or drag and drop
									</p>
								</div>
								<input
									id="dropzone-file"
									type="file"
									className="hidden"
								/>
							</label>
						</div>
					</div>
					<aside>
						<h4>Uploaded Files:</h4>
						<ul>{files}</ul>
					</aside>
				</section>
			</>
		</>
	)
}
