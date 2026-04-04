import React from "react";
import { useParams } from "react-router-dom";
import temples from "../utils/temples";
import Footer from "../layouts/Footer";

const TempleDetail = () => {
  const { slug } = useParams();

  const temple = temples.find((t) => t.slug === slug);

  if (!temple) {
    return <div className="p-10 text-xl">Temple not found</div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 py-20">
        {/* -------- TITLE -------- */}
        <h1 className="text-4xl md:text-6xl font-heading mb-2">
          {temple.name}
        </h1>
        <p className="text-neutral-500 mb-6">
          {temple.location.city}, {temple.location.state}
        </p>

        {/* -------- MAIN DESCRIPTION -------- */}
        {temple.description && (
          <p className="text-lg leading-relaxed mb-10 text-justify">
            {temple.description}
          </p>
        )}

        {/* -------- IMAGE GALLERY -------- */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {temple.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={temple.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* -------- QUICK INFO -------- */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Temple Info</h2>
            <p>
              <strong>Deity:</strong> {temple.deity}
            </p>
            <p>
              <strong>Best Time:</strong> {temple.bestTimeToVisit}
            </p>
            <p>
              <strong>Entry:</strong> {temple.entryFee}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {temple.rating}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Location</h2>
            <p>
              {temple.location.city}, {temple.location.state}
            </p>
            {temple.location.nearbyRiver && (
              <p>
                <strong>River:</strong> {temple.location.nearbyRiver}
              </p>
            )}
            {temple.location.hill && (
              <p>
                <strong>Hill:</strong> {temple.location.hill}
              </p>
            )}
          </div>
        </div>

        {/* -------- HISTORY -------- */}
        {temple.historicalInfo && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">History</h2>

            <p>
              <strong>Built:</strong> {temple.historicalInfo.builtIn}
            </p>
            <p>
              <strong>By:</strong>{" "}
              {temple.historicalInfo.builtBy || temple.historicalInfo.dynasty}
            </p>
            <p>
              <strong>Significance:</strong>{" "}
              {temple.historicalInfo.significance}
            </p>

            {/* 🔥 LONG HISTORY PARAGRAPH */}
            {temple.historicalInfo.description && (
              <p className="mt-5 leading-relaxed text-justify text-lg">
                {temple.historicalInfo.description}
              </p>
            )}
          </div>
        )}

        {/* -------- ARCHITECTURE -------- */}
        {temple.architecture && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">Architecture</h2>

            <p>
              <strong>Style:</strong> {temple.architecture.style}
            </p>

            {temple.architecture.notableFeatures && (
              <p>
                <strong>Features:</strong>{" "}
                {temple.architecture.notableFeatures.join(", ")}
              </p>
            )}

            {/* 🔥 OPTIONAL DESCRIPTION */}
            {temple.architecture.description && (
              <p className="mt-4 text-lg leading-relaxed text-justify">
                {temple.architecture.description}
              </p>
            )}
          </div>
        )}

        {/* -------- RITUALS -------- */}
        {temple.rituals && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">Rituals</h2>

            {temple.rituals.dailyAarti && (
              <p>
                <strong>Daily Aarti:</strong>{" "}
                {temple.rituals.dailyAarti.join(", ")}
              </p>
            )}

            {temple.rituals.specialPoojas && (
              <p>
                <strong>Special Poojas:</strong>{" "}
                {temple.rituals.specialPoojas.join(", ")}
              </p>
            )}

            {temple.rituals.description && (
              <p className="mt-4 text-lg leading-relaxed text-justify">
                {temple.rituals.description}
              </p>
            )}
          </div>
        )}

        {/* -------- TIMINGS -------- */}
        {temple.timings && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">Timings</h2>
            <p>Open: {temple.timings.open}</p>
            <p>Close: {temple.timings.close}</p>
          </div>
        )}

        {/* -------- FESTIVALS -------- */}
        {temple.festivals && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">Festivals</h2>
            <p>{temple.festivals.join(", ")}</p>
          </div>
        )}

        {/* -------- FACILITIES -------- */}
        {temple.facilities && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">Facilities</h2>
            <p>{temple.facilities.join(", ")}</p>
          </div>
        )}

        {/* -------- HOW TO REACH -------- */}
        {temple.howToReach && (
          <div className="mt-14">
            <h2 className="text-3xl font-heading mb-4">How to Reach</h2>
            <p>Air: {temple.howToReach.byAir}</p>
            <p>Rail: {temple.howToReach.byRail}</p>

            {temple.howToReach.description && (
              <p className="mt-4 text-lg leading-relaxed text-justify">
                {temple.howToReach.description}
              </p>
            )}
          </div>
        )}

        {/* -------- WEBSITE -------- */}
        {temple.officialWebsite && (
          <div className="mt-14">
            <a
              href={temple.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              Official Website
            </a>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default TempleDetail;
