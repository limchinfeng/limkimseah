import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ title, descriptionC, descriptionE }) => {
    const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[75%] text-left text-xl mx-auto flex
      lg:w-[80%] 
      "
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "string" }}
      >
        <h2 className="text-2xl font-semibold pb-2
          sm:text-lg
          xs:text-md   
        ">{title}</h2>
        <p
          className="py-1 lg:text-lg lg:w-full
          sm:text-base
          xs:text-sm"
        >
          {descriptionC}
        </p>
        <p
          className="pt-1 lg:text-lg lg:w-full
          sm:text-base
          xs:text-sm"
        >
          {descriptionE}
        </p>
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
      <div className="w-full flex flex-col justify-center items-center text-center pb-28 md:pb-20 sm:pb-14 ">
        <div className="pb-14 md:pb-10 xs:pb-6">
          <h2 className="font-bold text-4xl text-center py-2 text-primary md:text-3xl xs:text-2xl">
            ISAT疗法
          </h2>
          <h2 className="font-bold text-3xl text-center text-primary md:text-2xl xs:text-xl">
            Diagnosis and Treatment
          </h2>
        </div>

        <div ref={ref} className="w-[75%] mx-auto relative md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]"
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 md:ml-2">
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
