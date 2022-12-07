import * as React from 'react'
import { Button } from '../Button'
export const ModuleCard = ({
	parentCourse,
	moduleName,
	moduleNumber,
	percentageCompleted,
	averageTime,
	userTime,
	duration,
	currentTopic,
	primaryLink,
	primaryLinkLabel,
	secondaryLink,
	secondaryLinkLabel,
	completion,
}: ModuleProps): JSX.Element => {
	return (
		<div className="moduleCard flex flex-col lg:flex-row md:items-stretch gap-4 border-gray bg-gray-100 drop-shadow-md border border-solid rounded">
			<div
				className={`statusColorCode flex w-full lg:w-4 p-2 lg:p-0 ${
					completion
						? `bg-green-400`
						: percentageCompleted > 25
						? `bg-blue-300`
						: `bg-red-400`
				}`}
			></div>
			<div className="flex grow flex-col lg:flex-row md:gap-10">
				<div className="grow flex flex-col justify-between m-1">
					<div className="flex text-gray-500 lg:text-base text-sm">{`${parentCourse} - ${moduleNumber}`}</div>
					<div className="flex lg:pb-4 font-bold text-base xl:text-lg">
						{moduleName}
					</div>
					<div className="flex flex-row text-sm justify-between">
						<p className="underline text-sm text-gray-700">Forum</p>
						<p className="underline text-sm text-gray-700">
							Assignment
						</p>
						<p className="underline text-sm text-gray-700">
							Download
						</p>
						{completion ? (
							``
						) : (
							<p className="underline text-sm text-red-700">
								Abandon
							</p>
						)}
					</div>
				</div>

				<div className="flex-none flex flex-col items-center">
					<div className="completionPercentage">
						<p className="lg:mt-5">
							{percentageCompleted + `%`} Viewed
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
								100 - (percentageCompleted / 100) * 10
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
									{`Average time: ${averageTime} ${
										averageTime === 1 ? `minute` : `minutes`
									}`}
								</p>
								<p>{`Your time: ${userTime} ${
									userTime === 1 ? `minute` : `minutes`
								}`}</p>
							</div>
						) : (
							<p className="">
								{`Approximately ${duration} ${
									duration === 1 ? `minute` : `minutes`
								} left `}
							</p>
						)}
					</div>
				</div>

				<div className="flex-none flex flex-col items-center justify-center ">
					{completion ? (
						<div className="moduleCompleted flex items-center justify-center px-2">
							<p className="md:"></p>
							<p className="text-white bg-blue-300 px-20 py-1 w-full my-1">
								Continue
							</p>
						</div>
					) : (
						<div className="moduleInProgress currentTopicStatus flex flex-col w-full h-50 items-center justify-center gap-3 lg:items-center">
							<div className="text-gray-600 text-sm">
								Current Topic
							</div>
							<div className="font-medium text-sm pr-2">
								{currentTopic}
							</div>
							<div className="flex flex-col w-full px-3">
								<div className="py-1">
									<Button
										loading={false}
										size="base"
										onClick={null || undefined}
										type="button"
										disabled={false}
										variant="primary"
									>
										<a
											href={primaryLink}
											className="flex items-center justify-center"
										>
											{primaryLinkLabel}
										</a>
									</Button>
								</div>
								{/* Link to returnIdPage */}
								<div>
									<Button
										loading={false}
										size="base"
										onClick={null || undefined}
										type="button"
										disabled={false}
										variant="secondary"
									>
										<a
											href={secondaryLink}
											className="flex items-center justify-center"
										>
											{secondaryLinkLabel}
										</a>
									</Button>{' '}
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

export type ModuleProps = {
	/**
	 * Boolean that determines if the course module is completed or not
	 * @type boolean
	 * @default false
	 */
	completion: boolean
	parentCourse: string
	moduleName: string
	moduleNumber: string
	percentageCompleted: number
	averageTime?: number
	userTime?: number
	duration?: number
	currentTopic: string
	primaryLink: string
	primaryLinkLabel: string
	secondaryLink: string
	secondaryLinkLabel: string
}
