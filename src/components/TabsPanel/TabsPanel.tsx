import * as React from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'

export const TabsPanel = ({
	moduleInfo
}: TabsProps): JSX.Element => {

	const [index, setIndex] = React.useState(0)

	const padTopList = "pt-1.5"
	const textTransform = 'transform transition duration-100 hover:scale-105 hover:text-slate-800'

	return (
        <div className="flex shadow-md p-4 text-slate-600 text-sm w-max">
			<div id="side-modules" className='pr-16 pt-3'>
				<ul>
					<button id='selectedBtn'>
						{moduleInfo.map((mod, modIndex) => (
						<li onClick={() => setIndex(modIndex)} className={`${textTransform} hover:translate-x-1 pt-1` } key={modIndex}>{mod.title}</li>
						)
					)}
					</button>
				</ul>
			</div>

			<div id="content" className="flex flex-col">
				<div className='flex flex-row justify-between'>
					<div className=''>
						<p>Type</p>
						<hr />
					</div>

					<div className='pl-12'>
						<p>Average</p>
						<hr />
					</div>

					<div className=''>
						<p>Action</p>
						<hr />
					</div>
				</div>
				
				<div>
					<div id="assignment-type">
							<ul className='pt-1'>
							{moduleInfo[index].assignment.map((value, valueIndex) => (
								<li className={padTopList} key={valueIndex}>
									<div className="flex flex-row justify-between">
										<div className='flex pr-20'>
											<span>{value.type}</span>
										</div>
										<div className='pr-20'>
											<span>{value.average}%</span>
										</div>
										<div className='pl-14 pr-6'>
											<span><button className={`${padTopList} ${textTransform}`}><BsBoxArrowUpRight/></button></span>
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

type TabsProps = {
	moduleInfo: ModuleInfo
}

