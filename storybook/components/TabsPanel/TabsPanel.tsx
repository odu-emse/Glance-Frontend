import * as React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export const TabsPanel = ({ moduleInfo }: TabsProps): JSX.Element => {

	const [index, setIndex] = React.useState(0)

	const padTopList = 'pt-1.5'
	const text = 'text-slate-500 hover:text-slate-800'

	return (
		<div className='flex shadow-md p-4 text-slate-600 text-sm w-full'>
			<div id='side-modules' className='w-1/4 pt-3 self-start'>
				<ul>
					{moduleInfo.map((mod, modIndex) => (
							<li onClick={() => setIndex(modIndex)}
								className={`${text} ${index === modIndex ? 'before:w-7 before:bg-slate-600 text-slate-800' : ''} before:w-5 before:hidden md:before:block before:bg-slate-500 before:h-1 before:mr-2 flex items-center pt-1 cursor-pointer`}
								key={modIndex}>
								{mod.title}
							</li>
						)
					)}
				</ul>
			</div>

			<div id='content' className='w-3/4 flex flex-col'>
				<div className='flex flex-row justify-between'>
					<div className='flex-[3] '>
						<p>Type</p>
						<hr />
					</div>

					<div className='flex-1'>
						<p>Average</p>
						<hr />
					</div>

					<div className='flex-1 '>
						<p>Action</p>
						<hr />
					</div>
				</div>

				<div>
					<div id='assignment-type'>
						<ul className='pt-1'>
							{moduleInfo[index].assignment.map((value, valueIndex) => (
									<li className={padTopList} key={valueIndex}>
										<div className='flex flex-row justify-between'>
											<div className='flex-[3]'>
												<span>{value.type}</span>
											</div>
											<div className='flex-1'>
												<span>{value.average}%</span>
											</div>
											<div className='flex-1'>
												<span><button
													className={`${padTopList} ${text}`}><BsBoxArrowUpRight /></button></span>
											</div>
										</div>
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export type TabsProps = {
	moduleInfo: ModuleInfo[]
}

export type ModuleInfo = {
	title: string
	assignment: AssignmentPropType[]
}

export type AssignmentPropType = {
	type: string
	average: number
}

