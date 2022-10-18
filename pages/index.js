import LoadingSplash from '@/components/LoadingSplash';
import Head from 'next/head';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { isAuthorized, loading } = useAuth();
  if(loading) return <p>Loading...</p>
  if(isAuthorized) router.push('/modules')
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