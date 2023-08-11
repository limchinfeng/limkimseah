import Image from 'next/image'
import Head from 'next/head'
import Homes from '@/components/Homes'
import Layout from '@/components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Lim Kim Seah</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Layout>
          <Homes />
          
        </Layout>
      </main>
    </>
  );
}