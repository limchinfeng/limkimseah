import Head from 'next/head'
import Homes from '@/components/Homes'
import Layout from '@/components/Layout'
import About from '@/components/About';
import Diagnosis from '@/components/Diagnosis';
import SpinalCondition from '@/components/SpinalCondition';
import Location from '@/components/Location';
import favicon from '../../public/favicon.ico'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Impulse Subluxation Adjusting Technique</title>
        <meta
          name="description"
          content="ISAT 是一種利用活化器對脊椎施加精準的力度，使脊椎關節回正、神經通暢，進而改善身體各部位疼痛、不適的療法。
          ISAT is a spinal cord correction technique that uses an activator to apply precise force to the spine, realigning the spinal joints and clearing the nerves, thereby improving pain and discomfort in various parts of the body."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="googlebot" content="index,follow" />
        <meta name="google-site-verification" content="J84kB3agXhZuI-643qT4PpOFAqmn_M46dgl8K_MUQ9M" />
        <link rel="icon" href="favicon.ico" />
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
