import { FaComment } from 'react-icons/fa'
import moment from 'moment';

export const VideoChip = ({
    text, 
    timestamp 
}: VideoChipProps) => {
    return (
        <div className='mb-2'>
            <div className='rounded p-4 cursor-pointer bg-white text-black flex gap-2 items-top justify-start'>
                <span className='text-gray-600 mt-1 mr-1'>
                    <div className='w-6 h-6 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" />
                    </div>
                </span>
                <p className='font-medium mt-1'>{text}</p>
            </div>
            <div className='bg-black inline-block mt-1 rounded p-1 leading-none bg-opacity-30 cursor-default select-none'>
                <small>{ moment.utc(timestamp * 1000).format('HH:mm:ss', { trim: true }).replace(/^0(?:0:0?)?/, '') }</small>
            </div>
        </div>
    )
}

type VideoChipProps = {
    text: string
    timestamp: number
}