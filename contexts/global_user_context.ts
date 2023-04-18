/**
 * Global User Context
 * This context can be used to retrieve the current user without having to pass it down the component tree.
 */
import { createContext } from 'react'
import { UserAccount } from '@/common/community/threads/thread/thread'

const GlobalUserContext = createContext({
	user: null,
	setUser: (user) => {},
} as {
	user:
		| (Omit<UserAccount & { openID: string; biography?: string }, 'id'> & {
				id: string
				plan: {
					id: string
				}
		  })
		| null
	setUser: (
		user:
			| (Omit<
					UserAccount & { openID: string; biography?: string },
					'id'
			  > & { id: string })
			| null
	) => void
})

export default GlobalUserContext
