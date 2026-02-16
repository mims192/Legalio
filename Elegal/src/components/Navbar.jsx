import React from 'react'

function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 z-50">

    
      <div className='flex justify-between items-center px-8 py-4'>
        <h1 className='text-2xl font-bold text-blue-900 cursor-pointer'>Legalio.</h1>
        <div className='flex items-center space-x-8 text-gray-700 font-medium"'>
          <h2 className="hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
            Find a Lawyer
          </h2>
          <h2 className=" hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
            For Lawyers
          </h2>
          <h2 className="hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
            Signup
          </h2>
          <h2 className="hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
            Login
          </h2>

        </div>
      </div>
    
    </nav>
  )
}

export default Navbar
