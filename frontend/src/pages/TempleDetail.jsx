import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { templeAPI } from "../api/endpoints";
import Footer from "../layouts/Footer";

const TempleDetail = () => {
  const { slug } = useParams();
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        setLoading(true);
        const res = await templeAPI.getBySlug(slug);
        setTemple(res.data);
      } catch (error) {
        console.error("Temple fetch error", error);
        setTemple(null);
      } finally {
        setLoading(false);
      }
    };
    fetchTemple();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-heading text-neutral-600">
        Discovering divine details...
      </div>
    );
  }

  if (!temple) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-heading text-neutral-800 mb-4">Temple not found</h2>
        <Link to="/explore" className="text-amber-600 hover:text-amber-800 underline">Back to Explore</Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 min-h-screen">
        {/* -------- TITLE & IMAGE -------- */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-start">
          {temple.images && temple.images[0] && (
            <img
              src={temple.images[0]}
              alt={`${temple.name} view 1`}
              className="w-full md:w-[45%] h-64 sm:h-80 md:h-96 object-cover object-top rounded-xs shadow-md transition duration-500"
            />
          )}

          <div className="mt-4 md:mt-10 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading mb-2 text-neutral-800">
              {temple.name}
            </h1>
            <p className="text-sm text-neutral-500 mb-2 font-medium uppercase tracking-widest">
              {temple.templeType} | Built: {temple.established}
            </p>
            <p className="text-sm text-amber-700 font-semibold mb-6 flex items-center">
              📍 {temple.city}, {temple.state}
            </p>
            
            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {temple.darshanTimings && (
                 <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                   🕒 {temple.darshanTimings}
                 </span>
              )}
               {temple.deityInformation && (
                 <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                   🕉️ {temple.deityInformation}
                 </span>
              )}
              {temple.festivals && temple.festivals.length > 0 && (
                 <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                   🎉 {temple.festivals.length} Festivals
                 </span>
              )}
            </div>
          </div>
        </div>

        {/* -------- CONTENT SPLIT -------- */}
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          
          {/* Main Info Columns */}
          <div className="w-full lg:w-2/3 space-y-12">
            
            {/* About */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-neutral-800 border-b border-amber-200 pb-2">
                About the Temple
              </h2>
              {temple.description ? (
                <p className="text-md leading-relaxed text-neutral-700 text-justify whitespace-pre-line">
                  {temple.description}
                </p>
              ) : (
                <p className="text-neutral-400 italic">No description available.</p>
              )}
            </section>

            {/* Historical Background */}
            {temple.historicalBackground && (
              <section>
                <h2 className="text-2xl font-heading mb-4 text-neutral-800 border-b border-amber-200 pb-2">
                  Historical Background
                </h2>
                <p className="text-md leading-relaxed text-neutral-700 text-justify whitespace-pre-line">
                  {temple.historicalBackground}
                </p>
              </section>
            )}

            {/* Rituals & Schedule */}
            {temple.rituals && (
              <section>
                <h2 className="text-2xl font-heading mb-4 text-neutral-800 border-b border-amber-200 pb-2">
                  Rituals & Daily Pooja
                </h2>
                <p className="text-md leading-relaxed text-neutral-700 whitespace-pre-line">
                  {temple.rituals}
                </p>
              </section>
            )}
            
            {/* Festivals */}
            {temple.festivals && temple.festivals.length > 0 && (
              <section>
                <h2 className="text-2xl font-heading mb-4 text-neutral-800 border-b border-amber-200 pb-2">
                  Festivals
                </h2>
                <ul className="list-disc list-inside text-md leading-relaxed text-neutral-700">
                  {temple.festivals.map((festival, idx) => (
                    <li key={idx}>{festival}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Visitor Guidelines */}
            {temple.visitorGuidelines && (
               <section className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h2 className="text-xl font-heading mb-3 text-amber-900 flex items-center">
                  <span className="mr-2">📜</span> Visitor Guidelines
                </h2>
                <p className="text-sm leading-relaxed text-neutral-700 font-medium">
                  {temple.visitorGuidelines}
                </p>
              </section>
            )}

            {/* Nearby Facilities */}
            {temple.nearbyFacilities && (
               <section className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                <h2 className="text-xl font-heading mb-3 text-stone-900 flex items-center">
                  <span className="mr-2">🏨</span> Nearby Facilities
                </h2>
                <p className="text-sm leading-relaxed text-neutral-700 font-medium">
                  {temple.nearbyFacilities}
                </p>
              </section>
            )}
            
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
             {/* Side Images */}
            {temple.images && temple.images[1] && (
              <img
                src={temple.images[1]}
                alt={`${temple.name} view 2`}
                className="w-full h-64 object-cover object-top rounded-xs shadow-md transition duration-500 hover:scale-[1.02]"
              />
            )}
            {temple.images && temple.images[2] && (
              <img
                src={temple.images[2]}
                alt={`${temple.name} view 3`}
                className="w-full h-64 object-cover object-top rounded-xs shadow-md transition duration-500 hover:scale-[1.02]"
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TempleDetail;
