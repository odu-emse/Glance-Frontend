import { VideoPlayer } from '@/components/common/content_types/video/video_player/video_player'

const VideoContent = ({ data }) => {
	//console.log("v",data)

	let videoCaptions = ''
	let videoTranscript = ''
	let videolink = ''
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === 'VIDEO') {
			videolink = data[i].link
		} else if (data[i].type === 'CAPTION') {
			videoCaptions = data[i].link
		} else if (data[i].type === 'TRANSCRIPT') {
			videoTranscript = data[i].link
		}
	}

	return (
		<div className="flex flex-col w-3/4 justify-between">
			<VideoPlayer
				source={videolink}
				captions={videoCaptions}
				type={'video/mp4'}
				cards={[]}
				volume={0.75}
			/>

			<div className="bg-gray-100">
				<h1 className="text-3xl font-bold mb-2">Transcript</h1>
				<p>{videoTranscript}</p>
			</div>
		</div>
	)
}

export default VideoContent
