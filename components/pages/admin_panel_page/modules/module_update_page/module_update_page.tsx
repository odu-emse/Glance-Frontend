import { ModuleRequirement } from '@/components/common/admin_panel/module_requirement_editor/module_requirement_editor'
import { Button } from '@/components/common/button/button'
import { useState } from 'react'
import { mutate } from "swr"

export const ModuleUpdate = ({ moduleDetails }: ModuleUpdateProps) => {
	console.log('details', moduleDetails)

	const [isEditMode, setEditMode] = useState(false)

    const runMutation = () => {
        mutate(async () => {
            fetch('http://localhost:4000/graphql', {
                method: "POST",
                body: JSON.stringify({
                    query: gql`
                        mutation DeleteModule($input: ID!){
                            deleteModule(id: $input ){
                                id
                            }
                        }
                    `,
                    variables: {
                        input: moduleID
                    }
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }, false)
    }


	return (
		<div>
			{moduleDetails.map((module, index) => (
				<div>
					<span
						className="text-royalblue font-bold text-3xl uppercase"
						key={index}
					>
						{module.moduleName}
					</span>

					<div className="flex flex-row items-center gap-3">
						<span className="text-royalblue text-3xl uppercase">
							{module.moduleNumber}
						</span>
						<span className="text-royalblue text-3xl uppercase">
							{module.moduleNumber}
						</span>
					</div>
				</div>
			))}

			<div className="flex flex-row items-center gap-2">
				<Button size="small">
					<p>Resume Module</p>
				</Button>
				<Button onClick={() => {setEditMode(!isEditMode)
                                          runMutation() }} size="small">
					<p>{isEditMode ? 'Save Changes' : 'Edit Page'}</p>
				</Button>
			</div>

			<div className="description mb-3">
				<span className="text-royalblue text-base font-bold">
					Description
				</span>
				{isEditMode ? (
					<textarea
						className="
                        form-control 
                        block 
                        w-1/2 
                        rounded
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						placeholder="Module INPUT"
					></textarea>
				) : (
					<div>
						{moduleDetails.map((module, index) => (
							<div>{module.description}</div>
						))}
					</div>
				)}
			</div>

			<div className="mb-3">
				<span className="text-royalblue text-base font-bold">
					Requirements
				</span>
				{isEditMode ? (
					<ModuleRequirement requirements={[]} />
				) : (
					<div>No prior requirements necessary</div>
				)}
			</div>

			<div>
				<span className="text-royalblue text-base font-bold">
					Objectives
				</span>
				{isEditMode ? (
					<textarea
						className="
                        form-control 
                        block 
                        rounded
                        text-base
                        font-normal
                        w-1/2
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        transition
                        ease-in-out
                    "
						placeholder="objectives"
					></textarea>
				) : (
					<ul className="my-0">
						{moduleDetails.map((module, index) =>
							module.objectives.map((objective: string) => (
								<li>{objective}</li>
							))
						)}
					</ul>
				)}
			</div>
		</div>
	)
}

export type ModuleUpdateProps = {
	moduleDetails: Array<any>
}
