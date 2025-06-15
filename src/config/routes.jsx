import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App.jsx'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<h1 className='text-2xl font-bold'>This is a chat page.</h1>} />
    </Routes>
  )
}

export default Approutes