import React from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  // Sample data
  const emailData = [
    { day: 'Mon', processed: 1200, cleaned: 980 },
    { day: 'Tue', processed: 1800, cleaned: 1500 },
    { day: 'Wed', processed: 2400, cleaned: 2100 },
    { day: 'Thu', processed: 2800, cleaned: 2400 },
    { day: 'Fri', processed: 3200, cleaned: 2900 },
    { day: 'Sat', processed: 2200, cleaned: 1900 },
    { day: 'Sun', processed: 1500, cleaned: 1200 }
  ];

  const successFailData = [
    { action: 'Validation', success: 3200, failed: 200 },
    { action: 'Cleaning', success: 2800, failed: 150 },
    { action: 'Deduplication', success: 2500, failed: 300 },
    { action: 'Formatting', success: 1900, failed: 100 },
    { action: 'Verification', success: 3500, failed: 250 }
  ];

  const domainData = [
    { name: 'Gmail', value: 35, color: 'bg-red-400' },
    { name: 'Yahoo', value: 15, color: 'bg-purple-400' },
    { name: 'Outlook', value: 20, color: 'bg-blue-400' },
    { name: 'Corporate', value: 25, color: 'bg-cyan-400' },
    { name: 'Others', value: 5, color: 'bg-gray-400' }
  ];

  const activityData = [
    { time: '00:00', cleaning: 40, validation: 20, verification: 10 },
    { time: '04:00', cleaning: 30, validation: 40, verification: 20 },
    { time: '08:00', cleaning: 70, validation: 50, verification: 30 },
    { time: '12:00', cleaning: 60, validation: 60, verification: 40 },
    { time: '16:00', cleaning: 80, validation: 70, verification: 50 },
    { time: '20:00', cleaning: 50, validation: 30, verification: 20 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const barVariants = {
    hidden: { height: 0 },
    visible: (height) => ({
      height: `${height}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  // Calculate maximum values for scaling
  const maxEmailValue = Math.max(...emailData.map(d => Math.max(d.processed, d.cleaned)));
  const maxSuccessFail = Math.max(...successFailData.map(d => Math.max(d.success, d.failed)));
  const maxActivity = Math.max(...activityData.map(d => Math.max(d.cleaning, d.validation, d.verification)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 pt-18">
      {/* Background Elements */}
    
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-sm font-semibold text-cyan-400">Analytics Dashboard</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Analytics </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Visualize your performance, master your precision.
          </p>
        </motion.div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Domains - Pie Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              Email Domains Distribution
            </h3>
            <div className="h-64 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Pie chart segments */}
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {domainData.reduce((acc, segment, index) => {
                    const previousValue = acc;
                    const percentage = segment.value;
                    const circumference = 2 * Math.PI * 40;
                    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((previousValue / 100) * circumference);
                    
                    acc += percentage;
                    
                    return (
                      <React.Fragment key={segment.name}>
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke={segment.color.replace('bg-', '').replace('-400', '')}
                          strokeWidth="20"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                        />
                      </React.Fragment>
                    );
                  }, 0)}
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">100%</div>
                    <div className="text-gray-400 text-xs">Total</div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="ml-8 space-y-2">
                {domainData.map((domain, index) => (
                  <motion.div
                    key={domain.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-3 h-3 rounded-full ${domain.color}`}></div>
                    <span className="text-gray-300 text-sm">{domain.name}</span>
                    <span className="text-cyan-400 text-sm font-semibold">{domain.value}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* User Activity - Stacked Bars */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              Processing Activity Heatmap
            </h3>
            <div className="h-64 relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-400">
                {[0, 1, 2, 3, 4].map(num => (
                  <div key={num}>{(maxActivity * num / 4).toLocaleString()}</div>
                ))}
              </div>
              
              <div className="ml-12 h-full flex items-end justify-between">
                {activityData.map((item, index) => (
                  <div key={item.time} className="flex flex-col items-center flex-1 mx-1">
                    <div className="flex flex-col items-center w-full h-full justify-end gap-0.5">
                      {/* Stacked bars */}
                      {[
                        { value: item.verification, color: 'bg-orange-500', label: 'Verification' },
                        { value: item.validation, color: 'bg-purple-500', label: 'Validation' },
                        { value: item.cleaning, color: 'bg-cyan-500', label: 'Cleaning' }
                      ].map((stack, stackIndex) => (
                        <motion.div
                          key={stack.label}
                          custom={(stack.value / maxActivity) * 30}
                          variants={barVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 + stackIndex * 0.05 }}
                          className={`w-full ${stack.color} rounded-sm relative group`}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-400 whitespace-nowrap">
                            {stack.label}: {stack.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-gray-400 text-xs mt-2">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Summary */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'Total Processed', value: '15.2K', change: '+12%', color: 'text-cyan-400' },
            { label: 'Success Rate', value: '94.2%', change: '+2.1%', color: 'text-green-400' },
            { label: 'Avg Processing', value: '2.3s', change: '-0.4s', color: 'text-purple-400' },
            { label: 'Active Sessions', value: '243', change: '+18', color: 'text-orange-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700 hover:border-cyan-500/30 transition-colors"
            >
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-cyan-400 text-xs font-semibold mt-1">{stat.change}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;