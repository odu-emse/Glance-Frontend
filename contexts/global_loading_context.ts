/**
 * Global Loading Context
 * This context can be used to determine if the global loading spinner should be displayed.
 */
import { createContext } from 'react'

const GlobalLoadingContext = createContext({
	isLoading: true,
	setLoading: (isLoading) => {},
})

export default GlobalLoadingContext
