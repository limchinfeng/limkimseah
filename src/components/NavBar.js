import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo';
import { useRouter } from 'next/router';
import {CallIcon, GithubIcon, Gmail, LinkedInIcon} from './Icons';
import {motion} from "framer-motion"

const CustomLink = ({href, title, className=""}) => {

const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] bg-dark inline-block
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span> 
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button href={href} className={`${className} relative group text-light my-1.5`} onClick={handleClick}>
      {title}

      <span
        className={`h-[1px] bg-light inline-block
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="w-full px-32 py-6 font-medium flex justify-between items-center
    lg:px-16 lg:py-4
    md:py-2
    sm:px-8

    "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex my-10"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"} `}
        ></span>
        <span
          className={`bg-dark transition-all duration-200 ease-out h-0.5 w-6 rounded-sm my-0.5 
          ${isOpen ? "opacity-0" : "opacity-100"} `}
        ></span>
        <span
          className={`bg-dark transition-all duration-200 ease-out h-0.5 w-6 rounded-sm 
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"} `}
        ></span>
      </button>

      <motion.a
        href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="hidden lg:flex"
      >
        <CallIcon />
      </motion.a>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between fixed top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md z-30
        py-32
      "
        >
          <nav className="items-center flex flex-col justify-center pb-5">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/profile"
              title="Profile"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
              target="_blank"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mx-2">
            <motion.a
              href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mr-3 bg-light rounded-full sm:mx-2"
            >
              <CallIcon />
            </motion.a>
            <motion.a
              href="mailto:limchinfeng@gmail.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 shadow-sm shadow-light sm:mx-2"
            >
              <Gmail />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lim-chin-feng/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 bg-light rounded-sm sm:mx-2"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/limchinfeng"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="ml-3 bg-light rounded-full sm:mx-2"
            >
              <GithubIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      {/* screen > lg */}

      <div className="w-full flex justify-between items-center my-5 lg:hidden ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/profile" title="Profile" className="mx-4" />
          <CustomLink
            href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
            target="_blank"
            title="Contact"
            className="ml-4"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mr-3"
          >
            <CallIcon />
          </motion.a>
          <motion.a
            href="mailto:limchinfeng@gmail.com"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3"
          >
            <Gmail />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lim-chin-feng/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/limchinfeng"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3"
          >
            <GithubIcon />
          </motion.a>
        </nav>
      </div>

      <div className="absolute left-[50%] top-4 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar