import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaComments, FaExpand, FaCompress, FaClosedCaptioning, FaVolumeMute, FaVolumeDown, FaVolumeUp, FaArrowCircleUp } from "react-icons/fa";
import VideoChip from "./VideoChip";

const VideoPlayer = ({ source, type, autoplay }) => {
    
    // Load the fake data from server
    const [ cards, setCards ] = useState(
        [
            {
                timestamp: 2,
                name: "Why is the rabbit so over weight in this film?"
            },
            {
                timestamp: 30,
                name: "This is a really really really long question. Can the interfaxce handle it? Im not sure!!!!! But, we will see."
            },
            {
                timestamp: 15,
                name: "What program did they use to animate this?"
            },
            {
                timestamp: 4,
                name: "i talk like this for some reason..."
            }
        ]
    )

    const [ videoPlaying, setVideoPlaying ] = useState(autoplay);
    const [ viewComments, setViewComments ] = useState(false);
    const [ controlsFocused, setControlsFocused ] = useState(false);
    const [ commentInputBox, setCommentInputBox ] = useState("");

    const videoPlayer = useRef(null);
    const progressBar = useRef(null);
    
    const handleTimeUpdate = (e) => {
        const position = (e.target.currentTime / e.target.duration) * 100;
        progressBar.current.value = position;
    }

    const handleProgressBarChange = (e) => { 
        if(isNaN(videoPlayer.current.duration)) return;
        const position = (e.target.value / 100) * videoPlayer.current.duration;
        videoPlayer.current.currentTime = position;
    }

    const handlePlayButtonClick = (e) => {
        if(videoPlayer.current.paused || videoPlayer.current.ended) { 
            videoPlayer.current.play();
            return;
        }

        videoPlayer.current.pause();
    }

    const handleCommentBoxValueChange = (e) => {
        setCommentInputBox(e.target.value);
        videoPlayer.current.pause();
    }

    // ----- Setup Cards -----

    useEffect(() => {
        const sorted = [...cards].sort((cardA, cardB) => {
            return cardA.timestamp > cardB.timestamp;
        });

        setCards(sorted);
    });

    return (
        <div 
            className="relative w-full h-96 bg-black"
            onMouseEnter={ () => setControlsFocused(true) } 
            onMouseLeave={ () => setControlsFocused(false) }
        >

            <video 
                className="w-full h-full absolute" 
                autoPlay={autoplay}
                onTimeUpdate={handleTimeUpdate}
                ref={videoPlayer}
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
            >
                <source src={source} type={type} />
                Your browser doesn't support video playback. Please consider updating to the latest version.
            </video>

            {/* The card panel. */}
            <div className={`absolute z-40 w-full sm:w-1/2 h-full bg-gradient-to-l from-black/[0.75] text-white flex justify-end ${!viewComments || !controlsFocused ? "invisible" : "visible" }`} style={{ right: 0 }}>
                <div className="w-3/4 h-5/6 overflow-scroll pt-16 pr-4 rounded flex flex-col gap-1">
                    
                    <div className="flex flex-col items-end gap-1 mt-4 mb-2">
                        <textarea rows={2} value={commentInputBox} onChange={ handleCommentBoxValueChange } placeholder="Leave a comment..." className="w-full p-2 rounded outline-none text-black"></textarea>
                        <button className={`flex gap-1 items-center justify-center hover:text-blue-300 ${ commentInputBox.length > 0 && controlsFocused && viewComments ? 'visible' : 'invisible' }`}><FaArrowCircleUp /> Send</button>
                    </div>

                    { cards.map((card) => <VideoChip text={card.name} timestamp={card.timestamp} />) }

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

                        {/* Live comments overlay */}
                        <div className="absolute w-full h-full">

                            { 
                                cards.map((card) => (
                                    <div className="absolute h-full w-1 bg-blue-500 z-50" style={{ left: _.clamp((card.timestamp / videoPlayer.current?.duration) * 100, 0, 100) + "%" }}>
                                        { /* Tooltip? */ }
                                    </div>
                                ))
                            }

                        </div>

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
                            step="any"
                        />
                    </div>
                    
                    { /* These are left side settings */ }
                    <div className="flex-none flex items-center gap-4">
                        <div>
                            <button><FaClosedCaptioning /></button>
                        </div>
                        <div>
                            <button><FaVolumeMute /></button>
                        </div>
                        <div>
                            <button>
                                { true ? <FaCompress /> : <FaExpand /> }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;