import React from "react";
import "../../App.css";

const Hero: React.FC = () => {
  return (
    <section className="section-padding flex text-center h-full items-center overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col gap-y-6 sm:items-center">
          <div className="w-full font-satoshi-title font-black text-color-primary uppercase text-large-font">
            <h1 className="sm:text-left sm:pl-[10%] 2xl:pl-[13%] 4xl:pl-[18%]">
              Hi there, I'm
            </h1>
            <h1 className="sm:text-right sm:pr-[10%] 2xl:pr-[13%] 4xl:pr-[18%]">
              Johnny Le.
            </h1>
          </div>
          <p className="max-w-[38ch] font-satoshi text-color-secondary font-medium text-2xl sm:text-center">
            A full-stack developer, student, and cybersecurity enthusiast
            pushing the boundaries of innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
