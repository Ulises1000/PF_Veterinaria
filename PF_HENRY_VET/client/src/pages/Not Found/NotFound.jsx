import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const NotFound = () => {
  return (
    <div className="bg-patas flex w-screen items-center justify-center h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-40 h-40 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>

          <h1 className="font-Fredoka font-extrabold text-9xl mt-5">404</h1>
        </div>
        <h1 className="font-Fredoka mb-2 font-bold text-7xl">Page not Found</h1>
        <p className="font-Fredoka mb-5 text-3xl">
          We´re sorry, the page requested could not be found.
        </p>
        <p className="font-Fredoka mb-5 text-2xl">
          Please go back to the Homepage
        </p>
        <Link to="/home">
        <button className="bg-violet-200 hover:bg-violet-100 font-medium rounded-lg p-2">
          Back Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
