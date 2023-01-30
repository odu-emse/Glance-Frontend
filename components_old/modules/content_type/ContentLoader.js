import dynamic from 'next/dynamic'

const ContentLoader = ({ type, data }) => {
	const Content = dynamic(() => import(`./${type}`), { ssr: false })
	return <Content data={data} />
}

export default ContentLoader
