import Image from 'next/image';
import logo from "../public/logos/almp_black_h.png";

const LoadingSplash = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='h-auto w-96'>
                <Image src={logo} />
            </div>
        </div>
    );
}

export default LoadingSplash;