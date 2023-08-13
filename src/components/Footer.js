import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bottom-0 border-t-2 border-solid border-dark bg-light">
      <div className="w-full px-24 py-4 font-medium flex gap-4 justify-between text-center  
      lg:px-14
      md:flex-col md:text-sm">
        <span>
          By &nbsp;
          <Link
            href="https://www.linkedin.com/in/lim-chin-feng/"
            target="_blank"
            className="underline"
          >
            supershuaifeng
          </Link>
        </span>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link
          href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
          target="_blank"
          className="underline"
        >
          Make An Appointment?
        </Link>
      </div>
    </footer>
  );
}

export default Footer