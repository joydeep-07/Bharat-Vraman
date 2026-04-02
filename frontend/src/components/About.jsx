import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/images/ban.jpg";
import vid from '../assets/videos/spritual.mp4'
import CircleCursor from "./CircleCursor";
import CustomCursor from "./CustomCursor";
import { FiPlay } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  const splitTextToSpans = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block opacity-0 translate-y-3 text-[var(--text-secondary)]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = textRef.current.querySelectorAll("span");

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        color: "var(--text-main)",
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.to(textRef.current, {
        backgroundPosition: "200% center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        flex flex-col items-center justify-start 
        py-16 sm:py-20 
        px-4 sm:px-6 
        relative overflow-hidden
        
      "
    >
      {/* Heading */}
      <h1
        id="abouttext"
        className="
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          mb-10 sm:mb-12 
          text-center 
          font-heading
          text-[var(--text-main)]
          relative z-[60]
        "
      >
        About Us
      </h1>

      {/* Image Section */}
      <div className="relative w-full max-w-5xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-10 sm:mb-12">
        {/* <img
          className="
            w-full 
            h-[180px] 
            sm:h-[260px] 
            md:h-[300px] 
            object-cover
          "
          src={img}
          alt="about"
        /> */}

        <video
          id="video1"
          src={vid}
          autoPlay
          loop
          muted
          className="w-full md:h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Animated Text */}
      <div
        ref={textRef}
        style={{
          letterSpacing: "0.03em",
        }}
        className="
          max-w-4xl 
          text-center 
          text-base sm:text-lg md:text-xl 
          font-light 
          leading-relaxed 
          md:leading-loose 
          bg-clip-text text-transparent 
          bg-gradient-to-r 
          from-[var(--text-secondary)] 
          via-[var(--text-main)] 
          to-[var(--text-secondary)]
          [background-size:200%_100%] bg-left
          px-1 sm:px-4
        "
      >
      
        {splitTextToSpans(
          "Welcome to The Art Gallery, a curated collection of exquisite artworks from around the world. Our mission is to connect art enthusiasts with stunning pieces that inspire and captivate. Whether you're an avid collector or a casual admirer, we invite you to explore our diverse range of artworks and discover the stories behind each piece. Thank you for being a part of our artistic journey.",
        )}
      </div>
      <CircleCursor targetId={"about"} hoverId={"abouttext"} noHoverId={"video1"} />
      <CustomCursor icon={FiPlay} targetId="video1" />
    </section>
  );
};

export default About;
