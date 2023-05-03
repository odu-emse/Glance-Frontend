import React from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import useSWR from 'swr'
import gql_fetcher from '@/utils/gql_fetcher'
import { gql } from 'graphql-request'
import { Path } from '@/types/index'
import Head from 'next/head'

function CreateLearningPathPage() {
	const [pathData, setPathData] = React.useState<Path | null>(null)
	const [checkedModules, setCheckedModules] = React.useState<
		Array<string> | []
	>([])
	const [checkedCollections, setCheckedCollections] = React.useState<
		Array<string> | []
	>([])
	const [checkedLessons, setCheckedLessons] = React.useState<
		Array<string> | []
	>([])
	const { data, error } = useSWR(
		{
			query: gql`
				query GetProgramContent {
					course(input: {}) {
						id
						name
						carnegieHours
						required
					}
					module(input: {}) {
						id
						moduleName
						moduleNumber
					}
					lesson(input: {}) {
						id
						name
						hours
						objectives
					}
					collection(input: {}) {
						id
						name
					}
				}
			`,
		},
		gql_fetcher
	)

	const courseGetter = (id: string) => {
		return data.course.find((course) => course.id === id)
	}

	return (
		<div>
			<Head>
        	<title>Create Learning Path | GLANCE</title>
      		</Head>
			<section className="stdcontainer">
				<h1>Create Learning Path</h1>
				<div className="">
					<h2>Course</h2>
					<select
						onChange={(event) => {
							console.log(event.target.value)
							setPathData({
								...pathData,
								course: {
									id: event.target.value,
									name: event.target.options[
										event.target.selectedIndex
									].text,
									sections: [],
									carnegieHours: courseGetter(event.target.value)
										?.carnegieHours,
									required: courseGetter(event.target.value)
										?.required,
								},
							})
						}}
					>
						<option value="0">Select a course</option>
						{data?.course.map((course, courseIndex) => (
							<option key={courseIndex} value={course.id}>
								{course.name}
							</option>
						))}
					</select>
					<h2>Modules</h2>
					<div className="flex flex-col">
						{data?.module.map((module, moduleIndex) => (
							<span className="flex items-center" key={moduleIndex}>
								<input
									type={'checkbox'}
									value={module.id}
									className="ml-1"
									onChange={(e) => {
										if (e.target.checked) {
											setCheckedModules([
												...checkedModules,
												e.target.value,
											])
										} else {
											setCheckedModules(
												checkedModules.filter(
													(checkedModule) =>
														checkedModule !==
														e.target.value
												)
											)
										}
									}}
								/>
								<label htmlFor="moduleSelection">
									{module.moduleName}
								</label>
							</span>
						))}
					</div>
					<h2>Collections</h2>
					<div className="flex flex-col">
						{data?.collection.map((collection, collectionIndex) => (
							<span
								className="flex items-center"
								key={collectionIndex}
							>
								<input
									type={'checkbox'}
									value={collection.id}
									className="ml-1"
									onChange={(e) => {
										if (e.target.checked) {
											setCheckedCollections([
												...checkedCollections,
												e.target.value,
											])
										} else {
											setCheckedCollections(
												checkedCollections.filter(
													(checkedCollection) =>
														checkedCollection !==
														e.target.value
												)
											)
										}
									}}
								/>
								<label htmlFor="collectionSelection">
									{collection.name}
								</label>
							</span>
						))}
					</div>
					<h2>Lessons</h2>
					<div className="flex flex-col">
						{data?.lesson.map((lesson, lessonIndex) => (
							<span className="flex items-center" key={lessonIndex}>
								<input
									type={'checkbox'}
									value={lesson.id}
									className="ml-1"
									onChange={(e) => {
										if (e.target.checked) {
											setCheckedLessons([
												...checkedLessons,
												e.target.value,
											])
										} else {
											setCheckedModules(
												checkedLessons.filter(
													(checkedLesson) =>
														checkedLesson !==
														e.target.value
												)
											)
										}
									}}
								/>
								<label htmlFor="lessonSelection">
									{lesson.name}
								</label>
							</span>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

CreateLearningPathPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default CreateLearningPathPage
