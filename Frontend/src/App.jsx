import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import LawyerRegistration from './components/LawyerRegistration'
import Signup from './components/Signup'
import ScheduleCall from './components/ScheduleCall'
function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/LawyerRegistration' element={<LawyerRegistration />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/schedule' element={<ScheduleCall />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
