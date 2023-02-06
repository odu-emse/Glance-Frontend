import React from 'react'
import { Button } from '@/common/button/button'
import { useGoogleLogin } from '@react-oauth/google'

export const Login = () => {
	const login = useGoogleLogin({
		onSuccess: async (codeResponse) => console.log(codeResponse),
		onError: (error) => console.log(error),
		flow: 'auth-code',
		hosted_domain: 'odu.edu',
		ux_mode: 'redirect',
		redirect_uri: 'http://localhost:3000/auth/redirect',
	})

	return (
		<div className="h-screen flex items-center">
			<div className="grid place-items-center h-1/4 w-full ">
				<div>
					<p className="text-7xl font-extrabold font-weight:2000 text-center text-black-3000">
						ALMP
					</p>
					<p className="text-black-400 font-semibold text-xl">
						You must be logged in to access this resource.
					</p>
				</div>

				<Button
					onClick={() => {
						console.debug('Clicked the login button.')
						login()
					}}
				>
					Login with Google
				</Button>
			</div>
		</div>
	)
}
