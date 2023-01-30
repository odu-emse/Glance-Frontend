import Section from './Section'

function generateSections(data, selected) {
	let sections = []
	let nextSection = data.headSection
	while (nextSection !== null) {
		const sectionData = data.sections[nextSection]
		nextSection = sectionData.next
		sections.push(
			<Section
				data={sectionData}
				selected={selected}
				moduleId={data.id}
			/>
		)
	}

	return sections
}

const ModuleNavigation = ({ data, selected }) => {
	const sections = generateSections(data, selected)

	return (
		<div className="overflow-scroll h-full rounded shadow-lg p-2 border">
			<h1 className="font-bold bg-slate-100 p-2 rounded">{data.name}</h1>
			{sections}
		</div>
	)
}

export default ModuleNavigation
