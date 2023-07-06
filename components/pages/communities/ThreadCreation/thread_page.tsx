import { useState } from 'react'
import { Button } from '@/components/common/button/button'
import { TextArea } from '@/components/common/forms/inputs/text_area/text_area'
import * as React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

export const ThreadCreation = () => {
	const [tags, setTags] = useState([])
	const [newTag, setNewTag] = useState('')

	function handleTagInput(event) {
		setNewTag(event.target.value)
	}

	function handleAddTag() {
		if (newTag.trim() !== '') {
			setTags([...tags, newTag.trim()])
			setNewTag('')
		}
	}

	function handleRemoveTag(removeTag) {
		setTags(tags.filter((tag) => tag !== removeTag))
	}

	return (
		<div>
			<h1 className="mb-6">Create Thread</h1>
			<div className="">
				<h3
					className="leading-4"
					style={{
						fontWeight: 400,
						fontSize: '20px',
					}}
				>
					Title
				</h3>
				<input
					type="text"
					className="block min-h-[auto] w-full rounded border border-gray-200 "
					id="searchRequirements"
					placeholder="E.G., What is Systems Engineering to you?"
				/>
			</div>
			<div className="my-7">
				<h3
					className="mb-0"
					style={{
						fontWeight: 400,
						fontSize: '20px',
					}}
				>
					Tags
				</h3>
				<label
					className="sans"
					style={{
						fontSize: '12px',
						fontWeight: 400,
					}}
				>
					Add up to 5 tags to describe what your thread is about.
				</label>
				<div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-sm">
					{tags.map((tag, index) => (
						<div
							key={index}
							className="bg-gray-300 px-2 py-1 rounded-md flex items-center"
						>
							<span className="mr-2 p-0 sans">{tag}</span>
							<span onClick={() => handleRemoveTag(tag)}>
								<MdOutlineCancel />
							</span>
						</div>
					))}
					<input
						type="text"
						placeholder="Add your tags here..."
						value={newTag}
						onChange={handleTagInput}
						className="flex-1 block min-h-[auto] w-full rounded-sm border border-gray-200"
					/>

					<Button label="Button" size="small" onClick={handleAddTag}>
						Add
					</Button>
				</div>
			</div>

			<TextArea
				className="w-full bg-white placeholder:italic border border-gray-100 rounded-sm py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="Write your thread's content here..."
				value=""
				rows={4}
			/>

			<div className="grid justify-items-end">
				<Button className="my-7">Publish</Button>
			</div>
		</div>
	)
}

export type ThreadCreationProps = {}
