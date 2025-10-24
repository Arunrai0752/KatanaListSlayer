import React from 'react'
import Hero from '../components/Home/Hero'
import HowItWorksSection from '../components/Home/HowItWorksSection'
import Features from '../components/Home/Features'
import ProductUse from '../components/Home/ProductUse'
import Comparision from '../components/Home/Comparision'
import Pricing from '../components/Home/Pricing'
import Testimonials from '../components/Home/Testimonials'
import About from '../components/Home/About'
import ScreenshotsSection from '../components/Home/Screenshots'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Hero />
            <HowItWorksSection />
            <Features />
            <ProductUse />
            <ScreenshotsSection />
            <Comparision />
            <Pricing />
            <Testimonials />
            <About />
            <Footer />

        </div>
    )
}

export default Home