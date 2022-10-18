import LoadingSplash from '@/components/LoadingSplash';
import Head from 'next/head';

const Index = () => {
  return (
    <div className='flex justify-center items-center h-screen' data-testid={"index-head"}>
      <Head>
        <title>ALMP</title>
        <meta name="description" content="ALMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingSplash  />
    </div>
  )
}

export default Index;