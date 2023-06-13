import dynamic from 'next/dynamic'

export const ContentLoader = ({
	type,
	data,
}: {
	type: any | undefined
	data: any
}) => {
	console.log('ContentLoader:', type, data)
	if (type === undefined) return <p>Content in Undefined</p>

	const Content = dynamic(() => import(`./${type.toLowerCase()}`), {
		ssr: false,
	})
	return <Content data={data} />
}
