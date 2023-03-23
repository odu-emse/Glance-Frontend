import React from 'react'
import { useDropzone } from 'react-dropzone'

export const ContentArea: React.FC<
	ContentAreaProps
> = ({}): React.ReactElement => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

	const files = acceptedFiles.map((file: File & { path: string }) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	))
	return (
		<section className="container">
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<div className="flex items-center justify-center w-auto">
					<label
						htmlFor="dropzone-file"
						className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
					>
						<div className="flex flex-col items-center justify-center pt-5 pb-6">
							<svg
								aria-hidden="true"
								className="w-full h-full mb-3 text-gray-400"
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
							<p className="mb-2 text-xl text-gray-500 dark:text-gray-400">
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
	)
}

export type ContentAreaProps = {
	/**
	 * useDropzone hook just binds the necessary handlers to create a drag 'n' drop zone
	 */
	useDropzone: string
	/**
	 * the getRootProps() fn to get the props required for drag 'n' drop and use them on any element.
	 */
	getRootProps: Function
	/**
	 *  the getInputProps() fn is used for click and keydown behavior
	 */
	getInputProps: Function
	/**
	 *  the acceptedFiles() fn is used for track and map the uploaded files to the list
	 */
	acceptedFiles: Function
}
