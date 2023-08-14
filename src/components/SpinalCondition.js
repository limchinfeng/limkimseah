import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Condition = ({ descriptionC, descriptionE }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when the element comes into view.
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100 }}
      animate={{ y: inView ? 0 : 100 }} // Animate only when in view
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full p-4 py-6 my-1 rounded-xl flex 
      item-center text-center bg-transparent text-dark 
      border border-solid justify-center border-dark border-r-4 
      border-b-4 col-span-1
      sm:py-4
      xs:py-3
      "
    >
      <h2 className="text-lg md:text-base sm:text-sm sm:flex sm:flex-col sm:text-center">{descriptionC}&nbsp;<span>{descriptionE}</span></h2>
    </motion.div>
  );
};

const SpinalCondition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation triggers only once when the element comes into view.
  });
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center pb-28 md:pb-20 sm:pb-14">
        <div className="pb-14 md:pb-10 xs:pb-6">
          <h2 className="font-bold text-4xl text-center py-2 text-primary md:text-3xl xs:text-2xl">
            脊椎疾病的范围
          </h2>
          <h2 className="font-bold text-3xl text-center text-primary md:text-2xl xs:text-xl">
            Range of Spinal Conditions
          </h2>
        </div>
        <div
          className="grid w-3/5 grid-cols-2 gap-5 justify-center
        xl:w-4/5 md:w-full md:px-5 xs:grid-cols-1 xs:gap-3
        "
        >
          <Condition descriptionC="腰痛" descriptionE="Low Back Pain" />
          <Condition descriptionC="背痛" descriptionE="Back Pain" />
          <Condition descriptionC="頸痛" descriptionE="Neck Pain" />
          <Condition descriptionC="肩痛" descriptionE="Shoulder Pain" />
          <Condition descriptionC="神經痛" descriptionE="Nerve Pain" />
          <Condition descriptionC="肌肉緊張" descriptionE="Muscle Tension" />
          <Condition descriptionC="骨刺" descriptionE="Bone Spur" />
          <Condition descriptionC="脊椎侧弯" descriptionE="Scoliosis" />
          <Condition descriptionC="坐骨神经" descriptionE="Sciatic Nerve" />
          <Condition descriptionC="小中风" descriptionE="Mini-Stroke" />
        </div>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ delay: 0.5 }}
          className="text-md text-center pt-8 md:pt-6 md:text-sm sm:pt-4 sm:text-xs "
        >
          还有很多
        </motion.h2>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ delay: 0.5 }}
          className="text-md text-center md:text-sm sm:text-xs"
        >
          And Many Many More
        </motion.h2>
      </div>
    </>
  );
};

export default SpinalCondition;