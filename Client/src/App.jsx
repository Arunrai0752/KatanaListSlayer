import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Terms from './pages/Legal/Term'
import Privacy from './pages/Legal/Privacy'
import Refund from './pages/Legal/Refund'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import Dashboard from './pages/User/Dashboard'




export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userdashboard" element={<Dashboard />} />






            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/" 
                    className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-semibold rounded-2xl hover:shadow-lg transition-all"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />






          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}