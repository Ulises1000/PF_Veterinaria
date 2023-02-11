import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, url, name, unit_price }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg mr-3 mt-4 cursor-pointer">
        <img src={url} alt="product" className="w-full h-48 object-cover" />
        <h2
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "200px",
          }}
          className="text-lg font-semibold mt-2"
        >
          {name}
        </h2>
        <p className="text-gray-700 mt-2">${unit_price}</p>
      </div>
    </Link>
  );
};

export default Card;
