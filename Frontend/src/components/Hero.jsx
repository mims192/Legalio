import React from 'react'

function Hero() {
  return (
        <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-22 text-center">
        
       
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="text-blue-900 ">⚖</span>
          Patna's Most Trusted Legal Network
        </div>


        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
          Professional Legal <br />
          <span className="text-yellow-600">Expertise Simplified.</span>
        </h1>


        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Find and consult with verified top-rated lawyers in Patna.
          Secure, confidential, and expert legal assistance at your fingertips.
        </p>


        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Practice area, location, or lawyer name..."
            className="w-full md:flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <button className="w-full md:w-auto bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition">
            Connect Now
          </button>
        </div>

      </div>
    </section>

  )
}

export default Hero
