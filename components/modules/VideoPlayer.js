import React from 'react';

const VideoPlayer = ({ path = '/assets/video.mp4' }) => {
	return <video className="w-auto" src={path} controls></video>;
};

export default VideoPlayer;
