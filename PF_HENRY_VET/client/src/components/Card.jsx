import React from 'react'

const Card = ({ image, nombre, precio }) => {


    return (
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg mr-3 mt-4 cursor-pointer">
            <img src={image} alt="product" className="w-full h-48 object-cover"/>
            <h2 style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: '200px',
            }} className="text-lg font-semibold mt-2">{nombre}</h2>
            <p className="text-gray-700 mt-2">${precio}</p>
        </div>


    )
}

export default Card
