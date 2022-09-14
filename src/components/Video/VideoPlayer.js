import * as React from 'react'
import * as PropTypes from 'prop-types'
import { BsFillPlayBtnFill, BsGearFill, BsPlayFill } from 'react-icons/bs';
import { FaExpand, FaPlay } from 'react-icons/fa'
import { RiPictureInPictureExitLine, RiVolumeUpFill } from 'react-icons/ri';
import { FiPlay } from 'react-icons/fi';


const VideoPlayer = ({ src }) => {
    
    const icons = "flex justify-center items-center text-white w-12 h-10"

    return (
        <div class="flex-row max-w-full">
            <div class="relative">
                <div id="controls" className='flex flex-row justify-between absolute w-full bottom-0'>
                    <div id="left-controls" className='flex flex-row'>
                        <button className={icons} style={{backgroundColor: '#93C0E9'}}><FiPlay fill="white"></FiPlay></button>
                    </div>
                    <div id="timeBar" className='flex justify-end items-center w-full bg-gray-400 text-white'>
                        <p>0:12:34 / 1:00:00</p>
                    </div>
                    <div id="right-controls" className='flex flex-row'>
                        <button className={icons} style={{backgroundColor: '#93C0E9'}}><RiVolumeUpFill size="22"/></button>
                        <button className={icons} style={{backgroundColor: '#93C0E9'}}><BsGearFill size="22"/></button>
                        <button className={icons} style={{backgroundColor: '#93C0E9'}}><RiPictureInPictureExitLine size="22"/></button>
                        <button className={icons} style={{backgroundColor: '#93C0E9'}}><FaExpand size="22"/></button>
                    </div>
                </div>
                <video src={src} className="w-full" type="video/mp4">
                    <p>Your browser does not support this video.</p>
                </video>
            </div>
        </div> 
    );
}

//type VideoPlayerProps = {
//    src: string
//}

export default VideoPlayer