
import './App.css'
import Home from './pages/Home.js'
import NavBar from "./components/NavBar.js"
import { Routes, Route, Navigate } from 'react-router-dom'
import PhotoGallery from './pages/PhotoGallery.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import TextCarousel from './components/TextCarousel.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <NavBar />
      <div className='bg-[#010101]'>
        <Routes >

          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TextCarousel />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default App
