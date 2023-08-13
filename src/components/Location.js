import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div
      className="flex flex-col justify-center items-center py-24
    "
    >
      <h2 className="font-bold text-5xl text-center py-4 text-primary">
        地址
      </h2>
      <h2 className="font-bold text-4xl text-center text-primary">
        Where Are We
      </h2>
      
                    <div className="flex justify-start items-center text-left py-5">
                <FontAwesomeIcon icon={faLocationDot} className="h-auto w-4" />
                <p className="pl-2 underline">
                  <a
                    href="https://www.google.com.my/maps/place/Lorong+BLM+4%2F6,+Bandar+Laguna+Merbok,+08000+Sungai+Petani,+Kedah/@5.6905809,100.5002073,18.04z/data=!4m6!3m5!1s0x304b29115d37b091:0x7a759e17ab050522!8m2!3d5.6905809!4d100.5008733!16s%2Fg%2F1hc5wx3dm?entry=ttu"
                    target="_blank"
                  >
                    Bandar Laguna Merbok, Sungai Petani, Kedah
                  </a>
                </p>
                </div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.0780166536103!2d100.5002073!3d5.6905809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b29115d37b091%3A0x7a759e17ab050522!2sLorong%20BLM%204%2F6%2C%20Bandar%20Laguna%20Merbok%2C%2008000%20Sungai%20Petani%2C%20Kedah!5e0!3m2!1sen!2smy!4v1691800867912!5m2!1sen!2smy"
        width="600"
        height="450"
        className="rounded-2xl border-2 border-solid border-dark border-r-8 border-b-8 p-4"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
