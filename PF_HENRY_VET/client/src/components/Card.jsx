import React from 'react'

const Card = ({ image_url, name, unit_price, breedType, petSize }) => {

    return (
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg mr-3 mt-4 cursor-pointer">
            <img src={image_url} alt="product" className="w-full h-48 object-cover"/>
            <h2 style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: '200px',
            }} className="text-lg font-semibold mt-2">{name}</h2>
            <div className="hidden">
              {breedType.map((breed) => 
              (breed))}
              </div>
              <div className="hidden">
              {petSize.map((size) => 
              (size))}
              </div>
            <p className="text-gray-700 mt-2">${unit_price}</p>
        </div>


    )
}

export default Card
