import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup';

function Navbar() {
  const [isSignup,setIsSignup]=useState(false);

  return (
    <>
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 z-50">

      
      <div className='flex justify-between items-center px-8 py-4'>
        <h1 className='text-2xl font-bold text-blue-900 cursor-pointer'>Legalio.</h1>
        <div className='flex items-center space-x-8 text-gray-700 font-medium'>
          <h2 className="hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
             <Link to="/Search">Find Lawyers</Link> 
          </h2>
          <h2 className=" hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
           <Link to="/LawyerRegistration">For Lawyers</Link> 
          </h2>
          <h2 className="hover:text-blue-900 cursor-pointer transition duration-200 font-bold" onClick={()=>{setIsSignup(true)}}>
            Signup
          </h2>
          <h2 className="hover:text-blue-900 cursor-pointer transition duration-200 font-bold">
            Login
          </h2>

        </div>
      </div>
    
    </nav>
    {isSignup && <Signup onClose={()=>{setIsSignup(false)}}/>}
    </>
  )
}

export default Navbar
