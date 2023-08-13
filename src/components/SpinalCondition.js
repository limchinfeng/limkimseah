import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Condition = ({ description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when the element comes into view.
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100 }}
      animate={{ y: inView ? 0 : 100 }} // Animate only when in view
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full p-4 py-6 my-1 rounded-xl flex item-center text-center bg-transparent text-dark border border-solid justify-center border-dark border-r-4 border-b-4 col-span-2"
    >
      <h2 className="text-lg">{description}</h2>
    </motion.div>
  );
};

const SpinalCondition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation triggers only once when the element comes into view.
  });
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center pt-24 pb-24">
        <div className="pb-10">
          <h2 className="font-bold text-5xl text-center py-4 text-primary">
            脊椎疾病的范围
          </h2>
          <h2 className="font-bold text-4xl text-center pb-4  text-primary">
            Range of Spinal Conditions
          </h2>
        </div>
        <div className="grid w-3/5 grid-cols-4 gap-5 justify-center">
          <Condition description="腰痛 Low Back Pain" />
          <Condition description="背痛 Back Pain" />
          <Condition description="頸痛 Neck Pain" />
          <Condition description="肩痛 Shoulder Pain" />
          <Condition description="神經痛 Nerve Pain" />
          <Condition description="肌肉緊張 Muscle Tension" />
          <Condition description="骨刺 Bone Spur" />
          <Condition description="脊椎侧弯 Scoliosis" />
          <Condition description="坐骨神经 Sciatic Nerve" />
          <Condition description="小中风 Mini-Stroke" />
        </div>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ delay: 0.5 }}
          className="text-md text-center pt-10"
        >
          还有很多
        </motion.h2>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ delay: 0.5 }}
          className="text-md text-center"
        >
          And Many Many More
        </motion.h2>
      </div>
    </>
  );
};

export default SpinalCondition;