import * as React from 'react'

export const ModuleCard = ({
	module,
	completion,
}: ModuleProps): JSX.Element => {
	return (
		<div className="flex flex-col lg:flex-row md:items-stretch gap-4 border-gray bg-gray-100 drop-shadow-md border border-solid rounded">
			<div
				className={`flex w-full lg:w-4 p-2 lg:p-0 ${
					completion
						? `bg-green-400`
						: module.percentage > 25
						? `bg-blue-300`
						: `bg-red-400`
				}`}
			></div>
			<div className="flex grow flex-col lg:flex-row md:gap-10">
				<div className="grow flex flex-col justify-between m-1">
					<div className="flex text-gray-500 lg:text-base text-sm">{`${module.courseName} - ${module.moduleIdentifiers}`}</div>
					<div className="flex lg:pb-4 font-bold text-base xl:text-lg">
						{module.moduleName}
					</div>
					<div className="flex flex-row text-sm justify-between">
						<p className="underline text-sm text-gray-400">Forum</p>
						<p className="underline text-sm text-gray-400">
							Assignment
						</p>
						<p className="underline text-sm text-gray-400">
							Download
						</p>
						{completion ? (
							``
						) : (
							<p className="underline text-sm text-red-500">
								Abandon
							</p>
						)}
					</div>
				</div>

				<div className="flex-none flex flex-col items-center">
					<div className="completionPercentage">
						<p className="lg:mt-5">
							{module.percentage + `%`} Viewed
						</p>
					</div>

					<svg className="completionStatus w-20 h-20">
						<circle
							className="text-gray-300"
							strokeWidth="5"
							stroke="currentColor"
							fill="transparent"
							r="30"
							cx="40"
							cy="40"
						/>
						<circle
							className="text-blue-600"
							strokeWidth="5"
							strokeDasharray="10"
							strokeDashoffset={`${
								100 - (module.percentage / 100) * 10
							}`}
							strokeLinecap="round"
							stroke="currentColor"
							fill="transparent"
							r="30"
							cx="40"
							cy="40"
						/>
					</svg>

					<div className="">
						{completion ? (
							<div className="flex flex-col items-center">
								<p className="">
									{`Average time: ${module.averageTime} ${
										module.averageTime === 1
											? `minute`
											: `minutes`
									}`}
								</p>
								<p>{`Your time: ${module.userTime} ${
									module.userTime === 1 ? `minute` : `minutes`
								}`}</p>
							</div>
						) : (
							<p className="">
								{`Approximately ${module.duration} ${
									module.duration === 1 ? `minute` : `minutes`
								} left `}
							</p>
						)}
					</div>
				</div>

				<div className="flex-none flex flex-col items-center justify-center ">
					{completion ? (
						<div className="flex items-center justify-center px-2">
							<p className="md:"></p>
							<p className="text-white bg-blue-300 px-20 py-1 w-full my-1">
								Continue
							</p>
						</div>
					) : (
						<div className="flex flex-col w-full h-50 items-center justify-center gap-3 lg:items-center">
							<div className="text-gray-400 text-sm">
								Current Topic
							</div>
							<div className="font-medium text-sm pr-2">
								{module.currentTopic}
							</div>
							<div className="flex flex-col w-full px-3">
								<div className="py-1">
									<button className="text-white bg-blue-300 px-24 py-1 w-full">
										<span className="flex items-center justify-center">
											{module.returnIdPage}
										</span>
									</button>
								</div>
								{/* Link to returnIdPage */}
								<div>
									<button className="text-white bg-orange-400 px-24 py-1 w-full mb-2">
										<span className="flex items-center justify-center">
											{module.treeView}
										</span>
									</button>
								</div>
								{/* Link to treeView */}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
type ModuleObject = {
	courseName: string
	moduleIdentifiers: string
	moduleName: string
	percentage: number
	duration?: number
	averageTime?: number
	userTime?: number
	currentTopic?: string
	returnIdPage: string
	treeView?: string
}

export type ModuleProps = {
	module: ModuleObject
	completion: boolean
}
