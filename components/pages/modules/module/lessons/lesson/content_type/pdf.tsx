const PDFContent = ({ data }) => {
	let pdfLink = ''
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === 'PDF') {
			pdfLink = data[i].link
		}
	}

	return (
		<div className="flex flex-col w-auto h-full">
			<object
				data={pdfLink}
				type="application/pdf"
				className="w-full h-full"
			>
				<a href={pdfLink} target="_blank" rel="noreferrer">
					View this PDF in a new tab.
				</a>
			</object>
		</div>
	)
}

export default PDFContent
