import { useEffect, useState } from 'react'

const useAuth = () => {
	const [isAuthorized, setAuthorized] = useState(false)
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [jwt, setJWT] = useState(null)

	useEffect(() => {
		const handle = async () => {
			const token = window.localStorage.getItem('auth')
			if (token === null) {
				setAuthorized(false)
				setUser(null)
				setLoading(false)
				return
			}

			const response = await fetch(`/api/auth/check?token=${token}`)
			if (!response.ok) {
				setAuthorized(false)
				setUser(null)
				setLoading(false)
				return
			}

			const body = await response.json()
			setAuthorized(true)
			setUser(body)
			setLoading(false)
			setJWT(token)
		}

		handle()
	}, [])

	return {
		isAuthorized,
		user,
		loading,
		jwt,
	}
}

export default useAuth
