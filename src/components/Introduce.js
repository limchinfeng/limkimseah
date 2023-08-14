import Image from "next/image";
import React from "react";
import profilePic from "../../public/png/Activator.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import mainLogo from "../../public/png/Logo.png";

const Introduce = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center text-center pb-14 md:pb-10
      
      "
      >
        <div>
          <h2 className="font-bold text-4xl text-center py-2 text-primary md:text-3xl xs:text-2xl">
            林医师
          </h2>
          <h2 className="font-bold text-3xl text-center text-primary md:text-2xl xs:text-xl">
            Meet Dr. Lim
          </h2>
        </div>
        <div>
          <div
            className="flex flex-row justify-center items-center gap-8 pt-8 md:pt-6 md:flex-col sm:pt-4
          "
          >
            {/* <div className="col-span-2 rounded-2xl border-2 border-solid border-dark border-r-8 border-b-8">
              <Image
                src={profilePic}
                alt="Profile Picture"
                className="w-full h-auto rounded-lg p-2"
                priority={false}
              />
            </div> */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-2xl border-2 border-solid border-dark bg-light w-52 h-auto items-center 
              justify-center flex
              md:w-44
              xs:w-40 
              "
            >
              <Image
                src={mainLogo}
                alt="Profile Picture"
                className="w-full h-auto rounded-lg p-2"
                whileHover={{
                  scale: 1.05,
                }}
              />
            </motion.div>

            <div
              className="w-2/3 md:w-full
            md:text-center
            "
            >
              <div className="pb-10 md:pb-5">
                <h2 className="font-semibold text-3xl text-left text-dark md:text-center md:text-2xl xs:text-xl">
                  林勤诚医师
                </h2>
                <h2 className="font-bold text-3xl text-left py-2 text-dark md:text-center md:text-2xl xs:text-xl">
                  Dr. Lim Kim Seah
                </h2>
                <div className="flex justify-start items-center text-left md:justify-center sm:flex-col sm:gap-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="h-auto w-4 md:w-3"
                  />
                  <p className="pl-2 underline text-center text-base md:text-sm">
                    <a
                      href="https://www.google.com.my/maps/place/Lorong+BLM+4%2F6,+Bandar+Laguna+Merbok,+08000+Sungai+Petani,+Kedah/@5.6905809,100.5002073,18.04z/data=!4m6!3m5!1s0x304b29115d37b091:0x7a759e17ab050522!8m2!3d5.6905809!4d100.5008733!16s%2Fg%2F1hc5wx3dm?entry=ttu"
                      target="_blank"
                    >
                      Bandar Laguna Merbok, Sungai Petani, Kedah
                    </a>
                  </p>
                </div>
              </div>

              {/* <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
            >
              <div className="flex flex-row">
                <div className="flex flex-col justify-center items-end pr-5">
                  <span className="text-5xl font-semibold ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={new Date().getFullYear() - 2015}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    +
                  </span>
                  <h2 className="text-lg font-medium text-dark/75">年经验</h2>
                  <h2 className="text-lg font-medium text-dark/75">
                    Years of Experiences
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-end pl-5">
                  <span className="text-5xl font-semibold ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={2000}
                        duration={1}
                        delay={0}
                      ></CountUp>
                    )}
                    +
                  </span>
                  <h2 className="text-lg font-medium text-dark/75">顾客</h2>
                  <h2 className="text-lg font-medium text-dark/75">Clients</h2>
                </div>
              </div>
            </ScrollTrigger> */}

              <div
                className="flex items-center space-x-4 pt-10 
              md:pt-0 md:justify-center"
              >
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
        </div>
      </div>
    </>
  );
};

export default Introduce;
