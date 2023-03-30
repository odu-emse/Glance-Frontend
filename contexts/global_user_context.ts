/**
 * Global User Context
 * This context can be used to retrieve the current user without having to pass it down the component tree.
 */
import { createContext } from 'react'

const GlobalUserContext = createContext({
	user: null,
	setUser: (user) => {

	}
})

export default GlobalUserContext
