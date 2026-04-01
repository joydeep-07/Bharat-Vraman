import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sketch from "../assets/images/virat-rup.jpg";
import CircleCursor from "./CircleCursor";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      // KEEP DESKTOP PIN AS IT IS
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="exp"
      ref={sectionRef}
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
          ref={contentRef}
          className="
            overflow-y-scroll w-2/3 p-5

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

      <CircleCursor targetId={"exp"} hoverId={"exptext"} />
    </div>
  );
};

export default Story;
