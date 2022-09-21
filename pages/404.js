import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
			<h1 className="font-semibold text-7xl">404 - Not Found!</h1>
			<Link className="underline text-blue-500" href="/">
				Go Home
			</Link>
		</div>
	);
};

export default NotFound;
