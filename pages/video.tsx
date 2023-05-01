import { VideoPlayer } from '@/components/common/content_types/video/video_player/video_player'

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
