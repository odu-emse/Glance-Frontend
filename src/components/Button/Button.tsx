import * as PropTypes from "prop-types"
import * as React from "react"
import Loader from "../../util/Loader"


export const Button = ({ primary, loading, size, label, disabled, ...props }:ButtonProps):JSX.Element => {
	const baseStyles = "rounded-md flex items-center"
	const variant:string = primary ? "bg-blue-700 text-white" : "bg-blue-200 text-black"
	let buttonSize : string
	if(size === "small") {
		buttonSize = "h-4 w-auto py-4 px-2"
	}
	else if(size === "large") {
		buttonSize = "h-12 w-auto py-8 px-10"
	}
	else if(size === "base") {
		buttonSize = "h-10 w-auto py-2 px-5"
	}

	return (
		<button
			type="button"
			disabled={disabled}
			className={[
				disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
				baseStyles, 
				buttonSize, 
				variant].join(" ")}
			{...props}
		>
			{loading? (
				<Loader textColor={`${primary ? "blue-700" : "blue-200"}`} />) : null}
			{label}
		</button>
	)
}

type ButtonProps = {
    primary?: boolean
    loading?: boolean
    size?: "small" | "base" | "large"
    label: string
	disabled?: boolean
    onClick: () => void
}

Button.propTypes = {
	/**
   * Is this the principal call to action on the page?
   */
	primary: PropTypes.bool,
	/**
   * Is the button representing a loading state?
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
