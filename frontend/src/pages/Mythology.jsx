import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/images/virat-rup.jpg";
// import img2 from "../assets/paintings/paint17.jpg";
import img3 from "../assets/images/krishna.jpg";
import img4 from "../assets/images/ban.jpg";
// import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Mythology = () => {
  const horizontalSectionRef = useRef(null);
  const horizontalContentRef = useRef(null);
  const mainTextContentRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 768;

    setIsMobile(checkMobile());
    window.addEventListener("resize", () => setIsMobile(checkMobile()));

    return () =>
      window.removeEventListener("resize", () => setIsMobile(checkMobile()));
  }, []);

  // GSAP horizontal scroll (desktop only)
  useEffect(() => {
    if (isMobile) {
      // Kill GSAP triggers
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Reset transforms
      gsap.set([horizontalContentRef.current, mainTextContentRef.current], {
        x: 0,
        clearProps: "all",
      });

      // Remove GSAP pin spacer
      document.querySelectorAll(".gsap-pin-spacer")?.forEach((el) => {
        el.style.minHeight = "auto";
        el.style.height = "auto";
      });

      return;
    }

    // Desktop GSAP
    const horizontalSection = horizontalSectionRef.current;
    const horizontalContent = horizontalContentRef.current;
    const mainTextContent = mainTextContentRef.current;

    if (!horizontalSection || !horizontalContent || !mainTextContent) return;

    const scrollWidth = horizontalContent.scrollWidth - window.innerWidth;
    const mainTextWidth = mainTextContent.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalSection,
        start: "top top",
        end: `+=${scrollWidth}`,
        pin: true,
        scrub: 0.2,
        anticipatePin: 1,
      },
    });

    tl.to(horizontalContent, { x: -scrollWidth, ease: "none" }).to(
      mainTextContent,
      { x: -mainTextWidth * 1.6, ease: "none" },
      0,
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [isMobile]);

  return (
    <>
      <div className={`${isMobile ? "min-h-screen" : "h-screen"}`}>
        <section
          ref={horizontalSectionRef}
          className={`relative ${
            isMobile
              ? "overflow-y-auto min-h-screen"
              : "h-screen overflow-hidden"
          }`}
        >
          {/* Horizontal (desktop) OR vertical (mobile) */}
          <div
            ref={horizontalContentRef}
            className={`${
              isMobile
                ? "flex flex-col h-auto"
                : "flex h-screen items-center whitespace-nowrap"
            }`}
          >
            {/* Slide 1 */}
            <div
              className={`${
                isMobile
                  ? "min-h-screen w-full flex flex-col items-center justify-center md:py-10 px-6"
                  : "flex-shrink-0 w-screen flex justify-center gap-8 lg:gap-20 px-6 md:px-16 pb-[10vh]"
              }`}
            >
              <div
                className={
                  isMobile
                    ? "w-full max-w-4xl text-center mb-10 mt-15"
                    : "w-5xl p-5"
                }
              >
                <h1
                  className={`${
                    isMobile
                      ? "text-3xl md:text-4xl pt-10"
                      : "text-4xl lg:text-5xl pt-5"
                  } font-heading `}
                >
                  Who I am
                </h1>

                <h2
                  className={`text-neutral-700 pt-10 text-justify ${
                    isMobile
                      ? "text-base md:text-lg max-w-6xl mx-auto"
                      : "text-lg lg:text-md max-w-6xl whitespace-normal"
                  }`}
                >
                  I’ve been painting for 17 years, growing through countless
                  canvases, styles, and inspirations. This long artistic journey
                  shaped the way I observe the world and nurtured my sense of
                  detail, composition, and storytelling. Alongside my art, I
                  built a strong foundation in technology, which allows me to
                  approach product development with both creativity and
                  structure.
                </h2>
                <h2
                  className={`text-neutral-700 pt-5 text-justify ${
                    isMobile
                      ? "text-base md:text-lg max-w-6xl mx-auto"
                      : "text-lg lg:text-md max-w-6xl whitespace-normal"
                  }`}
                >
                  I’ve led and mentored design teams, collaborated across
                  departments, and acted as a bridge between stakeholders,
                  users, and developers. My goal is always to create experiences
                  that are visually engaging, intuitive to use, and aligned with
                  a strong strategic vision. Art taught me expression;
                  technology taught me execution and together, they define the
                  way I work.
                </h2>
              </div>

              <div className={`${isMobile ? "mt-8" : ""} p-3 border`}>
                <img
                  className={`${
                    isMobile ? "h-auto w-full max-w-md" : "h-80 lg:h-110"
                  } p-3 border`}
                  src={img1}
                  alt="art"
                />
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className={`${
                isMobile
                  ? " w-full flex flex-col items-center justify-center py-10 px-6"
                  : "flex-shrink-0 flex justify-center gap-8 lg:gap-16 md:px-50 md:pb-40"
              }`}
            >
              <div
                className={
                  isMobile ? "w-full max-w-6xl text-center mb-10" : " w-6xl"
                }
              >
                <h1
                  style={{ fontFamily: "continental" }}
                  className={`${
                    isMobile
                      ? "text-2xl md:text-3xl pt-10"
                      : "text-3xl lg:text-4xl pt-5"
                  }font-heading`}
                >
                  My development Journey
                </h1>

                <div
                  className={`pt-8 lg:pt-10 ${
                    isMobile ? "flex flex-col gap-6" : "flex gap-6 lg:gap-10"
                  }`}
                >
                  <h2
                    className={`text-neutral-700 text-justify ${
                      isMobile
                        ? "text-base md:text-lg max-w-4xl mx-auto"
                        : "text-lg lg:text-md max-w-xl whitespace-normal"
                    }`}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Unde sed eligendi quia laborum temporibus voluptate
                    voluptatum odit quae obcaecati corrupti debitis labore, at
                    magnam quod ea, in vitae asperiores ut aliquam consectetur
                    quas non delectus quidem voluptas? Labore reiciendis qui
                    obcaecati facere amet veritatis porro est suscipit optio
                    dolore similique sint aut aliquam ipsum, corporis magni
                    molestiae sequi, provident ea eos distinctio laudantium!
                    Fugit distinctio quaerat repudiandae libero reprehenderit
                    enim!
                  </h2>

                  <h2
                    className={`text-neutral-700 text-justify ${
                      isMobile
                        ? "text-base md:text-lg max-w-4xl mx-auto"
                        : "text-lg lg:text-md max-w-lg whitespace-normal"
                    }`}
                  >
                    I've been designing for 17 years. My background in art and
                    technology allows me to flexibly manage the product
                    development process. I've led design teams, building bridges
                    between stakeholders, users, and team members.
                  </h2>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className={`${
                isMobile
                  ? "min-h-screen w-full flex flex-col items-center justify-center md:py-10 px-6"
                  : "flex-shrink-0 w-screen flex justify-center gap-12 lg:gap-25 px-6 md:px-16 pb-40"
              }`}
            >
              {isMobile && (
                <div className="p-3 border mb-8">
                  <img
                    className="h-auto w-full max-w-md p-3 border"
                    src={img3}
                    alt="art"
                  />
                </div>
              )}

              <div className={isMobile ? "w-full max-w-4xl text-center" : ""}>
                <div className="flex md:gap-10">
                  <div>
                    {!isMobile && (
                      <div className="p-3 border">
                        <img
                          className="h-80 lg:h-110 p-3 border"
                          src={img3}
                          alt="art"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <h1
                      style={{ fontFamily: "continental" }}
                      className={`${
                        isMobile
                          ? "text-2xl md:text-3xl pt-5"
                          : "text-3xl lg:text-4xl pt-10"
                      } font-heading`}
                    >
                      Lorem ipsum dolor, sit adipisicing ?
                    </h1>

                    <h2
                      className={`text-neutral-700 text-justify ${
                        isMobile
                          ? "pt-6 text-base md:text-lg max-w-2xl mx-auto"
                          : "pt-6 lg:pt-10 text-lg lg:text-md max-w-4xl whitespace-normal"
                      }`}
                    >
                      I've been designing for 17 years. My background in art and
                      technology allows me to flexibly manage the product
                      development process. I've led design teams, building
                      bridges between stakeholders, users, and team members.
                    </h2>

                    <h2
                      className={`text-neutral-700 text-justify ${
                        isMobile
                          ? "pt-6 text-base md:text-lg max-w-2xl mx-auto"
                          : "pt-5 text-lg lg:text-md max-w-4xl whitespace-normal"
                      }`}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad reprehenderit beatae rem, voluptates sequi neque culpa
                      nobis deserunt! Corrupti perferendis sunt recusandae
                      necessitatibus perspiciatis voluptatibus dolore,
                      doloremque laudantium itaque quidem omnis aut odit quia?
                      Minima possimus voluptatem est praesentium porro voluptate
                      fugit corporis pariatur amet cum velit nemo, veritatis,
                      vitae magni et tenetur nesciunt magnam recusandae expedita
                      deserunt dicta. Nesciunt harum nemo facilis quisquam
                      magnam nobis, alias exercitationem soluta quas.
                    </h2>

                    <div className="mt-16">
                      <Link
                        to="/contacts"
                        className="inline-block px-6 py-3 border border-black rounded-md text-sm font-medium tracking-wide hover:bg-neutral-800 hover:text-[#fffceb] transition-all duration-300"
                      >
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main floating text (desktop only) */}
          {!isMobile && (
            <div className="absolute bottom-0 left-0 w-full z-50 overflow-hidden">
              <div ref={mainTextContentRef} className="flex whitespace-nowrap">
                <h1 className="text-6xl lg:text-8xl font-heading leading-1.3 xl:text-[20vh] font-bold text-neutral-800 inline-block ml-6">
                  I can create Experience that tells a Story
                </h1>
              </div>
            </div>
          )}
        </section>
      </div>
      <div className="md:hidden pt-30">{/* <Footer /> */}</div>
    </>
  );
};

export default Mythology;
