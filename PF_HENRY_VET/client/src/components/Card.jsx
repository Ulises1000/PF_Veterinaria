import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
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
        <button class="bg-transparent hover:bg-purple text-blue-700 font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded">
          Añadir al Carrito
        </button>
      </div>
    </Link>
  );
};

export default Card;
=======
const Card = ({ id,  url, name, unit_price }) => {

    return (
        <Link to={`/details/${id}`}>
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg mr-3 mt-4 cursor-pointer">
                <img src={url} alt="product" className="w-full h-48 object-cover"/>
                <h2 style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '200px',
                }} className="text-lg font-semibold mt-2">{name}</h2>
                <p className="text-gray-700 mt-2">${unit_price}</p>
            </div>
        </Link>
    )
}

export default Card
>>>>>>> 201a9482652d0229340a5df111c7fee2d24a1ca9
