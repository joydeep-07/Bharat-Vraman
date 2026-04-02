import React from "react";
import CircleCursor from "./CircleCursor";

const Verse = () => {
  return (
    <>
      <div
        id="verse"
        style={{ lineHeight: "1.4" }}
        className="
          font-hindi 
          text-[2.2vh] 
          sm:text-3xl 
          md:text-4xl 
          lg:text-6xl 
          text-center 
          text-neutral-800 
          w-full 
          px-4
        "
      >
        दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता। <br /> यदि भाः सदृशी सा
        स्याद्भासस्तस्य महात्मनः॥ 
      </div>
      <CircleCursor targetId={"verse"} hoverId={"verse"} />
    </>
  );
};

export default Verse;
