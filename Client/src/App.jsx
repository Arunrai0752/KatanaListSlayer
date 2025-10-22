import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Navbar />
      <main className="grow pt-20"> {/* pt-20 leaves space for fixed navbar */}
        <Home />
      </main>
      <Footer/>
    </div>
  )
}