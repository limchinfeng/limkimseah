import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import mainLogo from "../../public/png/Logo.png";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <MotionLink
        href="/"
        className="w-52 h-14 bg-dark text-primaryDark flex items-center justify-center rounded-full
        text-lg font-bold "
        whileHover={{
          scale: 1.05,
        }}
      >
        Dr. Lim Kim Seah
      </MotionLink> */}

      <Link
        href="/"
        whileHover={{
          scale: 1.05,
        }}
      >
        <motion.div
          className="rounded-2xl border-2 border-solid border-dark bg-light w-20 "
          whileHover={{
            scale: 1.05,
          }}
        >
          <Image
            src={mainLogo}
            alt="Profile Picture"
            className="w-full h-auto rounded-lg p-2"
          />
        </motion.div>
      </Link>
    </div>
  );
}

export default Logo