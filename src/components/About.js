import React from "react";
import AnimatedText from "./AnimatedText";
import activator from "../../public/png/Activator.png";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center py-28 md:py-20 sm:py-14 xs:pb-10 xs:pt-0">
        <div>
          <h2 className="font-bold text-4xl text-center py-2 text-primary md:text-3xl xs:text-2xl">
            关于ISAT
          </h2>
          <h2 className="font-bold text-3xl text-center text-primary md:text-2xl xs:text-xl">
            About
          </h2>
        </div>

        <div
          className="flex flex-row justify-center items-center gap-6 w-5/6 p-14 pt-10
          lg:p-12 lg:pt-10
          md:flex-col md:w-full md:p-10 md:gap-3 md:pt-6
          xs:p-6
        "
        >
          {/* left */}
          <div
            className="w-2/3 text-xl text-justify
          lg:text-lg lg:w-full
          md:text-base
          xs:text-sm"
          >
            <p className="text-dark pb-2 ">
              ISAT
              是一種利用活化器對脊椎施加精準的力度，使脊椎關節回正、神經通暢，進而改善身體各部位疼痛、不適的療法。
            </p>
            <p className="text-dark pt-2">
              ISAT is a spinal cord correction technique that uses an activator
              to apply precise force to the spine, realigning the spinal joints
              and clearing the nerves, thereby improving pain and discomfort in
              various parts of the body.
            </p>
          </div>

          {/* right */}
          <motion.div
            className=""
            animate={{ y: [-5, 5, -5] }} // Animate the 'y' position in a loop
            transition={{ duration: 4, repeat: Infinity }} // Animation duration and repeat
          >
            <Image
              src={activator}
              alt="activator"
              className="w-40 h-auto xl:w-36 md:w-28 xs:w-20"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
