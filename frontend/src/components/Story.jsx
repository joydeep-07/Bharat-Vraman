import React, { useEffect, useRef } from "react";
import sketch from "../assets/images/virat-rup.jpg";
import CircleCursor from "./CircleCursor";
import Verse from "./Verse";

const Story = () => {
 
  return (
    <div
      id="story"
     
      className=" relative max-md:h-auto max-w-8xl md:px-20 mx-auto max-md:pb-10"
    >
      {/* LEFT SIDE (UNCHANGED DESKTOP, FIXED MOBILE) */}

      {/* MOBILE IMAGE */}
      <div className="mt-5 hidden max-md:flex justify-center px-4">
        <div className="border p-2 w-full">
          <img className="w-full h-auto border" src={sketch} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex max-xl:right-10 max-lg:right-5

          max-md:flex-col 
          max-md:px-4
          max-md:gap-6
        "
      >
        {/* TEXT CONTENT */}
        <div
          
          className="
            overflow-y-scroll w-2/3

            max-lg:w-[600px]

            max-md:w-full 
            max-md:h-auto 
            max-md:overflow-visible
            max-md:p-2
          "
        >
          <div>
            <h1 className="fade-item font-heading font-medium text-2xl py-5 max-md:text-lg">
              The Essence of Visual Storytelling
            </h1>

            <p className="fade-item pb-5 text-justify text-md max-md:text-sm text-neutral-800">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, omnis velit magnam id, voluptatum dolorem unde totam veniam blanditiis qui repellendus quo at error natus consequuntur dignissimos cum, saepe harum delectus deleniti alias nemo! Voluptas optio, obcaecati aspernatur accusamus autem facilis suscipit labore quidem porro, totam quisquam, iure nihil quibusdam ab velit deleniti placeat natus. Modi, similique ipsa aspernatur eos voluptates aut quia odit sunt at facere. Inventore est animi, nesciunt magnam sequi perspiciatis dicta adipisci iste harum, provident consequatur voluptatum iusto distinctio in eveniet suscipit quo nobis aperiam magni quam id odit recusandae iure. Impedit illum aperiam in at?
            </p>

            <h1 className="fade-item font-heading font-medium text-2xl py-5 max-md:text-lg">
              The Value of Antique Art & Cultural Heritage
            </h1>

            <p className="fade-item pb-5 text-justify text-md max-md:text-sm text-neutral-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quia quod nisi tenetur a nesciunt labore at magnam quos alias dolorem quisquam officia vel praesentium nostrum id debitis ratione fuga! Impedit, nobis temporibus corporis laboriosam odio totam incidunt aliquid doloribus dolore velit eligendi saepe omnis animi. Ut enim deserunt commodi!
            </p>
          </div>
        </div>

        {/* DESKTOP IMAGE (UNCHANGED) */}
        <div className="w-1/3 hidden md:flex justify-end items-center">
          <div className="p-3 border">
            <img className="h-110 border" src={sketch} alt="" />
          </div>
        </div>
      </div>

      <CircleCursor targetId={"story"} />
    </div>
  );
};

export default Story;
