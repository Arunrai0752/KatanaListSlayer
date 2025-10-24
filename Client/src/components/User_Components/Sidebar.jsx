import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiHome, 
  FiBarChart2, 
  FiList, 
  FiSettings, 
  FiHelpCircle, 
  FiTrash2,
  FiUser,
  FiLogOut
} from 'react-icons/fi'

const Sidebar = ({ active, setActive }) => {
  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: <FiHome className="text-xl" /> },
    { id: "Analytics", label: "Analytics", icon: <FiBarChart2 className="text-xl" /> },
    { id: "MyList", label: "My List", icon: <FiList className="text-xl" /> },
    { id: "Settings", label: "Settings", icon: <FiSettings className="text-xl" /> },
    { id: "Help", label: "Help", icon: <FiHelpCircle className="text-xl" /> },
    { id: "Trash", label: "Trash", icon: <FiTrash2 className="text-xl" /> },
  ]

  return (
    <div className='h-screen w-64 bg-gray-900/80 backdrop-blur-xl border-r border-red-500/30 flex flex-col pt-18 fixed'>
      {/* Logo Section */}
      <div className='p-6 border-b border-gray-700'>
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="Logo.png"
            alt="Katana List Slayer"
            className="h-10 w-auto drop-shadow-lg filter brightness-110"
          />
          <div className="text-center">
            <h1 className="text-white font-bold text-sm tracking-wide leading-tight">
              <p className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Katana List</p>
              <p className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-wider text-xs">SLAYER</p>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Navigation Menu */}
      <div className='flex-1 p-4 space-y-2'>
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
              active === item.id 
                ? 'bg-red-600/20 border border-red-500/50 text-red-400 shadow-lg' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent'
            }`}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`${active === item.id ? 'text-red-400' : 'text-gray-400'}`}>
              {item.icon}
            </div>
            <span className='font-medium'>{item.label}</span>
          </motion.button>
        ))}
      </div>

      {/* User Section */}
      <div className='p-4 border-t border-gray-700 space-y-4'>
        {/* Profile */}
        <motion.button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 border border-transparent"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FiUser className="text-xl" />
          <span className='font-medium'>Profile</span>
        </motion.button>

        {/* Logout */}
        <motion.button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-600/10 transition-all duration-200 border border-transparent"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FiLogOut className="text-xl" />
          <span className='font-medium'>Logout</span>
        </motion.button>
      </div>
    </div>
  )
}

export default Sidebar