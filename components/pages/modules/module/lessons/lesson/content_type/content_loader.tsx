import dynamic from 'next/dynamic'

export const ContentLoader = ({ type, data }) => {
	console.log('ContentLoader:', type, data)

	const Content = dynamic(() => import(`./${type.toLowerCase()}`), {
		ssr: false,
	})
	return <Content data={data} />
		
}
