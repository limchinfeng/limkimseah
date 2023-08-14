import Head from 'next/head'
import Homes from '@/components/Homes'
import Layout from '@/components/Layout'
import About from '@/components/About';
import Diagnosis from '@/components/Diagnosis';
import SpinalCondition from '@/components/SpinalCondition';
import Introduce from '@/components/Introduce';
import Location from '@/components/Location';


export default function Home() {
  return (
    <>
      <Head>
        <title>Lim Kim Seah</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div>
            <Homes />
            <About />
            <Diagnosis />
            <SpinalCondition />
            <Location />
          </div>
        </Layout>
      </main>
    </>
  );
}