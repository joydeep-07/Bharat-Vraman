import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiMap,
  FiCompass,
  FiCalendar,
  FiBookOpen,
} from "react-icons/fi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hideTimeout = useRef(null);

  // 🔐 Check login
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200) {
        setScrolledEnough(true);
      } else {
        setScrolledEnough(false);
        setShowNavbar(true);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowNavbar(true);
  };

  const handleMouseLeave = () => {
    if (scrolledEnough && !isMobile) {
      hideTimeout.current = setTimeout(() => {
        setShowNavbar(false);
      }, 5000);
    }
  };

  const toggleSidePanel = () => setIsSidePanelOpen(!isSidePanelOpen);
  const closeSidePanel = () => setIsSidePanelOpen(false);
  const handleLinkClick = () => closeSidePanel();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidePanelOpen &&
        !event.target.closest(".side-panel") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        closeSidePanel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidePanelOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-4 sm:px-6 md:px-[70px] z-50 transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-[100%]"
        }`}
        style={{
          backdropFilter: "blur(3px)",
        }}
        onMouseEnter={isMobile ? undefined : handleMouseEnter}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
      >
        <div className="w-full px-2 sm:px-4 md:px-8">
          <div className="flex justify-between items-center h-15 sm:h-18 md:h-20">
            {/* Logo */}
            <div className="text-center cursor-pointer">
              <Link
                to="/"
                className="flex font-hindi font-semibold items-baseline"
              >
                <span
                  className=" text-lg sm:text-xl md:text-3xl pr-1 tracking-tight"
                  style={{ color: "var(--accent-secondary)" }}
                >
                  भारत
                </span>
                <span
                  className=" text-lg sm:text-xl md:text-3xl tracking-wider"
                  style={{ color: "var(--accent-gold)" }}
                >
                  भ्रमण
                </span>
              </Link>

              <p
                className="hidden sm:block text-xs tracking-wide"
                style={{ color: "var(--text-secondary)" }}
              >
                Discovering the divine architecture of India
              </p>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <ul className="flex space-x-8 lg:space-x-12">
                {/* EXISTING LINKS */}
                <li className="group">
                  <Link
                    to="/mythology"
                    className="tracking-wide py-2 text-sm"
                    style={{ color: "var(--text-main)" }}
                  >
                    Mythology
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/explore"
                    className="tracking-wide py-2 text-sm"
                    style={{ color: "var(--text-main)" }}
                  >
                    Explore Temples
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/trip-planner"
                    className="tracking-wide py-2 text-sm"
                    style={{ color: "var(--text-main)" }}
                  >
                    Plan a trip
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/"
                    className="tracking-wide py-2 text-sm"
                    style={{ color: "var(--text-main)" }}
                  >
                    Contact
                  </Link>
                </li>

                {/* NEW AUTH LINKS */}
                {!isLoggedIn ? (
                  <>
                    <li className="group">
                      <Link
                        to="/login"
                        className="tracking-wide py-2 text-sm"
                        style={{ color: "var(--text-main)" }}
                      >
                        Login
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        to="/register"
                        className="tracking-wide py-2 text-sm"
                        style={{ color: "var(--text-main)" }}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="group">
                      <Link
                        to="/dashboard"
                        className="tracking-wide py-2 text-sm"
                        style={{ color: "var(--text-main)" }}
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li className="group">
                      <Link
                        to="/trips"
                        className="tracking-wide py-2 text-sm"
                        style={{ color: "var(--text-main)" }}
                      >
                        My Trips
                      </Link>
                    </li>

                    <li className="group">
                      <Link
                        to="/create-trip"
                        className="tracking-wide py-2 text-sm"
                        style={{ color: "var(--text-main)" }}
                      >
                        Create Trip
                      </Link>
                    </li>

                    <li className="group">
                      <button
                        onClick={handleLogout}
                        className="tracking-wide py-2 text-sm"
                        style={{ color: "var(--text-main)" }}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden mobile-menu-button">
              <button
                onClick={toggleSidePanel}
                className="p-2"
                style={{ color: "var(--accent-secondary)" }}
              >
                {isSidePanelOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Panel */}
      <div
        className={`side-panel fixed bg-[var(--bg-main)] top-0 right-0 h-full w-[70vw] z-50 transform transition-transform duration-300 md:hidden ${
          isSidePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <button
            onClick={closeSidePanel}
            className="absolute top-4 right-4 p-2"
            style={{ color: "var(--accent-secondary)" }}
          >
            <FiX className="w-5 h-5" />
          </button>

          <ul className="flex flex-col space-y-4">
            {[
              { name: "Mythology", icon: FiBookOpen, path: "/mythology" },
              { name: "Explore Temples", icon: FiCompass, path: "/explore" },
              { name: "Plan a trip", icon: FiCalendar, path: "/trip-planner" },
              { name: "Contact", icon: FiMap, path: "/" },

              ...(!isLoggedIn
                ? [
                    { name: "Login", icon: FiMap, path: "/login" },
                    { name: "Register", icon: FiMap, path: "/register" },
                  ]
                : [
                    { name: "Dashboard", icon: FiMap, path: "/dashboard" },
                    { name: "My Trips", icon: FiMap, path: "/trips" },
                    { name: "Create Trip", icon: FiMap, path: "/create-trip" },
                  ]),
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className="flex items-center py-2 text-base"
                  style={{ color: "var(--text-main)" }}
                >
                  <item.icon className="mr-3 w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {isLoggedIn && (
            <button
              onClick={() => {
                handleLogout();
                closeSidePanel();
              }}
              className="mt-4 text-left"
              style={{ color: "var(--text-main)" }}
            >
              Logout
            </button>
          )}

          <div className="mt-auto pb-8">
            <div
              className="pt-6"
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              <p
                className="text-xs text-center"
                style={{ color: "var(--text-secondary)" }}
              >
                Discovering the divine architecture of India
              </p>
            </div>
          </div>
        </div>
      </div>

      {isSidePanelOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{
            background: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(2px)",
          }}
          onClick={closeSidePanel}
        />
      )}
    </>
  );
};

export default Navbar;
