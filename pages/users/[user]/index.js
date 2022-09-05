import Image from "next/image";

const UserProfile = () => {
    return (
        <div className="flex flex-auto items-center">
            <div className="rounded-full w-40 h-40 bg-slate-200 overflow-hidden relative drop-shadow mr-5">
                <Image src="https://images.unsplash.com/photo-1554727242-741c14fa561c" layout="fill" objectFit="cover" />
            </div>
            <div>
                <h1 className="text-2xl">Jada Daphne</h1>
                <p>jdaph002</p>
            </div>
        </div>
    );
}

export default UserProfile;