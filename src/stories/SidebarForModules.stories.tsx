import { SidebarForModules } from '../components/Sidebar/SidebarForModules'
import * as React from 'react'


export default {
	title: 'Molecules/SidebarForModules',
	component: SidebarForModules
}

const Template = (args) => <SidebarForModules {...args}/>

export const Primary = Template.bind({})
Primary.args={
    topics : [
		{
			
			lessons:[
				{
					label: "Module1",
					url:"lesonlink/module-1",
					checked: true
				},
				{
					label: "Module2",
					url:"lessonlink/module-2"
				},
				{
					label: "Module3",
					url:"lessonlink/module-3"
				}
	
			]
		},
		{	
			lessons:[
				{
					label: "Module1",
					url:"lesonlink/module-1",
					checked: true
				},
				{
					label: "Module2",
					url:"lessonlink/module-2",
					checked: true
				},
				{
					label: "Module3",
					url:"lessonlink/module-3"
				}
	
			]
		},
		{
			lessons:[
				{
					label: "Module1",
					url:"lesonlink/module-1",
					//checked: true
				},
				{
					label: "Module2",
					url:"lessonlink/module-2"
				},
				{
					label: "Module3",
					url:"lessonlink/module-3"
				}
	
			]
		}
    ]
}
