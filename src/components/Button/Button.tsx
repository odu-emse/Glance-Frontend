import * as PropTypes from 'prop-types'
import * as React from 'react'
import Loader from '../../util/Loader'

export const Button = ({
	variant = 'primary',
	shape = 'regular',
	loading,
	size,
	children,
	disabled,
	type,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={[
				'flex flex-row items-center justify-center gap-2',
				'focus:outline-dashed focus:outline-blue-500',
				'px-4 py-2',
				'font-medium',

				shape == 'regular' && 'rounded',
				shape == 'pill' && 'rounded-full',

				size == 'small' && 'text-sm',
				size == 'large' && 'text-lg',

				disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',

				variant == 'primary' &&
					'shadow bg-blue-700 text-white hover:bg-blue-600',
				variant == 'secondary' &&
					'shadow bg-gray-300 text-gray-700 hover:bg-gray-200',
				variant == 'transparent' && 'bg-transparent text-black',
			].join(' ')}
			{...props}
		>
			{loading ? (
				<Loader
					textColor={`${
						variant == 'primary' ? 'blue-700' : 'blue-200'
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
	variant?: 'primary' | 'secondary' | 'transparent'
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
	size?: 'small' | 'base' | 'large'
	/**
	 * An enum that defines the button's type
	 */
	type: 'button' | 'submit' | 'reset'
	/**
	 * The JSX contnet to be displayed within the button
	 */
	children: React.ReactNode
	/**
	 * A boolean that determines whether the button representing a disabled state
	 */
	disabled?: boolean
	/**
	 * A onclick event that executes a JavaScript's function when the button gets clicked
	 */
	onClick: () => void
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
	size: PropTypes.oneOf(['small', 'base', 'large']),
	/**
	 * Button contents
	 */
	children: PropTypes.element,
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
