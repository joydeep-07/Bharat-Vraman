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
        कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br />
        मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
      </div>
      <CircleCursor targetId={"verse"} hoverId={"verse"} />
    </>
  );
};

export default Verse;
