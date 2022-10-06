import * as React from 'react'
import { BsGearFill } from 'react-icons/bs'
import { FaExpand } from 'react-icons/fa'
import { RiPictureInPictureExitLine, RiVolumeUpFill } from 'react-icons/ri'
import { FiPlay } from 'react-icons/fi'

const VideoPlayer = ({ src }: VideoPlayerProps) => {
	const icons =
		'flex justify-center items-center text-white w-12 h-10 bg-teal-200'

	return (
		<div className="flex-row max-w-full">
			<div className="relative">
				<div
					id="controls"
					className="flex flex-row justify-between absolute w-full bottom-0"
				>
					<div id="left-controls" className="flex flex-row">
						<button className={icons}>
							<FiPlay fill="white"></FiPlay>
						</button>
					</div>
					<div
						id="timeBar"
						className="flex justify-end items-center w-full bg-gray-400 text-white"
					>
						{/* TODO: Turn this into a dynamic value after we settled on a video player solution */}
						<p>0:12:34 / 1:00:00</p>
					</div>
					<div id="right-controls" className="flex flex-row">
						<button className={icons}>
							<RiVolumeUpFill size="22" />
						</button>
						<button className={icons}>
							<BsGearFill size="22" />
						</button>
						<button className={icons}>
							<RiPictureInPictureExitLine size="22" />
						</button>
						<button className={icons}>
							<FaExpand size="22" />
						</button>
					</div>
				</div>
				<video src={src} className="w-full">
					<p>Your browser does not support this video.</p>
				</video>
			</div>
		</div>
	)
}

type VideoPlayerProps = {
	/**
	 * The source link to the video file.
	 */
	src: string
}

export default VideoPlayer
