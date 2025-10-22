import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-200/100 backdrop-blur-xl border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-20">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="Logo.png" 
              alt="Katana List Slayer" 
              className="h-10 w-auto md:h-12"
            />
          
          </motion.div>
        </div>
      </nav>
    </header>
  )
}