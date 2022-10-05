import LoadingSplash from '@/components/LoadingSplash';
import gqlfetcher from '@/utils/gqlFetcher';
import Head from 'next/head';
import useSWR from 'swr';

const Index = () => {

  if (typeof window !== "undefined") {
    const { data, error } = useSWR({
        query: `
          {
            user(id: "weruyoewrweoru") {
              id
            }
          }
        `,
        token: window.localStorage.getItem("auth")
      }, 
      gqlfetcher
    );
    console.log(`Error: ${error}`)
    console.log(data)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <Head>
        <title>ALMP</title>
        <meta name="description" content="ALMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingSplash />
    </div>
  )
}

export default Index;