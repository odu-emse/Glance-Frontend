import { VideoPlayer } from "@/components/common/content_types/video/video_player/video_player"

const VideoContent = ({ data }) => {
	console.log("Loaded")
	return (
		<div className="flex flex-col w-3/4 justify-between">
			<VideoPlayer source={data.url} captions={""} type={"video/mp4"} cards={[]} volume={0.75} />
			<div className="bg-gray-100">
				<h1 className="text-3xl font-bold mb-2">Transcript</h1>
				<p>{data.transcript}</p>
			</div>
		</div>
	)
}

export default VideoContent;