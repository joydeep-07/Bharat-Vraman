import React, { useEffect, useRef } from "react";
import sketch from "../assets/images/rath.jpg";
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
              The Radiance of the Infinite Divine
            </h1>

            <p className="fade-item pb-5 text-justify text-md max-md:text-sm text-neutral-800">
              This verse describes the unimaginable brilliance of the divine
              form revealed to Arjuna during the Vishwaroop Darshan. It tells us
              that even if thousands of suns were to rise together in the sky,
              their combined radiance would still fall short of the infinite
              light and power of the Supreme Being. This is not just a
              description of physical brightness, but a symbol of divine truth,
              cosmic energy, and the boundless nature of existence itself. The
              vision represents a reality beyond human comprehension, where
              time, creation, and destruction coexist within one eternal form.
            </p>

            <h1 className="fade-item font-heading font-medium text-2xl py-5 max-md:text-lg">
              Echoes of Eternal Heritage
            </h1>

            <p className="fade-item pb-5 text-justify text-md max-md:text-sm text-neutral-800">
              In a deeper sense, the verse reminds us of the limitations of
              human perception. What we see and understand is only a fragment of
              a much greater universal reality. The divine light signifies
              knowledge, consciousness, and ultimate truth — something that
              cannot be fully grasped through ordinary senses, but only
              experienced through inner realization. It inspires a feeling of
              awe, humility, and devotion, urging us to look beyond the material
              world and connect with the higher spiritual essence that governs
              all creation.
            </p>
          </div>
          <div></div>
        </div>

        {/* DESKTOP IMAGE (UNCHANGED) */}
        <div className="w-1/3 hidden md:flex justify-end items-center">
          <div className="p-3 border">
            <img className="h-110 border" src={sketch} alt="" />
          </div>
        </div>
      </div>

      {/* Write the meaning here  */}
      <div className="flex gap-10 mt-10 px-6 md:px-0 max-md:flex-col">
        {/* LEFT BOX */}
        <div className="left w-1/2 max-md:w-full ">
          <h2 className="fade-item font-heading font-medium text-2xl py-5 max-md:text-lg">
            The Radiance Beyond Measure
          </h2>
          <p className="fade-item pb-5 text-justify text-md max-md:text-sm text-neutral-800">
            The verse paints a vision so vast and overwhelming that human
            language struggles to contain it. It tells us that even if a
            thousand suns were to rise together in the sky at the same moment,
            flooding the heavens with their combined brilliance, their light
            would still only faintly resemble the radiance of the divine form
            revealed. This is not merely an exaggeration, but a profound attempt
            to express the immeasurable nature of the Supreme a brilliance
            that surpasses all known sources of light, energy, and existence.{" "}
            <br />
            <br />
            In this moment of revelation, the divine is not seen as a limited
            form, but as an infinite presence where creation, preservation, and
            destruction exist simultaneously. The light described here is not
            just physical illumination; it is the very essence of cosmic power,
            the origin of all energy that sustains the universe. Every star,
            every spark of life, every force that moves the cosmos is but a
            fragment of that boundless radiance. <br /> <br /> To witness such a vision
            is to stand before the truth of existence itself a truth so
            intense that it dissolves the boundaries of individuality and
            expands the mind beyond its limits. It is a reminder that what we
            perceive as reality is only a small reflection of a much greater,
            infinite whole. The brilliance of the divine form is therefore not
            just something to be seen, but something that transforms the very
            act of seeing, awakening a deeper awareness of the universe and our
            place within it.
          </p>
        </div>

        {/* RIGHT BOX */}
        <div className="right w-1/2 max-md:w-full">
          <h2 className="fade-item font-heading font-medium text-2xl py-5 max-md:text-lg">
            The Light of Inner Awakening
          </h2>
          <p className="fade-item pb-5 text-justify text-md max-md:text-sm text-neutral-800">
            Beyond its visual grandeur, the verse reveals a deeper spiritual
            truth about understanding and perception. The divine light
            symbolizes knowledge, consciousness, and an ultimate reality that
            lies beyond ordinary human senses. It reminds us that what we
            perceive is only a small fragment of a much greater, infinite
            existence. <br /> <br /> This radiance is not meant to overwhelm, but to
            awaken. Just as light removes darkness, it dispels ignorance and
            reveals deeper truths about unity, purpose, and the interconnected
            nature of all life. It inspires a sense of awe and humility, guiding
            us to look beyond the material world and seek meaning within. <br /> <br />
            Ultimately, the verse is an invitation to transcend ordinary
            perception and connect with the eternal source of existence a
            realization where true understanding and inner awakening begin.
          </p>
        </div>
      </div>

      <CircleCursor targetId={"story"} />
    </div>
  );
};

export default Story;
