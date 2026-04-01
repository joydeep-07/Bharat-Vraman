import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/images/virat-rup.jpg";
import img3 from "../assets/images/krishna.jpg";
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
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl.to(horizontalContent, { x: -scrollWidth, ease: "none" }).to(
      mainTextContent,
      { x: -mainTextWidth * 1.2, ease: "none" },
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
                  The Virat Roop of Shri Krishna
                </h1>

                <h2
                  className={`text-neutral-700 pt-10 text-justify ${
                    isMobile
                      ? "text-base md:text-lg max-w-6xl mx-auto"
                      : "text-lg lg:text-md max-w-6xl whitespace-normal"
                  }`}
                >
                  During the great war of Kurukshetra in the Mahabharata, Lord
                  Krishna revealed his Vishwaroop (Virat Roop) to Arjuna. In
                  this divine form, Krishna manifested himself as the entire
                  universe infinite faces, countless eyes, blazing like a
                  thousand suns, containing all creation within him.
                </h2>
                <h2
                  className={`text-neutral-700 pt-5 text-justify ${
                    isMobile
                      ? "text-base md:text-lg max-w-6xl mx-auto"
                      : "text-lg lg:text-md max-w-6xl whitespace-normal"
                  }`}
                >
                  Arjuna witnessed time itself within Krishna, the past,
                  present, and future unfolding simultaneously. He saw warriors
                  entering the fiery mouths of the Lord, symbolizing destiny and
                  destruction. Overwhelmed and humbled, Arjuna realized Krishna
                  was not just his charioteer, but the Supreme Being beyond
                  human comprehension.
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
                  : "flex-shrink-0 flex justify-center gap-8 lg:gap-16 md:px-50 md:pb-70"
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
                  The Teachings of the Bhagavad Gita
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
                    On the battlefield of Kurukshetra, Arjuna was filled with
                    doubt and sorrow, unwilling to fight against his own kin. It
                    was then that Lord Krishna imparted the eternal wisdom of
                    the Bhagavad Gita — a dialogue that transcends time, guiding
                    humanity on duty, righteousness, and the nature of life
                    itself.
                  </h2>

                  <h2
                    className={`text-neutral-700 text-justify ${
                      isMobile
                        ? "text-base md:text-lg max-w-4xl mx-auto"
                        : "text-lg lg:text-md max-w-lg whitespace-normal"
                    }`}
                  >
                    Krishna taught that one must perform their duty (Dharma)
                    without attachment to results. He revealed the paths of
                    Karma (action), Bhakti (devotion), and Jnana (knowledge),
                    showing that true liberation comes from surrendering to the
                    divine and understanding one's higher purpose.
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
                      The Eternal Cycle of Dharma
                    </h1>

                    <h2
                      className={`text-neutral-700 text-justify ${
                        isMobile
                          ? "pt-6 text-base md:text-lg max-w-2xl mx-auto"
                          : "pt-6 lg:pt-10 text-lg lg:text-md max-w-4xl whitespace-normal"
                      }`}
                    >
                      Whenever righteousness declines and chaos rises, the
                      divine manifests to restore balance. This eternal promise
                      of Lord Krishna reflects the cyclical nature of time,
                      where good and evil continuously shape the destiny of the
                      world.
                    </h2>

                    <h2
                      className={`text-neutral-700 text-justify ${
                        isMobile
                          ? "pt-6 text-base md:text-lg max-w-2xl mx-auto"
                          : "pt-5 text-lg lg:text-md max-w-4xl whitespace-normal"
                      }`}
                    >
                      From age to age, the preservation of Dharma remains the
                      foundation of cosmic order. The stories of the Mahabharata
                      remind us that even in the darkest moments, truth,
                      courage, and faith ultimately prevail, guided by the
                      unseen hand of the divine.
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
                <h1
                  style={{ lineHeight: 1.7 }}
                  className="text-6xl pt-10 lg:text-8xl font-hindi leading-1.3 xl:text-[12vh] font-bold text-neutral-800 inline-block ml-6"
                >
                  यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य
                  तदात्मानं सृजाम्यहम् ॥ परित्राणाय साधूनां विनाशाय च
                  दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥
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
