import { Layout } from './layout'
import * as React from 'react'
import { SessionProvider } from 'next-auth/react'

export default {
	title: 'Common/Pages/Layouts/Layout',
	component: Layout
}

const Template = () => {
	return (
		<SessionProvider>
			<Layout>
				<h1 className="border-blue-300 border-dashed border-4">
					Hello World
				</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Optio, ad. Quam molestiae porro unde illo, odit
					vero perspiciatis, saepe quos delectus totam esse harum
					nemo itaque blanditiis consequuntur placeat laboriosam!
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Optio, ad. Quam molestiae porro unde illo, odit
					vero perspiciatis, saepe quos delectus totam esse harum
					nemo itaque blanditiis consequuntur placeat laboriosam!
				</p>
			</Layout>
		</SessionProvider>
	)
}

export const Primary = Template.bind({})
