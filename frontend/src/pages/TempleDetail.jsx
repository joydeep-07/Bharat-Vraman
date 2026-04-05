import React from "react";
import { useParams } from "react-router-dom";
import temples from "../utils/temples";
import Footer from "../layouts/Footer";

const TempleDetail = () => {
  const { slug } = useParams();

  const temple = temples.find((t) => t.slug === slug);

  if (!temple) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-heading">
        Temple not found
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 min-h-screen">
        {/* -------- TITLE & IMAGE -------- */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-start">
          <img
            src={temple.images[0]}
            alt={`${temple.name} view 1`}
            className="w-full md:w-[45%] h-64 sm:h-80 md:h-96 object-cover object-top rounded-xs transition duration-500"
          />

          <div className="mt-4 md:mt-10 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading mb-2 text-neutral-800">
              {temple.name}
            </h1>
            <p className="text-sm text-neutral-500 mb-6 font-medium">
              {temple.templeType} | Established: {temple.established}
            </p>
            <p className="text-sm text-neutral-500 mb-6 text-justify font-medium">
              {temple.state}
            </p>
          </div>
        </div>

        {/* -------- DESCRIPTION + SIDE IMAGES -------- */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Description */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl sm:text-2xl font-heading mb-4 text-neutral-700 border-b pb-2">
              About the Temple
            </h2>

            {temple.description ? (
              <p className="text-sm md:text-md leading-relaxed text-neutral-600 text-justify whitespace-pre-line">
                {temple.description}
              </p>
            ) : (
              <p className="text-neutral-400 italic">
                No description available.
              </p>
            )}
          </div>

          {/* Side Images */}
          <div className="w-full lg:w-1/3 flex flex-col md:mt-10 gap-6">
            <img
              src={temple.images[1]}
              alt={`${temple.name} view 2`}
              className="w-full h-56 sm:h-64 md:h-72 object-cover object-top rounded-xs transition duration-500"
            />

            <img
              src={temple.images[2]}
              alt={`${temple.name} view 3`}
              className="w-full h-56 sm:h-64 md:h-72 object-cover object-top rounded-xs transition duration-500"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TempleDetail;
