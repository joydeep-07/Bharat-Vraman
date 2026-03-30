import React from "react";
import CircleCursor from "./CircleCursor";
// import HandCursor from "./HandCursor";

const Banner = () => {
  return (
    <>
      <div
        id="blogban"
        className="min-h-screen flex pb-20 flex-col items-center pt-10"
      >
        <div className="mt-10 sm:mt-15 p-5 flex flex-col pb-15 justify-center items-center text-center">
          <h1
            id="blogtext"
            style={{ fontFamily: "karatone" }}
            className="
            text-[38px]
            sm:text-[60px]
            md:text-[80px]
            lg:text-[100px]
          "
          >
            Discover India’s Sacred Temples
          </h1>

          <p
            className="
            text-center 
            text-base sm:text-lg md:text-xl 
            max-w-4xl
            mt-4
          "
          >
            Explore the rich heritage, spiritual significance, rituals, and
            timeless traditions of temples across India in one unified platform.
          </p>
        </div>

        {/* MAIN BANNER */}
        <div
          id="ban"
          className="
          h-auto md:h-[500px] 
          flex flex-col md:flex-row 
          px-6 sm:px-10 md:px-25 
          text-[#fffceb] 
          bg-neutral-900
          pb-10
        "
        >
          {/* LEFT SIDE */}
          <div className="left w-full md:w-1/2">
            <p className="mt-6 md:mt-10 p-3 pl-0 md:py-5 text-xs">
              India Temple Heritage Portal
            </p>

            <div className="flex flex-col sm:flex-row">
              <img
                className="h-50 sm:h-48 pr-0 sm:pr-6 mb-4 sm:mb-0"
                src="https://framerusercontent.com/images/Jq9CvZn5nyua3F6GHd8cdtsLduo.png?scale-down-to=512&width=2590&height=1884"
                alt=""
              />

              <h1
                style={{ fontFamily: "karatone", lineHeight: 1 }}
                className="
                text-[32px] 
                sm:text-[42px] 
                md:text-[50px]
              "
              >
                Explore Sacred <br /> Places with Deep <br /> Spiritual <br />{" "}
                Significance
              </h1>
            </div>

            <p className=" md:py-5 mt-2 text-sm sm:text-base">
              Discover ancient temples, their history, rituals, and cultural
              importance while planning your spiritual journey with ease.
            </p>

            <button className="py-2 px-5 mt-5 ml-0 border border-neutral-400/20 rounded-full bg-neutral-800 text-sm sm:text-base">
              Explore Temples
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="right w-full md:w-1/2 sm:p-6 pt-5 md:p-10 md:pt-20">
            <h1
              style={{ fontFamily: "karatone", lineHeight: 1 }}
              className="
              text-[30px]
              sm:text-[38px]
              md:text-[48px]
            "
            >
              Festivals, Rituals & <br />
              Pilgrimage Routes <br />
              Across India
            </h1>

            <p className="md:py-5 mt-6 md:mt-20 text-sm sm:text-base">
              Get detailed insights into temple festivals, darshan timings,
              nearby attractions, and essential travel guidance for devotees and
              explorers.
            </p>

            <button className="py-2 px-5 mt-5 ml-0 border border-neutral-400/20 rounded-full bg-neutral-800 text-sm sm:text-base">
              View Details
            </button>
          </div>
        </div>

        {/* TITLE BELOW BANNER */}
      </div>

      <CircleCursor targetId="blogban" hoverId="blogtext" />
      {/* <HandCursor targetId="ban" /> */}
    </>
  );
};

export default Banner;
