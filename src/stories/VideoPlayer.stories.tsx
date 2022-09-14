import * as React from 'react'
import VideoPlayer from '../components/Video/VideoPlayer'

export default {
    title: 'Components/Video',
    component: VideoPlayer,
    argTypes: {
        src: {
            control: 'string',
            description: 'The source link to the video file.',
        }
    },
};

const Template = (args) => <VideoPlayer {...args} />;

export const Sample = Template.bind({});
Sample.args = {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
};


