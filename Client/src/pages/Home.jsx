import React from 'react'
import Hero from '../components/Hero'
import HowItWorksSection from '../components/HowItWorksSection'
import Features from '../components/Features'
import ProductUse from '../components/ProductUse'
import Comparision from '../components/Comparision'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import ScreenshotsSection from '../components/Screenshots'


const Home = () => {
    return (
        <div>
            <Hero />
            <HowItWorksSection />
            <Features />
            <ProductUse />
            <ScreenshotsSection/>
            <Comparision />
            <Pricing />
            <Testimonials />
            <About />
        </div>
    )
}

export default Home