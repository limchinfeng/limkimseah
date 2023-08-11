import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bottom-0 mt-4">
      <footer className=" border-t-2 border-solid border-dark font-medium">
        <div className="w-full px-32 py-4 font-medium flex justify-between items-center">
          <span>
            By{" "}
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
    </div>
  );
}

export default Footer