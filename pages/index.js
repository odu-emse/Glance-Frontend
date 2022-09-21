import Head from 'next/head';

const Index = () => {
	return (
		<div>
			<Head>
				<title>ALMP</title>
				<meta name="description" content="ALMP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<p className="text-3xl font-bold underline">Hello</p>
		</div>
	);
};

export default Index;
