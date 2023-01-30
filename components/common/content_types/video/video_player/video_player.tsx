import _ from 'lodash'
import React, {
	ChangeEvent,
	SyntheticEvent,
	useRef,
	useState,
} from 'react'

import {
	FaPlay,
	FaPause,
	FaComments,
	FaExpand,
	FaCompress,
	FaClosedCaptioning,
	FaRegClosedCaptioning,
	FaVolumeMute,
//	FaVolumeOff,
//	FaVolumeDown,
	FaVolumeUp,
	FaArrowCircleUp,
} from 'react-icons/fa'
import { VideoChip } from '../video_chip/video_chip'
import { VideoCommentTick } from '../video_comment_tick/video_comment_tick'
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
	source,
	type,
	captions,
	autoplay = false,
	defaultVolume = false,
	volume,
	cards = [],
}): React.ReactElement => {
	const [videoPlaying, setVideoPlaying] = useState(autoplay)
	const [viewComments, setViewComments] = useState(false)
	const [controlsFocused, setControlsFocused] = useState(false)
	const [commentInputBox, setCommentInputBox] = useState('')
	const [isAudioMuted, setAudioMuted] = useState(defaultVolume)
	const [isCaptionsVisible, setCaptionsVisible] = useState(false)
	const [isFullscreen, setFullScreen] = useState(false)

	const player = useRef<HTMLDivElement>(null)
	const videoPlayer = useRef<HTMLVideoElement>(null)
	const progressBar = useRef<HTMLInputElement>(null)
	const captionsTrack = useRef<HTMLTrackElement>(null)
	const mouseTimeout = useRef<any>()

	const handleTimeUpdate = (
		event: SyntheticEvent<HTMLVideoElement, Event>
	) => {
		if (!progressBar.current) return

		const target = event.target as HTMLVideoElement
		const position = (target.currentTime / target.duration) * 100
		progressBar.current.valueAsNumber = position
	}

	const handleProgressBarChange = (event: ChangeEvent) => {
		if (!videoPlayer.current) return
		if (isNaN(videoPlayer.current.duration)) return

		const target = event.target as HTMLInputElement
		const position =
			(target.valueAsNumber / 100) * videoPlayer.current.duration
		videoPlayer.current.currentTime = position
	}

	const handlePlayButtonClick = () => {
		if (!videoPlayer.current) return
		if (videoPlayer.current.paused || videoPlayer.current.ended) {
			videoPlayer.current.play()
			return
		}

		videoPlayer.current.pause()
	}

	const handleCaptionsButtonClick = () => {
		if (!captionsTrack.current) return
		setCaptionsVisible(!isCaptionsVisible)
		const track = captionsTrack.current.track
		track.mode = isCaptionsVisible ? 'disabled' : 'showing'
	}

	const handleFullScreenButonClick = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen()
		} else {
			if (!player.current) return
			player.current.requestFullscreen()
		}

		setFullScreen(!document.fullscreenElement)
	}

	const handleCommentTickButtonClick = (id: string) => {
		setViewComments(true)
		location.hash = `#${id}`
	}

	const handleCommentBoxValueChange = (event: ChangeEvent) => {
		if (!videoPlayer.current) return
		const target = event.target as HTMLInputElement
		setCommentInputBox(target.value)
		videoPlayer.current.pause()
	}

	const handleAudioMuteToggle = () => {
		if (!videoPlayer.current) return
		videoPlayer.current.muted = !isAudioMuted
		setAudioMuted(!isAudioMuted)
	}

	const handlemouseInactivity = () => {
		clearTimeout(mouseTimeout.current)
		setControlsFocused(true)
		// console.log("Timeout Cleared")

		mouseTimeout.current = setTimeout(() => {
			// console.log("Timeout Set")
			setControlsFocused(false)
		}, 3000)
	}

	// ----- Setup Cards -----
	const generateCommentTicks = () => {
		if (!videoPlayer.current) return

		cards.sort((cardA, cardB) => {
			return cardA.timestamp > cardB.timestamp ? 1 : 0
		})

		const liveCommentTicks = cards.map((card, index) => (
			<div
				key={index}
				className="absolute h-4 w-4 z-50"
				onClick={() => {
					handleCommentTickButtonClick(card.id)
				}}
				style={{
					left:
						_.clamp(
							(card.timestamp / videoPlayer.current!.duration) *
								100,
							0,
							100
						) + '%',
				}}
			>
				<VideoCommentTick icon={card.icon} key={index} />
			</div>
		))

		return liveCommentTicks
	}

	return (
		<div
			className="relative w-full h-96 bg-black"
			onMouseEnter={() => setControlsFocused(true)}
			onMouseLeave={() => setControlsFocused(false)}
			onMouseMove={() => {
				handlemouseInactivity()
			}}
			ref={player}
		>
			{/* Internal Raw HTML5 Video Player */}
			<video
				className="w-full h-full absolute"
				autoPlay={autoplay}
				onTimeUpdate={handleTimeUpdate}
				ref={videoPlayer}
				onPlay={() => setVideoPlaying(true)}
				onPause={() => setVideoPlaying(false)}
			>
				<track
					kind="captions"
					srcLang="en"
					src={captions}
					ref={captionsTrack}
				/>
				<source src={source} type={type} />
				Your browser doesn&apos;t support video playback. Please
				consider updating to the latest version.
			</video>
			{/* END OF Internal Raw HTML5 Video Player */}

			{/* The card panel. */}
			<div
				className={`absolute z-40 w-full sm:w-1/2 h-full bg-gradient-to-l from-black/[0.75] text-white flex justify-end ${
					!viewComments || !controlsFocused ? 'invisible' : 'visible'
				}`}
				style={{ right: 0 }}
			>
				<div className="w-3/4 h-5/6 overflow-scroll pt-16 pr-4 rounded flex flex-col gap-1">
					<div className="flex flex-col items-end gap-1 mt-4 mb-2">
						<textarea
							rows={2}
							value={commentInputBox}
							onChange={handleCommentBoxValueChange}
							placeholder="Leave a comment..."
							className="w-full p-2 rounded outline-none text-black"
							data-cy="message"
						></textarea>
						<button
							className={`flex gap-1 items-center justify-center hover:text-blue-300 ${
								commentInputBox.length > 0 &&
								controlsFocused &&
								viewComments
									? 'visible'
									: 'invisible'
							}`}
							data-cy="send"
						>
							<FaArrowCircleUp /> Send
						</button>
					</div>

					{cards.map((card, index) => (
						<VideoChip
							text={card.name}
							timestamp={card.timestamp}
							icon={card.icon}
							key={index}
							id={card.id}
						/>
					))}
				</div>
			</div>

			{/* Overlay controls set */}
			<div
				className={`absolute w-full h-full flex flex-col text-white ${
					controlsFocused ? 'visible' : 'invisible'
				}`}
			>
				{/* Upper control set */}
				<div className="flex-none flex justify-end bg-gradient-to-b from-black/[0.5] p-4 pt-1 pb-6">
					{/* Left side */}
					<div className="z-50">
						<button
							className={
								viewComments
									? 'p-4 bg-white text-black rounded-full shadow-lg'
									: 'p-4 text-white'
							}
							onClick={() => setViewComments(!viewComments)}
							data-cy="comment-button"
						>
							<FaComments />
						</button>
					</div>
				</div>

				{/* Middle control set */}
				<div className="grow">{/* Mobile controls??? */}</div>

				{/* Bottom control set */}
				<div className="flex-none flex gap-4 items-center bg-gradient-to-t from-black/[0.5] p-2 pb-1 pt-6 z-50">
					{/* These are right side settings */}
					<div className="flex-none flex items-center">
						<button
							onClick={handlePlayButtonClick}
							data-cy="play-button"
						>
							{videoPlaying ? <FaPause /> : <FaPlay />}
						</button>
					</div>

					{/* This is the progress bar */}
					<div className="relative grow h-2 flex items-center">
						{generateCommentTicks()}

						<input
							type="range"
							className="w-full h-full z-10 appearance-none"
							style={{
								outline: 'none',
							}}
							ref={progressBar}
							onChange={handleProgressBarChange}
							min={0}
							max={100}
							defaultValue={0}
							step="any"
						/>
					</div>

					{/* These are left side settings */}
					<div className="flex-none flex items-center gap-4">
						<div>
							<button
								onClick={handleCaptionsButtonClick}
								data-cy="caption"
							>
								{isCaptionsVisible ? (
									<FaClosedCaptioning />
								) : (
									<FaRegClosedCaptioning />
								)}
							</button>
						</div>
						<div className="group relative">
							<button
								className="rounded-full"
								onClick={handleAudioMuteToggle}
								data-cy="volume"
							>
								{isAudioMuted ? (
									<FaVolumeMute />
								) : (
									<FaVolumeUp />
								)}
							</button>
							<input
								className="absolute bottom-0 hidden group-hover:flex -translate-y-6 w-4"
								style={{
									'-webkit-appearance': 'slider-vertical',
									'writing-mode': 'bt-lr',
								}}
								id="default-range"
								type="range"
								min="0"
								max="100"
								orient="vertical"
								value={isAudioMuted ? 0 : 80}
								step="1"
							/>
						</div>

						<div>
							<button onClick={handleFullScreenButonClick}>
								{isFullscreen ? <FaCompress /> : <FaExpand />}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

type VideoPlayerProps = {
	source: string
	captions: string
	type: 'video/mp4' | 'video/ogg' | 'video/webm'
	autoplay?: boolean
	defaultVolume?: boolean
	cards: VideoCard[]
	volume: number
}

type VideoCard = {
	id: string
	timestamp: number
	name: string
	icon: string
}
