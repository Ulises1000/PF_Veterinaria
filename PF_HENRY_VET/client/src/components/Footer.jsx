import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-violet-200 flex justify-center text-center lg:text-left">
        
      <div
          className="text-black text-lg font-extrabold font-Fredoka text-center p-4"
        >Only Pets</div>
      <div
          className="text-gray-700 text-center self-center mt-1 border border-black hover:border-gray-200 p-2"
        >
          <Link className="text-gray-800" to="/aboutUs">
            About Us
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
