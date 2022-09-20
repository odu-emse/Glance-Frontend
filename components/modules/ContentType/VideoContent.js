import VideoPlayer from "../VideoPlayer";

const VideoContent = ({ url, transcript }) => {
    return (
        <div className="flex flex-col w-3/4 justify-between">
            <VideoPlayer path={url} />
            <div className="bg-gray-100">
                <h1 className="text-3xl font-bold mb-2">Transcript</h1>
                <p>
                    { transcript }
                </p>
            </div>
        </div>
    );
}

export default VideoContent;