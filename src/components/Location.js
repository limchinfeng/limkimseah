import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center pb-14 md:pb-10
      
    "
    >
      <h2 className="font-bold text-4xl text-center py-2 text-primary md:text-3xl xs:text-2xl">
        地址
      </h2>
      <h2 className="font-bold text-3xl text-center text-primary md:text-2xl xs:text-xl">
        Where Are We
      </h2>

      <div
        className="flex justify-center items-center py-5
      sm:flex-col sm:gap-1 sm:py-3
      xs:gap-0" 
      >
        <FontAwesomeIcon icon={faLocationDot} className="h-auto w-4 md:w-3" />
        <h2 className="pl-2 underline w-full text-center text-base md:text-sm">
          <a
            href="https://www.google.com.my/maps/place/Lorong+BLM+4%2F6,+Bandar+Laguna+Merbok,+08000+Sungai+Petani,+Kedah/@5.6905809,100.5002073,18.04z/data=!4m6!3m5!1s0x304b29115d37b091:0x7a759e17ab050522!8m2!3d5.6905809!4d100.5008733!16s%2Fg%2F1hc5wx3dm?entry=ttu"
            target="_blank"
          >
            Bandar Laguna Merbok, Sungai Petani, Kedah
          </a>
        </h2>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.0780166536103!2d100.5002073!3d5.6905809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b29115d37b091%3A0x7a759e17ab050522!2sLorong%20BLM%204%2F6%2C%20Bandar%20Laguna%20Merbok%2C%2008000%20Sungai%20Petani%2C%20Kedah!5e0!3m2!1sen!2smy!4v1691800867912!5m2!1sen!2smy"
        className="rounded-2xl border-2 border-solid border-dark border-r-8 border-b-8 p-4
        w-1/2 h-[30rem] 
        xl:w-2/3 
        md:h-[20rem]
        xs:w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
