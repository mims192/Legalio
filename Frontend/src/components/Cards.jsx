import React from "react";

const Cards = ({ name, address, expertise = [], description, image }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl gap-6 p-6 shadow-md w-full">
      
      <img
        src={image}
        alt={name}
        className="w-40 h-auto object-cover rounded-xl"
      />

      <div >
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-gray-500">{address}</p>

        <div className="flex  gap-2 mt-2">
          {expertise.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-2 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-3 text-gray-600">{description}</p>

        <button className="mt-4 bg-[#1F2E4A] hover:bg-[#16223A] text-white px-6 py-2 rounded-lg transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Cards;

