import React from 'react'
import { useState, useEffect } from 'react'
import getPlanByStudentID from '../../utils/getPlanByStudentID'
import ModuleItem from '../../components/ModuleListItem'

const ModulesPage = ({ plan }) => {
	const [loading, setLoading] = useState(true)
	const [pos, setPoS] = useState(null)

	useEffect(() => {
		if (plan) {
			setPoS(plan)
			setLoading(false)
		}
	}, [])

	// TODO: figure out how to filter modules by course
	const filterModules = (event) => {
		event.preventDefault()
		try {
			const filteredModules = pos.modules.filter((moduleEnrollment) => {
				moduleEnrollment.module.parentCourses.map(
					(item) => item.course.id === event.target.value
				)
			})
			console.log(filteredModules)
		} catch (error) {
			console.error(error)
			return null
		}
	}

	return loading ? (
		// Replace this with a loading component
		<h1>Loading...</h1>
	) : (
		<section className="gap-1 md:px-10 w-full flex flex-col md:flex-row">
			<ModuleItem title="My Modules" modules={pos.modules} loading={loading} />
			<aside className="w-full md:w-2/12 pl-4 overflow-x-scroll">
				<ul className="flex md:flex-col">
					<p className="border-b border-gray-200 mt-1 font-semibold">Status</p>
					<li className="bg-gray-200 rounded-full my-2 px-2">All</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">Overdue</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">Completed</li>
					<p className="border-b border-gray-200 mt-1 font-semibold">
						Parent Courses
					</p>
					{pos &&
						pos.courses.map((courseEnrollment) => (
							<button
								className="bg-gray-200 rounded-full my-2 px-2 cursor-pointer block text-left w-full"
								value={courseEnrollment.course.id.toString()}
								onClick={(e) => filterModules(e)}
								key={courseEnrollment.course.id}
							>
								{courseEnrollment.course.name}
							</button>
						))}
					<p className="border-b border-gray-200 mt-1 font-semibold">
						Delivery Type
					</p>
					<li className="bg-gray-200 rounded-full my-2 px-2">
						Asynchronous Media
					</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">Hands On</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">
						Writing Intensive
					</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">Presentation</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">Activity</li>
					<li className="bg-gray-200 rounded-full my-2 px-2">
						Multiple Choice
					</li>
					<p className="border-b border-gray-200 mt-1 font-semibold">Legend</p>
					<li>Completed</li>
					<li>Overdue</li>
					<li>Available</li>
				</ul>
			</aside>
		</section>
	)
}

export default ModulesPage

export async function getServerSideProps() {
	try {
		//TODO: Change this to the logged in user's ID
		const plan = await getPlanByStudentID('621faf87751282e60aa06d11')

		return {
			props: {
				plan,
			},
		}
	} catch (error) {
		throw new Error(error)
	}
}
