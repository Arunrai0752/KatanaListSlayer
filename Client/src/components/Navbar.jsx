import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ClickSignup = () => {
    setIsMenuOpen(false)
    navigate("/signup")
  }

   const ClickLogin = () => {
     setIsMenuOpen(false)
    navigate("/login")
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl border-b border-red-500/50 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{
                scale: 1.05,
              }}
              onClick={() => navigate("/")}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <img
                src="Logo.png"
                alt="Katana List Slayer"
                className="h-10 w-auto md:h-12 drop-shadow-lg filter brightness-110"
              />
           <div className="text-center">
  <h1 className="text-white font-bold text-lg md:text-xl tracking-wide leading-tight drop-shadow-md">
    <motion.p 
      className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ["0%", "100%", "0%"],
        textShadow: [
          "0 0 10px rgba(234, 179, 8, 0.5)",
          "0 0 20px rgba(234, 179, 8, 0.8)",
          "0 0 10px rgba(234, 179, 8, 0.5)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      Katana List
    </motion.p>
    <motion.p 
      className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-extrabold tracking-wider"
      animate={{
        scale: [1, 1.05, 1],
        textShadow: [
          "0 0 15px rgba(245, 158, 11, 0.6)",
          "0 0 25px rgba(245, 158, 11, 0.9)",
          "0 0 15px rgba(245, 158, 11, 0.6)"
        ]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      SLAYER
    </motion.p>
  </h1>
</div>
            </motion.div>

            <div className="items-center space-x-3 hidden md:flex">
              <motion.button
                className="px-6 py-2.5 text-sm font-semibold text-white border-2 border-red-500/50 rounded-xl hover:bg-red-500/10 transition-all duration-200 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(239, 68, 68, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={() => ClickLogin()}
              >
                Login
              </motion.button>
              
              <motion.button
                className="px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={()=> ClickSignup()}
              >
                Sign Up
              </motion.button>
            </div>

            <div className="items-center space-x-3 flex md:hidden">
              <motion.button 
                className="p-2 text-white border-2 border-red-500/50 rounded-xl backdrop-blur-sm hover:bg-red-500/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(true)}
              >
                <IoReorderThreeOutline className="text-2xl" />
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black backdrop-blur-xl border-l border-red-500/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <motion.button
                  className="p-2 text-white border-2 border-red-500/50 rounded-xl backdrop-blur-sm hover:bg-red-500/10 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IoClose className="text-2xl" />
                </motion.button>
              </div>

              <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
                <motion.button
                  className="w-64 px-8 py-4 text-lg font-semibold text-white border-2 border-red-500/50 rounded-xl hover:bg-red-500/10 transition-all duration-200 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(239, 68, 68, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={() => ClickLogin()}
                >
                  Login
                </motion.button>
                
                <motion.button
                  className="w-64 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={() => ClickSignup()}
                >
                  Sign Up
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}