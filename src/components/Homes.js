import React from "react";
import logo from "../../public/png/Home Logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const Homes = () => {
  return (
    <div
      className="flex items-center justify-center w-auto h-[40rem] px-5 -mt-10
    lg:h-[35rem]
    md:h-[32rem]
    sm:h-[30rem]
    xs:h-[28rem]
    "
    >
      {/* logo */}
      <motion.div
        className="absolute opacity-60 z-0"
        animate={{ y: [-5, 5, -5] }} // Animate the 'y' position in a loop
        transition={{ duration: 4, repeat: Infinity }} // Animation duration and repeat
      >
        <Image
          src={logo}
          alt=""
          className="w-full h-auto  object-cover -mt-10 px-2
        lg:w-[30rem]
        md:w-[28rem] md:-mt-8
        sm:w-[25rem] sm:-mt-5
        xs:w-[20rem]
        "
        />
      </motion.div>

      {/* Centre Text */}
      <div className="flex flex-col items-center justify-center  z-10 relative">
        <AnimatedText
          text="美式整脊技术之ISAT"
          className="font-bold text-4xl text-center pb-4
          lg:pb-3
          md:text-3xl md:pb-2
          sm:text-2xl sm:pb-1
          xs:text-lg
          "
        />
        <AnimatedText
          text="脈衡脊骨肌肉神经活化整疗技术"
          className="font-bold text-4xl text-center py-4 
          lg:py-3
          md:text-3xl md:py-2
          sm:text-2xl sm:py-1
          xs:text-lg"
        />
        <AnimatedText
          text="Impulse Subluxation Adjusting Technique"
          className="font-bold text-3xl text-center pt-4 
          lg:pt-3
          md:text-2xl md:pt-2
          sm:text-xl  sm:pt-1
          xs:text-base"
        />

        <h2
          className="py-6 text-primary font-semibold
        text-base text-center
        lg:py-5
        md:text-sm md:py-4
        xs:text-xs sm:py-3
        "
        >
          <Link href="/profile">
            Dr. Lim Kim Seah - <span className="underline">View Profile</span>
          </Link>
        </h2>

        {/* Button */}
        <div className="flex justify-center items-center space-x-4 md:space-x-3 xs:space-x-2">
          <a
            href="https://api.whatsapp.com/send?phone=125312283&text=%E6%88%91%E6%83%B3%E8%A6%81%E9%A2%84%E7%BA%A6%E6%95%B4%E8%84%8A"
            target="_blank"
            className="flex items-center bg-dark text-light p-3 px-6
              rounded-2xl text-base font-semibold hover:bg-transparent hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              md:text-xs
              xs:px-4 
              "
          >
            联系我
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=125312283&text=I%20would%20like%20to%20schedule%20an%20appointment%20for%20a%20therapy%20treatment"
            target="_blank"
            className="flex items-center bg-dark text-light p-3 px-5
              rounded-2xl text-base font-semibold hover:bg-transparent hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              md:text-xs
              xs:px-4
              "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homes;
