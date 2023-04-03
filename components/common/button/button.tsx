import * as PropTypes from 'prop-types'
import * as React from 'react'
import Loader from '../../util/loader'

export const Button = ({
	variant = 'primary',
	shape = 'regular',
	loading,
	size,
	children,
	disabled,
	type,
	className,
	onClick,
	...props
}: ButtonProps) => {
	const classes = [
		'flex flex-row items-center justify-center gap-1',
		'px-[1em] py-[0.5em]',
		'font-bold',
		className,
		size === 1 && 'w-full',

		shape === 'regular' && 'rounded',
		shape === 'pill' && 'rounded-full',

		size === 'small' && 'text-sm',
		size === 'large' && 'text-lg',

		disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',

		variant === 'primary' &&
			'shadow bg-royalblue text-white hover:bg-blue-600',
		variant === 'secondary' &&
			'shadow bg-wgray text-gray-700 hover:bg-gray-200',
		variant === 'transparent' && 'bg-transparent text-black',
		variant === 'white' &&
			'shadow bg-white text-midnight hover:bg-gray-100',
	].join(' ')

	return (
		<button
			type={type}
			disabled={disabled}
			className={classes}
			onClick={onClick}
			style={{
				fontFamily: 'Montserrat',
				textTransform: 'uppercase',
				fontWeight: 'bold',
			}}
			{...props}
		>
			{loading ? (
				<Loader
					textColor={`${
						variant === 'primary' ? 'blue-700' : 'blue-200'
					}`}
				/>
			) : null}
			{children}
		</button>
	)
}

type ButtonProps = {
	/**
	 * A boolean that determines whether the button is the principal call/action on the page
	 */
	variant?: 'primary' | 'secondary' | 'transparent' | 'white'
	/**
	 * An enum that determines the shape of the button
	 */
	shape?: 'regular' | 'pill'
	/**
	 * A boolean that determines whether the button is representing a loading state
	 */
	loading?: boolean
	/**
	 * An enum that defines the button's size
	 */
	size?: 'small' | 'base' | 'large' | 1
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
	variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
	/**
	 * Is this the principal call to action on the page?
	 */
	shape: PropTypes.oneOf(['regular', 'pill']),
	/**
	 * Is the button representing a loading state?
	 */
	loading: PropTypes.bool,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'base', 'large', 1]),
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
	type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
	/**
	 *  Indicates the className - based on selection of a property named 'size', className is atlered
	 */
	className: PropTypes.string,
}

Button.defaultProps = {
	variant: 'primary',
	shape: 'regular',
	loading: false,
	size: 'base',
	onClick: undefined,
	children: <p>Click Here</p>,
	disabled: false,
	type: 'button',
}
