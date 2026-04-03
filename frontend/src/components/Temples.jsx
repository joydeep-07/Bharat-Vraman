import React from "react";
import Footer from "../layouts/Footer";
import temples from "../utils/temples";
import { useNavigate } from "react-router-dom";

const Temples = () => {
  const navigate =  useNavigate();

 const handleNavigate = (slug) => {
   navigate(`/temple/${slug}`);
 };
  return (
    <>
      <div className="flex justify-center items-center p-5 pt-25">
        <div className="w-7xl">
          {/* -------- HEADING -------- */}
          <div>
            {" "}
            <h1
              style={{ lineHeight: 1, letterSpacing: "0.03em" }}
              className="text-neutral-800 text-[50px] font-heading sm:text-[65px] md:text-[80px] leading-none"
            >
              {" "}
              States{" "}
            </h1>{" "}
            <h1
              style={{ lineHeight: 1, letterSpacing: "0.03em" }}
              className="text-neutral-800 font-heading text-[55px] sm:text-[75px] md:text-[90px] leading-none"
            >
              {" "}
              of Matter,{" "}
            </h1>{" "}
            <p className="max-w-md text-md mt-3">
              {" "}
              For more design help, inspiration, and case studies, sign up for
              our newsletter (by signing up, you accept our privacy
              policy).{" "}
            </p>{" "}
          </div>{" "}
          {/* -------- INPUT SECTION -------- */}{" "}
          <div className="pt-7 gap-2 flex flex-col sm:flex-row w-full sm:w-auto">
            {" "}
            <input
              className="p-3 w-full sm:w-xl rounded-[4px] border"
              type="email"
              placeholder="Enter your email"
            />{" "}
            <button className="p-3 bg-neutral-700 text-[#fffceb] hover:bg-neutral-800 rounded-[4px] border">
              {" "}
              Subscribe{" "}
            </button>{" "}
          </div>
          {/* -------- GRID -------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {temples.map((temple) => (
              <div
                onClick={() => handleNavigate(temple.slug)}
                key={temple.id}
                className="group cursor-pointer overflow-hidden transition"
              >
                {/* IMAGE */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={temple.images[0]}
                    alt={temple.name}
                    className="w-full h-full object-top object-cover transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="py-4 px-2">
                  <h2 className="text-xl font-heading tracking-wider font-medium">
                    {temple.name}
                  </h2>
                  <p className="text-sm text-neutral-500">
                    {temple.location.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Temples;
