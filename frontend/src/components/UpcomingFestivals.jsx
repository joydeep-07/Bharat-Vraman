import React, { useEffect, useState } from "react";
import festivalsData from "../utils/festivals";
import { useNavigate } from "react-router-dom";

const monthOrder = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const UpcomingFestivals = () => {
  const [upcoming, setUpcoming] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth();

    const allFestivals = festivalsData.flatMap((monthObj) =>
      monthObj.festivals.map((festival) => ({
        ...festival,
        month: monthObj.month,
        monthIndex: monthOrder[monthObj.month],
      })),
    );

    const filtered = allFestivals
      .filter((f) => f.monthIndex >= currentMonthIndex)
      .sort((a, b) => a.monthIndex - b.monthIndex);

    setUpcoming(filtered);
  }, []);

  return (
    <div className="pb-16 bg-[var(--bg-main)] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 HEADER */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-[0.3em] opacity-70">
            Festivals
          </h3>

          <div className="mt-2 mb-6 h-[1px] w-12 bg-[var(--accent-primary)]" />

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            Upcoming{" "}
            <span className="text-[var(--accent-primary)]">Festivals</span>
          </h1>
        </div>

        {/* 🔥 LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-[var(--border-light)]">
          {upcoming.map((fest, i) => (
            <div
              key={fest.id}
              onClick={() => navigate(`/festival/${fest.slug}`)}
              className="group flex items-start justify-between gap-6 py-6 px-2 border-b border-[var(--border-light)] cursor-pointer transition hover:bg-[var(--bg-secondary)]"
            >
              {/* LEFT */}
              <div>
                <h2 className="text-lg sm:text-xl font-medium group-hover:text-[var(--accent-primary)] transition">
                  {fest.title}
                </h2>

                <p className="text-sm opacity-60 mt-1 max-w-sm">
                  {fest.shortDescription}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-sm opacity-60 group-hover:opacity-100 transition whitespace-nowrap">
                {fest.month}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingFestivals;
