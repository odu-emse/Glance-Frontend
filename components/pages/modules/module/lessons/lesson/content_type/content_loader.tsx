import dynamic from 'next/dynamic'

export const ContentLoader = ({ type, data }) => {
	console.debug("ContentLoader:", type, data)
	const Content = dynamic(() => import(`./${type}`), { ssr: false })
	return <Content data={data} />
}
