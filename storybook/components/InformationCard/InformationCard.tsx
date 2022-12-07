import * as React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { BsFillExclamationOctagonFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { BsFillClockFill, BsFillBellFill } from 'react-icons/bs'

export const InformationCard = ({
	percentComplete,
	statusMessage,
	testType,
	testModule,
	moduleIdentifier,
	dueDate,
	grade,
	percentage,
	handle,
}: InformationProps): JSX.Element => {
	return (
		<div className="border-solid border-gray rounded shadow-lg border flex justify-between w-2/5">
			{percentComplete && (
				<>
					<div className="flex justify-start items-center px-2" id ='Default'>
						<div className="checkIcon">
							<FaRegCheckCircle fill="green" size={30} />
						</div>
						<div className="modueleInformation px-2">
							<p className="mx-2 my-2 text-l">{statusMessage}</p>
							<p className="mx-2 my-2 text-gray-400 inline-block text-xs">
								{percentComplete}
							</p>
						</div>
					</div>
					<div className="closeIcons flex gap-2 justify-items-end my-10 mx-2">
						<BsFillExclamationOctagonFill
							size={28}
							fill="gray"
							onClick={handle}
						/>
						<MdClose fill="gray" size={30} onClick={handle} />
					</div>
				</>
			)}

			{testType && (
				<>
					<div className="m-3 flex items-center">
						<div className="testInformation" id ='primary'>
							<p>
								{testType} : {testModule}
							</p>
							<p className="mx-2 my-2 text-gray-500 inline-block text-xs uppercase font-semibold">
								{moduleIdentifier}
							</p>
							<div className="flex gap-1 items-center">
								<BsFillClockFill size="12px" />
								<p>Opens in {dueDate}</p>
							</div>
						</div>
					</div>
					<div className="notificationIcon grid justify-items-end my-10 mx-3">
						<BsFillBellFill size={30} onClick={handle} />
					</div>
				</>
			)}
			{grade && (
				<>
					<div className="m-3 flex flex-col">
						<div className="module text-xl font-medium" id='secondary'>
							{moduleIdentifier}{' '}
						</div>
						<div className="flex justify-start items-center text-gray-600 inline-block text-sm">
							{percentage}% passing rate{' '}
						</div>
						<div className="flex gap-1 items-center text-gray-500 inline-block text-xs">
							Average Grade: {grade}{' '}
						</div>
					</div>
					<div
						className="moreOptions grid justify-items-end m-2 text-gray-500 inline-block text-sm"
						onClick={handle}
					>
						more
					</div>
				</>
			)}
		</div>
	)
}

export type InformationProps = {
	percentComplete: string
	/**
	 * String that shows up the percentage complete on Default Card
	 */
	statusMessage: string
	/**
	 * String that shows up the status message on Default Card
	 */
	testType: string
	/**
	 * String that shows up the test type on Primary Card
	 */
	testModule: string
	/**
	 * String that shows up the type of TestModule on Primary Card
	 */
	dueDate: string
	/**
	 * String that shows up the dueDate
	 */
	moduleIdentifier: string
	/**
	 * String that shows up the Module Identifier
	 */
	grade: string
	/**
	 * String that shows up the grade
	 */
	percentage: string
	/**
	 * String that shows up the percentage in the Secondary Card
	 */
	handle: () => void
	/**
	 * A function placeholder to differentiate the onclick functionality
	 * based on the usage for different icons.
	 */
}
