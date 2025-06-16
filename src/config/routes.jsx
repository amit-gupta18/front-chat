import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App.jsx'
import ChatPage from '../components/ChatPage.jsx'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  )
}

export default Approutes