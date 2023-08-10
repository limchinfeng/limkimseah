import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";


const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
        <MotionLink href='/'
        className='w-52 h-14 bg-dark text-primaryDark flex items-center justify-center rounded-full
        text-lg font-bold '
        whileHover={{
            scale:1.05
        }} 
        >Dr. Lim Kim Seah</MotionLink>
    </div>
  )
}

export default Logo