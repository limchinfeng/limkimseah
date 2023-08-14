import Layout from '@/components/Layout';
import Introduce from '@/components/Introduce';
import Head from 'next/head';
import React from 'react'
import Location from '@/components/Location';

const profile = () => {
  return (
    <>
      <Head>
        <title>Profile | Impulse Subluxation Adjusting Technique</title>
        <meta
          name="description"
          content="ISAT 是一種利用活化器對脊椎施加精準的力度，使脊椎關節回正、神經通暢，進而改善身體各部位疼痛、不適的療法。
          ISAT is a spinal cord correction technique that uses an activator to apply precise force to the spine, realigning the spinal joints and clearing the nerves, thereby improving pain and discomfort in various parts of the body."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="flex flex-col justify-center items-center">
            <Introduce />
            <div className="h-14" />
            <Location />
          </div>
        </Layout>
      </main>
    </>
  );
}

export default profile