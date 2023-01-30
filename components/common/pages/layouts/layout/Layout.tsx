import { Sidebar } from '../../sidebar/sidebar'
import { GoPerson, GoSignIn } from 'react-icons/go'
import AuthenticationContext from '../../../../../contexts/AuthenticationContext'
import useAuth from '../../../../../hooks/useAuth'
import { Link } from '../../../links/link/link'
import { useState } from 'react'

export const Layout = ({ children }) => {
	const [open, setOpen] = useState(false)

	const { user, loading } = useAuth()
	if (loading) return <p>Loading...</p>

	return (
		<AuthenticationContext.Provider value={user}>
			<main className="flex gap-x-1">
				<Sidebar
					handleOpen={() => setOpen(!open)}
					open={open}
					authenticated={true}
					authChildren={
						<>
							<Link
								role={'anchor'}
								to={'/users/login'}
								icon={<GoSignIn size={30} />}
								label={'Login'}
								extended={open}
							/>
							<Link
								role="anchor"
								to="/users/register"
								icon={<GoPerson size={30} />}
								label="Register"
								extended={open}
							/>
						</>
					}
				>
					{undefined}
				</Sidebar>
				<section className="w-full">{children}</section>
			</main>
		</AuthenticationContext.Provider>
	)
}