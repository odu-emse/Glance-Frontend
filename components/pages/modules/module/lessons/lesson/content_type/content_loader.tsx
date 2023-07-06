import dynamic from 'next/dynamic'

export const ContentLoader = ({
	type,
	data,
}: {
	type: any | undefined
	data: any
}) => {
	console.log('ContentLoader:', type, data)
	if (type === undefined)
		return (
			<pre>
				Error: Could not load content. Content `type` is undefined.
				Please contact the system adminsitrator to resolve this issue.
			</pre>
		)

	const Content = dynamic(() => import(`./${type.toLowerCase()}`), {
		ssr: false,
	})
	return <Content data={data} />
}
