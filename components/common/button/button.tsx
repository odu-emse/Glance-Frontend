import { Button as InstructureButton } from '@instructure/ui'
import * as PropTypes from 'prop-types'
import * as React from 'react'

export const Button = ({
	variant = 'primary',	
	size = 'medium',
	disabled = false,
	children,
	onClick,
}: ButtonProps) => {

	return (
		<InstructureButton 
			color={variant}
			disabled={disabled}
			onClick={onClick}
			margin='small'
			size={size}
			themeOverride={{
				primaryBackground: '#204498',
				primaryHoverBackground: '#1b3a82',
				borderRadius: '2px'
			}}
		>
			{children}
		</InstructureButton>
	)
}

type ButtonProps = {
	/**
	 * A boolean that determines whether the button is the principal call/action on the page
	 */
	variant?: 'primary' | 'secondary'
	/**
	 * An enum that defines the button's size
	 */
	size: 'small' | 'medium' | 'large'
	/**
	 * An enum that defines the button's type
	 */
	type: 'button' | 'submit' | 'reset'
	/**
	 * The JSX contnet to be displayed within the button
	 */
	children: React.ReactNode | string | number
	/**
	 * A boolean that determines whether the button representing a disabled state
	 */
	disabled?: boolean
	/**
	 * A onclick event that executes a JavaScript's function when the button gets clicked
	 */
	onClick: () => void
	/**
	 *  Indicates the className - based on selection of a property named 'size', className is atlered
	 */
	className?: string
}

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	variant: PropTypes.oneOf(['primary', 'secondary']),
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Button contents
	 */
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
		PropTypes.number,
	]),
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
	/**
	 * Is the button disabled?
	 */
	disabled: PropTypes.bool,
	/**
	 * What type of button is this?
	 */
	//type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
}

Button.defaultProps = {
	variant: 'primary',
	size: 'medium',
	onClick: undefined,
	children: 'Click Here',
	disabled: false,
	type: 'button',
}
