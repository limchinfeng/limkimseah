import React from "react";
import { motion, useScroll } from "framer-motion";

const Lilcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center start"],
  });

  return (
    <figure className="absolute left-0 stroke-dark md:-mt-1.5 sm:-mt-2 xs:mt-1
    

    ">
      <svg className="-rotate-90
      md:w-[60px] xs:w-[40px] xs:h-[40px] 
      " width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress 
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[3px] fill-light"
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary" />
      </svg>
    </figure>
  );
};

export default Lilcon;
