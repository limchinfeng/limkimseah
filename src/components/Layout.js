import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-screen-full flex flex-col min-h-screen z-0 bg-light ${className}`}>
      <NavBar />
      <div className='flex-grow items-center justify-center flex'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout