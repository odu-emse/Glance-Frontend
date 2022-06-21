import * as PropTypes from "prop-types"
import Loader from "../../util/Loader"

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, loading, size, label, ...props }:ButtonProps):JSX.Element => {
	const baseStyles = "rounded-md py-2 px-5 flex items-center"
	const variant = primary ? "bg-blue-700 text-white" : "bg-blue-200 text-black"

	return (
		<button
			type="button"
			className={[baseStyles, 
				size === "small" ? "h-4 w-auto" : null,
				size === "base" ? "h-10 w-auto" : null,
				size === "large" ? "h-12 w-auto" : null,
				, variant].join(" ")}
			{...props}
		>
			{loading? (
				<Loader textColor='black' />) : null}
			{label}
		</button>
	)
}

type ButtonProps = {
    primary?: boolean
    loading?: boolean
    size?: "small" | "base" | "large"
    label: string
    onClick: () => void
}

Button.propTypes = {
	/**
   * Is this the principal call to action on the page?
   */
	primary: PropTypes.bool,
	/**
   * What background color to use
   */
	loading: PropTypes.bool,
	/**
   * How large should the button be?
   */
	size: PropTypes.oneOf(["h-4 w-auto", "h-8 w-auto", "h-12 w-auto"]),
	/**
   * Button contents
   */
	label: PropTypes.string.isRequired,
	/**
   * Optional click handler
   */
	onClick: PropTypes.func,
}

Button.defaultProps = {
	primary: false,
	loading: false,
	size: "base",
	onClick: undefined,
}
