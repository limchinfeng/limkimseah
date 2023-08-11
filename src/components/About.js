import React from "react";
import AnimatedText from "./AnimatedText";
import activator from "../../public/png/Activator.png";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center pt-14 pb-24">
        <div>
          <h2 className="font-bold text-5xl text-center py-4 text-primary">
            关于ISAT
          </h2>
          <h2 className="font-bold text-4xl text-center pb-4  text-primary">
            About
          </h2>
        </div>

        <div className="grid w-3/5 grid-cols-10 gap-5 py-10">
          {/* left */}
          <div className="col-span-8 text-left text-xl">
            <p className="text-dark pb-2">
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
            className="col-span-2"
            animate={{ y: [-5, 5, -5] }} // Animate the 'y' position in a loop
            transition={{ duration: 4, repeat: Infinity }} // Animation duration and repeat
          >
            <Image src={activator} alt="activator" class="w-40 h-auto -mt-5" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
