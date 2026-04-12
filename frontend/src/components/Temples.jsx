import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { templeAPI } from "../api/endpoints";

const Temples = () => {
  const navigate = useNavigate();
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: "", state: "", city: "", deity: "" });

  useEffect(() => {
    fetchTemples();
  }, [filters.state, filters.city, filters.deity]); // Trigger refetch on filter change

  const fetchTemples = async () => {
    try {
      setLoading(true);
      const res = await templeAPI.getAll(filters);
      setTemples(res.data);
    } catch (error) {
      console.error("Failed to fetch temples", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchTemples();
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleNavigate = (slug) => {
    navigate(`/temple/${slug}`);
  };

  return (
    <>
      <div className="flex justify-center items-center p-5 pt-25">
        <div className="w-7xl">
          {/* -------- HEADING -------- */}
          <div>
            <h1
              style={{ lineHeight: 1, letterSpacing: "0.03em" }}
              className="text-neutral-800 font-heading text-[5vh]  md:text-[80px] leading-none"
            >
              Timeless
            </h1>
            <h1
              style={{ lineHeight: 1, letterSpacing: "0.03em" }}
              className="text-neutral-800 font-heading text-[6vh] sm:text-[75px] md:text-[90px] leading-none"
            >
              Temples of India,
            </h1>
            <p className="max-w-md text-md mt-3">
              Explore ancient temples, their history, architecture, and spiritual significance across India
            </p>
          </div>
          
          {/* -------- SEARCH & FILTER SECTION -------- */}
          <div className="pt-7 gap-4 flex flex-col sm:flex-row w-full sm:items-center">
            <input
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="p-3 w-full sm:w-80 rounded-[4px] border border-neutral-800/50 outline-none"
              type="text"
              placeholder="Search for a temple..."
            />
            
            <select
              name="state"
              onChange={handleFilterChange}
              className="p-3 rounded-[4px] border border-neutral-800/50 outline-none bg-white min-w-40"
            >
              <option value="">All States</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Odisha">Odisha</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>

            <select
              name="deity"
              onChange={handleFilterChange}
              className="p-3 rounded-[4px] border border-neutral-800/50 outline-none bg-white min-w-40"
            >
              <option value="">All Deities</option>
              <option value="Shiva">Lord Shiva</option>
              <option value="Vishnu">Lord Vishnu</option>
              <option value="Parvati">Goddess Parvati</option>
            </select>

            <button
              onClick={handleSearch}
              className="p-3 bg-neutral-700 text-[#fffceb] hover:bg-neutral-800 rounded-[4px] border sm:ml-auto"
            >
              Search
            </button>
          </div>

          {/* -------- GRID -------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {loading ? (
              <p className="text-neutral-500 italic">Loading temples...</p>
            ) : temples.length === 0 ? (
              <p className="text-neutral-500 italic">No temples found matching your criteria.</p>
            ) : (
              temples.map((temple) => (
                <div
                  onClick={() => handleNavigate(temple.slug)}
                  key={temple._id}
                  className="group cursor-pointer overflow-hidden transition"
                >
                  {/* IMAGE */}
                  <div className="h-60 overflow-hidden">
                    <img
                      src={temple.images && temple.images[0] ? temple.images[0] : ""}
                      alt={temple.name}
                      className="w-full h-full object-top object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="py-4 px-2">
                    <h2 className="text-xl font-heading tracking-wider font-medium">
                      {temple.name}
                    </h2>
                    <p className="text-sm line-clamp-2 text-neutral-500">
                      {temple.city}, {temple.state}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Temples;
