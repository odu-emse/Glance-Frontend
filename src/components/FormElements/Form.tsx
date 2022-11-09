import * as React from 'react'
import { Button } from '../Button'

export const Form = ({
	children,
	allowPrevious = false,
	previousLabel = '',
	proceedLabel = '',
}: FormProps) => {
	return (
		<form className="">
			{children}
			<div className="flex justify-between items-center">
				{allowPrevious && (
					<Button
						label={previousLabel}
						type="reset"
						primary={false}
					/>
				)}
				<Button label={proceedLabel} type="submit" primary />
			</div>
		</form>
	)
}

export type FormProps = {
	children: React.ReactNode | React.ReactNode[]
	/**
	 * A boolean that decides weather to show or hide a reset button.
	 */
	allowPrevious: boolean
	/**
	 * A descriptive label for the previous / back button.
	 */
	previousLabel?: string
	/**
	 * A descriptive label for the submit / next button.
	 */
	proceedLabel: string
}
