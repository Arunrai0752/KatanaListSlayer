import React, { useState } from 'react'
import Sidebar from '../../components/User_Components/Sidebar'
import MDashboard from '../../components/User_Components/Dashboard'
import AcSettings from '../../components/User_Components/AcSettings'
import Analytics from '../../components/User_Components/Analytics'
import MyList from '../../components/User_Components/MyList'
import Help from '../../components/User_Components/Help'
import Trash from '../../components/User_Components/Trash'

import { motion } from 'framer-motion'

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard")

  const renderActiveComponent = () => {
    switch (active) {
      case "Dashboard":
        return <MDashboard />
      case "Settings":
        return <AcSettings />
      case "Analytics":
        return <Analytics />
      case "MyList":
        return <MyList />
      case "Help":
        return <Help />
      case "Trash":
        return <Trash />
      default:
        return <MDashboard />
    }
  }

  return (
    <div className='flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900'>
      {/* Sidebar */}
      <div className='w-64 flex-shrink-0'>
        <Sidebar active={active} setActive={setActive} />
      </div>
      
      {/* Main Content */}
      <div className='flex-1 p-6 overflow-auto'>
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className='h-full'
        >
          {renderActiveComponent()}
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard