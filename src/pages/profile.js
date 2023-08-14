import Layout from '@/components/Layout';
import Introduce from '@/components/Introduce';
import Head from 'next/head';
import React from 'react'
import Location from '@/components/Location';

const profile = () => {
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
          <div className='flex flex-col justify-center items-center'>
            <Introduce />
            <div className='h-14'/>
            <Location />
          </div>
        </Layout>
      </main>
    </>
  );
}

export default profile