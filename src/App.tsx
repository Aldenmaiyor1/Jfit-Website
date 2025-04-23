
import './App.css'
import Home from './pages/Home.js'
import NavBar from "./components/NavBar.js"
import { Routes, Route, Navigate } from 'react-router-dom'
import PhotoGallery from './pages/PhotoGallery.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'

function App() {

  return (
    <>
      <NavBar />

      <Routes >
      
        <Route path="/home" element ={<Home />} />
        <Route path="/gallery" element = {<PhotoGallery />} />
        <Route path="/about" element = {<About /> } />
        <Route path="/contact" element = {<Contact />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}

export default App
