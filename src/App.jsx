import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App