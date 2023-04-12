import MarkdownContainer from "@/components/common/community/threads/markdown/markdown_container"

const TEXTContent = ({ data }) => {
	//console.log("t",data)
	let text = ''
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === 'TEXT') {
			text = data[i].link
		}
	}

	return (
		<div className="flex flex-col w-3/4">
			<MarkdownContainer>
				{ text }
			</MarkdownContainer>
		</div>
	)
}

export default TEXTContent
