import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'
import * as React from 'react'
import { Content } from '../components/Content'

export default {
	title: 'Organisms/Layout',
	component: Layout,
	argTypes: {
		authenticated: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
	},
}

const Template = (args: { authenticated: boolean }) => {
	return (
			<Layout>
				<Sidebar authenticated={args.authenticated} />
				<Content>
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
				</Content>
			</Layout>
	)
}

export const Primary = Template.bind({})
