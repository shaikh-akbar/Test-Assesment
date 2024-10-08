import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewsHeadlines from './components/Home'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <NewsHeadlines/>
    </div>
    </>
  )
}

export default App
