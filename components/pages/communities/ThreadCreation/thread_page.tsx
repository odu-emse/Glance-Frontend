
import { Button } from '@/components/common/button/button'
import { TextArea } from '@/components/common/forms/inputs/text_area/text_area'
import * as React from 'react'

export const ThreadCreation: React.FC<ThreadCreationProps> = ({

}): React.ReactElement => {
	
	return (
		<div>
            <h1 className="mb-6">Create Thread
            </h1>
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
            placeholder="what do you know about EMSE"
            />
            </div>
            <div className="my-7">
            <h3
            className='mb-0'
            style={{
                fontWeight: 400,
                fontSize: '20px',
            }}
            >
                Tags
            </h3>
            <label className="sans"
             style={{
                fontSize: '12px',
                fontWeight: 400,
            }}
            >Add up to 5 tags to describe what your thread is about.</label>
            <input
            type="text"
            className="block min-h-[auto] w-full rounded border border-gray-200 "
            id="searchRequirements"
            placeholder="Type your tag here..."
            />
            </div>

            <TextArea
				className="w-full bg-white placeholder:italic border border-gray-100 rounded-sm py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="Write your thread's content here..."
				value=""
				rows={4}
			/>
            
            <div className="grid justify-items-end">
            <Button
            className="my-7"
            >
            Publish
            </Button>
            </div>
        </div>

	)
}

export type ThreadCreationProps = {
	
}

