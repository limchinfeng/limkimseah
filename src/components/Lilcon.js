import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Lilcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center start"],
  });

  return (
    <figure className="absolute left-0 stroke-dark -mt-28">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
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
