import React from 'react'
import { motion } from 'framer-motion'
import { FiList, FiZap, FiCheckCircle, FiTrash2 } from 'react-icons/fi'

const Dashboard = () => {
  const statsData = [
    {
      id: 1,
      title: "Total Lists",
      value: "24",
      icon: FiList,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Active Campaigns",
      value: "8",
      icon: FiZap,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
      id: 3,
      title: "Cleaned Data",
      value: "1,247",
      icon: FiCheckCircle,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      id: 4,
      title: "Deactivated Emails",
      value: "89",
      icon: FiTrash2,
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30"
    }
  ]

  return (
    <div className='p-6 space-y-8 pt-18'>
      {/* Header */}
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='text-4xl font-bold text-white'>
            Data <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>Dojo</span>
          </h1>
          <p className='text-gray-400 mt-2 text-lg'>
            Cut through digital chaos with <span className='text-red-400'>surgical precision</span>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border ${stat.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-300`}
          >
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-400 text-sm font-medium mb-2'>{stat.title}</p>
                <p className='text-3xl font-bold text-white'>{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className='mt-4'>
              <div className='w-full bg-gray-800 rounded-full h-2'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 70 + 30}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 shadow-2xl'
      >
        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
          <FiZap className="text-red-400" />
          Recent Slaying Activity
        </h2>
        
        <div className='space-y-4'>
          {[
            { action: "Cleaned email list", list: "Marketing Campaign", count: "245 emails", time: "2 hours ago", status: "completed" },
            { action: "Filtered spam addresses", list: "Newsletter Subscribers", count: "89 emails", time: "5 hours ago", status: "completed" },
            { action: "Validated contacts", list: "Customer Database", count: "1,024 emails", time: "1 day ago", status: "completed" },
            { action: "Removed duplicates", list: "Lead Generation", count: "156 emails", time: "2 days ago", status: "completed" }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className='flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300'
            >
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center'>
                  <FiCheckCircle className="text-red-400" />
                </div>
                <div>
                  <h3 className='font-semibold text-white'>{activity.action}</h3>
                  <p className='text-gray-400 text-sm'>{activity.list} • {activity.count}</p>
                </div>
              </div>
              <div className='text-right'>
                <span className='text-gray-400 text-sm'>{activity.time}</span>
                <div className='px-2 py-1 bg-green-500/20 rounded-full text-green-400 text-xs font-medium mt-1'>
                  {activity.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className='bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 shadow-2xl'
      >
        <h2 className='text-2xl font-bold text-white mb-6'>Quick Strikes</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {[
            { name: 'New List', icon: FiList, color: 'blue' },
            { name: 'Clean Now', icon: FiZap, color: 'red' },
            { name: 'Validate', icon: FiCheckCircle, color: 'green' },
            { name: 'Remove Duplicates', icon: FiTrash2, color: 'gray' }
          ].map((action, index) => (
            <motion.button
              key={action.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl bg-${action.color}-500/10 border border-${action.color}-500/30 text-${action.color}-400 hover:bg-${action.color}-500/20 transition-all flex flex-col items-center space-y-3`}
            >
              <action.icon className="text-2xl" />
              <span className='font-medium text-sm text-white'>{action.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard