import _ from "lodash";
import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaComments, FaExpand, FaCompress, FaClosedCaptioning, FaRegClosedCaptioning, FaVolumeMute, FaVolumeDown, FaVolumeUp, FaArrowCircleUp } from "react-icons/fa";
import { VideoChip } from "./VideoChip";
import { VideoCommentTick } from "./VideoCommentTick";

export const VideoPlayer = ({ 
	source, 
	type, 
	captions,
	autoplay = false,
	cards = []
}: VideoPlayerProps): JSX.Element => {

    const [ videoPlaying, setVideoPlaying ] = useState(autoplay);
    const [ viewComments, setViewComments ] = useState(false);
    const [ controlsFocused, setControlsFocused ] = useState(false);
    const [ commentInputBox, setCommentInputBox ] = useState("");
	
	const [ isCaptionsVisible, setCaptionsVisible ] = useState(false);
	const [ isFullscreen, setFullScreen ] = useState(false);

    const player = useRef<HTMLDivElement>(null);
    const videoPlayer = useRef<HTMLVideoElement>(null);
    const progressBar = useRef<HTMLInputElement>(null);
	const captionsTrack = useRef<HTMLTrackElement>(null);
    
    const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
		if(!progressBar.current) return;

		const target = event.target as HTMLVideoElement
        const position = (target.currentTime / target.duration) * 100;
		progressBar.current.valueAsNumber = position;
    }

    const handleProgressBarChange = (event: ChangeEvent) => {
		if(!videoPlayer.current) return;
        if(isNaN(videoPlayer.current.duration)) return;

		const target = event.target as HTMLInputElement
        const position = (target.valueAsNumber / 100) * videoPlayer.current.duration;
        videoPlayer.current.currentTime = position;
    }

    const handlePlayButtonClick = () => {
		if(!videoPlayer.current) return;
        if(videoPlayer.current.paused || videoPlayer.current.ended) { 
            videoPlayer.current.play();
            return;
        }

        videoPlayer.current.pause();
    }

	const handleCaptionsButtonClick = () => {
		if(!captionsTrack.current) return;
		setCaptionsVisible(!isCaptionsVisible);
		const track = captionsTrack.current.track;
		track.mode = isCaptionsVisible ? 'disabled' : 'showing';
	}

    const handleFullScreenButonClick = () => {
        
        if(document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            if(!player.current) return;
            player.current.requestFullscreen();
        }
        
        setFullScreen(!document.fullscreenElement);
    }

    const handleCommentTickButtonClick = (id: string) => {
        setViewComments(true);
        location.hash = `#${id}`;
    }

    const handleCommentBoxValueChange = (event: ChangeEvent) => {
		if(!videoPlayer.current) return;
		const target = event.target as HTMLInputElement
        setCommentInputBox(target.value);
        videoPlayer.current.pause();
    }

    // ----- Setup Cards -----
    const generateCommentTicks = () => {
        if(!videoPlayer.current) return;

        cards.sort((cardA, cardB) => {
            return cardA.timestamp > cardB.timestamp ? 1 : 0;
        });

        const liveCommentTicks = cards.map((card, index) => (
            <div 
                key={index}
                className="absolute h-4 w-4 z-50" 
                onClick={ () => { handleCommentTickButtonClick(card.id) } }
                style={{ left: _.clamp((card.timestamp / videoPlayer.current!.duration) * 100, 0, 100) + "%" }}
            >
                <VideoCommentTick 
                    icon={card.icon} 
                    key={index}
                />
            </div>
        ))

        return liveCommentTicks;
    }

    return (
        <div 
            className="relative w-full h-96 bg-black"
            onMouseEnter={ () => setControlsFocused(true) } 
            onMouseLeave={ () => setControlsFocused(false) }
            ref={player}
        >
            <video 
                className="w-full h-full absolute" 
                autoPlay={autoplay}
                onTimeUpdate={handleTimeUpdate}
                ref={videoPlayer}
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
            >


				<track kind="captions" srcLang="en" src={captions} ref={captionsTrack} />

                <source src={source} type={type} />
                Your browser doesn&apos;t support video playback. Please consider updating to the latest version.
            </video>

            {/* The card panel. */}
            <div className={`absolute z-40 w-full sm:w-1/2 h-full bg-gradient-to-l from-black/[0.75] text-white flex justify-end ${!viewComments || !controlsFocused ? "invisible" : "visible" }`} style={{ right: 0 }}>
                <div className="w-3/4 h-5/6 overflow-scroll pt-16 pr-4 rounded flex flex-col gap-1">
                    
                    <div className="flex flex-col items-end gap-1 mt-4 mb-2">
                        <textarea rows={2} value={commentInputBox} onChange={ handleCommentBoxValueChange } placeholder="Leave a comment..." className="w-full p-2 rounded outline-none text-black"></textarea>
                        <button className={`flex gap-1 items-center justify-center hover:text-blue-300 ${ commentInputBox.length > 0 && controlsFocused && viewComments ? 'visible' : 'invisible' }`}><FaArrowCircleUp /> Send</button>
                    </div>

                    { cards.map((card, index) => <VideoChip text={card.name} timestamp={card.timestamp} icon={card.icon} key={index} id={card.id} />) }

                </div>
            </div>

            { /* Overlay controls set */ }
            <div className={`absolute w-full h-full flex flex-col text-white ${ controlsFocused ? "visible" : "invisible" }`}>

                { /* Upper control set */ }
                <div className="flex-none flex justify-end bg-gradient-to-b from-black/[0.5] p-4 pt-1 pb-6">
                    {/* Left side */}
                    <div className="z-50">
                        <button 
                            className={ viewComments ? "p-4 bg-white text-black rounded-full shadow-lg" : "p-4 text-white" }
                            onClick={ () => setViewComments(!viewComments) }
                        >
                            <FaComments />
                        </button>
                    </div>
                </div>
                
                { /* Middle control set */ }
                <div className="grow">
                    {/* Mobile controls??? */}
                </div>

                { /* Bottom control set */ }
                <div
                    className="flex-none flex gap-4 items-center bg-gradient-to-t from-black/[0.5] p-2 pb-1 pt-6 z-50"
                >

                    { /* These are right side settings */ }
                    <div className="flex-none flex items-center">
                        <button onClick={ handlePlayButtonClick }>
                            { videoPlaying ? <FaPause /> : <FaPlay /> }
                        </button>
                    </div>

                    {/* This is the progress bar */}
                    <div 
                        className="relative grow h-2 flex items-center"
                    >

                        { 
                            generateCommentTicks()
                        }

                        <input
                            type="range" 
                            className="w-full h-full z-10 appearance-none"
                            style={{
                                outline: "none",
                            }} 
                            ref={progressBar}
                            onChange={handleProgressBarChange}
                            min={0}
                            max={100}
							defaultValue={0}
                            step="any"
                        />
                    </div>
                    
                    { /* These are left side settings */ }
                    <div className="flex-none flex items-center gap-4">
                        <div>
                            <button onClick={ handleCaptionsButtonClick }>
								{ isCaptionsVisible ? <FaClosedCaptioning /> : <FaRegClosedCaptioning /> }
							</button>
                        </div>
                        <div>
                            <button><FaVolumeMute /></button>
                        </div>
                        <div>
                            <button onClick={ handleFullScreenButonClick }>
                                { isFullscreen ? <FaCompress /> : <FaExpand /> }
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
	autoplay?: boolean,
	cards: VideoCard[]
}

type VideoCard = {
    id: string,
	timestamp: number
	name: string,
    icon: string
}