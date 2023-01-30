import VideoPlayer from '@/components/videoPlayer/VideoPlayer'

const video = () => {
	return (
		<div>
			<VideoPlayer
				source="https://download.blender.org/peach/trailer/trailer_1080p.ogg"
				type="video/ogg"
				autoplay={true}
			/>
		</div>
	)
}

export default video
