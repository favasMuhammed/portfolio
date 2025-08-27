import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ThoughtsPage from './pages/ThoughtsPage'
import ThoughtPost from './pages/ThoughtPost'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-dark text-text font-mono cursor-none ${isLoaded ? 'loaded' : ''}`}>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/thoughts" element={<ThoughtsPage />} />
          <Route path="/thoughts/:slug" element={<ThoughtPost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
