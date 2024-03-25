import { useState,  lazy, Suspense } from 'react'
import './App.css'
import Home from './pages/Home'
// import About from './pages/About'
import Skeleton from './components/Skeleton'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
const About = lazy(() => import('./pages/About'))
import Services from './pages/Services'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
            >
              <Suspense fallback = {<Skeleton />}>
                <About />
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path="/services" element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
            >
              <Suspense fallback = {<Skeleton />}>
                <Services />
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path="/careers" element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
            >
              <Suspense fallback = {<Skeleton />}>
                <Careers />
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App