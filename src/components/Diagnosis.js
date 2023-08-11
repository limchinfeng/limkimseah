import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ title, descriptionC, descriptionE }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] text-left text-xl mx-auto flex flex-col items-center justify-center">
      <Lilcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"string"}}
      >
        <h2 className="text-2xl font-semibold pb-2">{title}</h2>
        <p className="py-1">{descriptionC}</p>
        <p className="pt-1">{descriptionE}</p>
      </motion.div>
    </li>
  );
};

const Diagnosis = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center pt-10 pb-24">
        <div className="pb-14">
          <h2 className="font-bold text-5xl text-center py-4 text-primary">
            ISAT疗法
          </h2>
          <h2 className="font-bold text-4xl text-center pb-4  text-primary">
            Diagnosis and Treatment
          </h2>
        </div>

        <div ref={ref} className="w-[60%] mx-auto relative">
          <motion.div 
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" 
            style={{scaleY:scrollYProgress}}
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              title="診斷 Diagnosis"
              descriptionC="醫師會先進行詳細的問診和身體檢查，以確定患者的疼痛或不適原因"
              descriptionE="A detailed interview and physical examination will be conducted to determine the cause of the patient's pain or discomfort"
            />
            <Details
              title="治療 Treatment"
              descriptionC="醫師會使用活化器對患者的脊椎施加精準的力度，使脊椎關節回正、神經通暢"
              descriptionE="Activator will be used to apply precise force to the patient's spine, realigning the spinal joints and clearing the nerves"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Diagnosis;
