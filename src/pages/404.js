import Link from 'next/link';
import React from 'react';
import Head from 'next/head'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found | Impulse Subluxation Adjusting Technique</title>
        <meta
          name="description"
          content="ISAT 是一種利用活化器對脊椎施加精準的力度，使脊椎關節回正、神經通暢，進而改善身體各部位疼痛、不適的療法。
          ISAT is a spinal cord correction technique that uses an activator to apply precise force to the spine, realigning the spinal joints and clearing the nerves, thereby improving pain and discomfort in various parts of the body."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <div className="py-20 my-10 items-center justify-center flex">
          <div className="w-[80%] h-full text-center">
            <div className="item-center pb-10 font-semibold text-primary text-lg md:text-base ">
              <h1>Oooops...</h1>
              <h1>无法寻找到那一页</h1>
              <h1>That page cannot be found.</h1>
            </div>

            <div
              className="flex items-center justify-center gap-5
              md:pt-0 
              sm:flex-col"
            >
              <Link
                href="/"
                className="flex items-center bg-dark text-light p-3 px-6
              rounded-2xl text-base font-semibold hover:bg-transparent hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              md:text-xs
              xs:px-4 
              "
              >
                回到主页
              </Link>
              <Link
                href="/"
                className="flex items-center bg-dark text-light p-3 px-5
              rounded-2xl text-base font-semibold hover:bg-transparent hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              md:text-xs
              xs:px-4
              "
              >
                Main Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;