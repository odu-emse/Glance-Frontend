import dynamic from 'next/dynamic'

export const ContentLoader = ({ type, data }) => {
	console.log('ContentLoader:', type, data)

	//Temp data
	// data =  [
	// 	{
	// 		"type": "VIDEO",
	// 		"link": "/videos/hello.mp4",
	// 		"primary": false
	// 	},
	// 	{
	// 		"type": "CAPTIONS",
	// 		"link": "/video/captions.ttt",
	// 		"primary": false
	// 	},
	// 	{
	// 		"type": "TRANSCRIPT",
	// 		"link": "/video/trascript.txt",
	// 		"primary": false
	// 	},
	// ]

	//Temp type
	//type = "VIDEO"

	const Content = dynamic(() => import(`./${type.toLowerCase()}`), {
		ssr: false,
	})
	return <Content data={data} />
}
