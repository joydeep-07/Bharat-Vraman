import React from "react";
import CircleCursor from "./CircleCursor";

const Hero = () => {

  return (
    <>
      <div
        id="hero"
        className="md:min-h-screen min-h-[48vh] flex flex-col items-center pt-22 justify-center relative overflow-hidden"
      >
        <div className="text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative">
          {/* MAIN HEADING - No animation, no ref */}
          <div
            id="bigtext"
            className="            
              text-[10vw] 
              md:text-[14.8vh] 
              leading-none
            "
          >
            <div className="overflow-hidden">
              <span className="block font-heading">
                India's temple Heritage
              </span>
            </div>

            <div className="overflow-hidden">
              <span className="block font-heading">& Pilgrimage</span>
            </div>
          </div>

          {/* SEPARATOR */}
          <div className="flex items-center justify-center my-6 sm:my-10 md:my-12">
            <div className="w-8 sm:w-10 md:w-12 h-px bg-[var(--border-light)]"></div>
            <div className="w-2 h-2 border border-[var(--border-light)] rounded-full mx-3 sm:mx-4"></div>
            <div className="w-8 sm:w-10 md:w-12 h-px bg-[var(--border-light)]"></div>
          </div>

          {/* SUBTITLE */}
          <p
            className="
              text-[var(--text-secondary)]
              text-[clamp(14px,4vw,24px)]
              max-w-3xl mx-auto
              tracking-tight 
              mb-8 sm:mb-10 md:mb-12
            "
          >
            Festivals, Rituals & Pilgrimage Routes Across India.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 sm:mt-12">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[var(--text-secondary)] text-xs tracking-widest uppercase">
              Scroll
            </span>
          </div>
        </div>
      </div>

      <CircleCursor targetId={"hero"} hoverId={"bigtext"} />
    </>
  );
};

export default Hero;
