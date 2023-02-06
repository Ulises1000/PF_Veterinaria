import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getAllProducts } from "../redux/action/index.jsx";
import Characteristic from "./Characteristic";

function Searchbar() {
  const dispatch = useDispatch()

  const [nameSearch, setNameSearch] = useState("");

  function handleChange(e) {
    setNameSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getAllProducts(nameSearch))
    console.log(nameSearch);
    setNameSearch("");
    e.target.placeholder = "Search...";
  }
  return (
    <div className="fixed w-full mt-20 h-14 z-30 bg-violet-100">
      <form
        id="Form"
        className="focus:border focus:bg-red-400 focus:border-red-500"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex mb-6 px-2">
          <input
            type="text"
            onChange={handleChange}
            value={nameSearch}
            className="bg-violet-100 px-6 text-gray-600 text-sm w-full focus:outline-none focus:text-gray-700 placeholder:focus:text-gray-700 placeholder:focus:font-medium focus:font-medium"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="flex items-center py-4 px-3  text-gray-600 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 items-center text-gray-600 hover:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </form>
      <Characteristic />
    </div>
  );
}

export default Searchbar;
