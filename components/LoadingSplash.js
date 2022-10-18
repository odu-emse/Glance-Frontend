import Image from 'next/image';
import logo from "../public/logos/almp_black_h.png";

const LoadingSplash = () => {
    return (
        <div className='flex flex-col justify-center items-center' data-testid={"splash-logo"}>
            <div className='h-auto w-96'>
                <Image src={logo} alt="ALMP logo" />
            </div>
        </div>
    );
}

export default LoadingSplash;