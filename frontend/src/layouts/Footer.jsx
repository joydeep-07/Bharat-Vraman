import React from "react";
import { Link } from "react-router-dom";
import tree from "../assets/images/temple.png";
import { IoMailOutline, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="h-auto md:h-[250px] flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center px-4">
        <div>
          <img src={tree} className="h-40 md:h-50" alt="" />
        </div>

        <div className="text-center md:text-left px-2 md:px-0">
          <h2 className="max-w-md text-neutral-800 text-sm">
            They say happiness is when you plant a tree for your grandchildren
            to rest under. Let me know if this approach resonates with you.
          </h2>

          <div className="flex text-neutral-800 flex-col md:flex-row gap-3 md:gap-10 text-xs pt-5">
            <div className="flex  justify-center md:justify-start items-center gap-2">
              <IoMailOutline />
              <h3 className="break-all">joydeeprnp8821@gmail.com</h3>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2">
              <IoLogoLinkedin />
              <h3>/ Linkedin</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="p-5 bg-neutral-900 flex flex-col items-center gap-4 border-t border-neutral-800 mt-6 md:mt-0">
        {/* Hide navigation on mobile */}
        <nav className="hidden md:flex text-sm text-gray-100 gap-8">
          <Link
            to="/are/we/working"
            className="hover:text-gray-300 transition-colors"
          >
            Who are we?
          </Link>

          <Link
            to="/collections"
            className="hover:text-gray-300 transition-colors"
          >
            States of Matter
          </Link>

          <Link
            to="/contacts"
            className="hover:text-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <div className="w-full hidden md:flex h-[1px] bg-neutral-800"></div>

        <p className="text-[10px] md:text-xs text-center text-gray-400 leading-relaxed px-3">
          This website only uses essential cookies. We do not use tracking or
          advertising cookies. Read more in our privacy policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
