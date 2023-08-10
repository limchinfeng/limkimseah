import Link from 'next/link'
import React from 'react'
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

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/a" title="About" className="mx-4" />
        <CustomLink href="/a" title="Contact" className="ml-4" />
      </nav>

      <Logo />

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/" target="_blank"
            whileHover={{y: -2}}
            whileTap={{scale:0.9}}
            className='mr-3'
        >
          <CallIcon />
        </motion.a>
        <motion.a href="mailto:limchinfeng@gmail.com" target="_blank"
            whileHover={{y: -2}}
            whileTap={{scale:0.9}}
            className='mx-3'
        >
          <Gmail />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/lim-chin-feng/" target="_blank"
            whileHover={{y: -2}}
            whileTap={{scale:0.9}}
            className='mx-3'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://github.com/limchinfeng" target="_blank"
            whileHover={{y: -2}}
            whileTap={{scale:0.9}}
            className='ml-3'
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
}

export default NavBar