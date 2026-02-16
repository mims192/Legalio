import React, { useState } from "react";
import Cards from "./Cards";

const Users = [
  {
    name: 'Riya',
    address: 'DSE Bangalore',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQH_5kIV-0JzTg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715940830277?e=1772668800&v=beta&t=ItUJvBuMuFlA7EuOix46zWLwfMNCqhMD55bDfj2g93s',
    description: 'Aspiring Full Stack Developer,passionate about building dynamic and user-friendly web applications. ',
    expertise: ["Civil Law", "Property Law"]
  },
  {
    name: 'Prateek Singh',
    address: 'HSR Bangalore',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    description: 'Senior advocate with over 15 years of experience in civil and property disputes at Patna High Court.',
    expertise: ["Frontend Engineer", "UI Engineer"]
  },
    {
    name: 'Prateek Singh',
    address: 'HSR Bangalore',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    description: 'Senior advocate with over 15 years of experience in civil and property disputes at Patna High Court.',
    expertise: ["Frontend Engineer", "UI Engineer"]
  }
]



const SearchPage= () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">

      {/* ================= HERO SECTION ================= */}
      <div className="bg-[#1F2E4A] text-white pt-16 pb-24 px-6 rounded-b-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-8">
            Find the Right Lawyer in Patna
          </h1>

          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search by name or location (e.g., Kankarbagh)"
              className="flex-1 px-6 py-4 text-gray-700 focus:outline-none"
            />

            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-4 bg-[#1F2E4A] hover:bg-gray-200 border-l"
            >
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* ================= LAWYER LIST ================= */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-serif mb-6">4 Lawyers Found</h2>
        <div className="flex flex-wrap items-center flex-col md:flex-row gap-[10px]">
          {Users.map((item,index) => {
            return (
              <Cards
              key={index}
              name={item.name}
              address={item.address}
              image={item.image}
              description={item.description}
              expertise={item.expertise}    
              />
            )
          })}
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0  bg-opacity-40 z-40"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 h-full flex flex-col">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif">Filter Lawyers</h2>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            Refine your search to find the best match.
          </p>

          <h3 className="font-semibold mb-3">Practice Area</h3>

          <div className="space-y-3 mb-6">
            
            {[
              "Civil Law",
              "Criminal Law",
              "Family Law",
              "Corporate Law",
              "Property Law",
              "Cyber Crime",
              "Taxation",
              "Labor Law",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>

          <h3 className="font-semibold mb-3">Experience</h3>
          <input type="range" className="mb-6" />

          <button className="mt-auto bg-[#1F2E4A] text-white py-3 rounded-lg">
            Apply Filters
          </button>
        </div>
      </div>

    </div>
  );
}

export default SearchPage;