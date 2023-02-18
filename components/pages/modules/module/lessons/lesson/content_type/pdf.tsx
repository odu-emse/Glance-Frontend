const PDFContent = ({ data }) => {
	return (
		<div className="flex flex-col w-3/4">
			<object
				data={data.url}
				type="application/pdf"
				className="w-full h-full"
			>
				<a href={data.url} target="_blank" rel="noreferrer">
					View this PDF in a new tab.
				</a>
			</object>
		</div>
	)
}

export default PDFContent;