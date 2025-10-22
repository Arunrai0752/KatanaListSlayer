import React from "react";
import { motion } from "framer-motion";
import { 
  FaChartBar, 
  FaChartLine, 
  FaShieldAlt, 
  FaDollarSign, 
  FaList, 
  FaUsers,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaDownload,
  FaFilter,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

// Mock Data
const lineChartData = [
  { name: "Jan", quality: 82, cleaned: 1200, savings: 1200 },
  { name: "Feb", quality: 85, cleaned: 1800, savings: 1800 },
  { name: "Mar", quality: 88, cleaned: 2200, savings: 2400 },
  { name: "Apr", quality: 91, cleaned: 2800, savings: 2900 },
  { name: "May", quality: 93, cleaned: 3500, savings: 3200 },
  { name: "Jun", quality: 95, cleaned: 4200, savings: 3450 },
];

const pieChartData = [
  { name: "Valid", value: 8500, color: "#00d4ff", percentage: 85 },
  { name: "Invalid", value: 800, color: "#f87171", percentage: 8 },
  { name: "Spam Trap", value: 200, color: "#fb923c", percentage: 2 },
  { name: "Risky", value: 500, color: "#facc15", percentage: 5 },
];

const barChartData = [
  { name: "Mon", processed: 4200, cleaned: 3800 },
  { name: "Tue", processed: 3800, cleaned: 3500 },
  { name: "Wed", processed: 5200, cleaned: 4800 },
  { name: "Thu", processed: 4800, cleaned: 4500 },
  { name: "Fri", processed: 4500, cleaned: 4200 },
  { name: "Sat", processed: 3200, cleaned: 3000 },
  { name: "Sun", processed: 2800, cleaned: 2600 },
];

const recentActivity = [
  { id: 1, list: "Newsletter Subscribers", status: "completed", emails: "12,842", date: "2 min ago" },
  { id: 2, list: "Customer Database", status: "processing", emails: "8,456", date: "5 min ago" },
  { id: 3, list: "Lead Magnet", status: "completed", emails: "5,231", date: "1 hour ago" },
  { id: 4, list: "Event Attendees", status: "failed", emails: "3,784", date: "2 hours ago" },
];

// Custom Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-gray-800 rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b border-gray-800 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-white ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export default function Analytics() {
  const stats = [
    { 
      title: "Total Lists Cleaned", 
      value: "128", 
      change: "+12%", 
      trend: "up",
      icon: FaList, 
      color: "#00d4ff" 
    },
    { 
      title: "Average List Quality", 
      value: "94.7%", 
      change: "+3.2%", 
      trend: "up",
      icon: FaChartLine, 
      color: "#8b5cf6" 
    },
    { 
      title: "Spam Traps Removed", 
      value: "1,842", 
      change: "-5%", 
      trend: "down",
      icon: FaShieldAlt, 
      color: "#f87171" 
    },
    { 
      title: "Estimated Savings", 
      value: "$3,450", 
      change: "+18%", 
      trend: "up",
      icon: FaDollarSign, 
      color: "#4ade80" 
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <FaCheckCircle className="w-4 h-4 text-green-400" />;
      case 'processing': return <FaChartLine className="w-4 h-4 text-blue-400" />;
      case 'failed': return <FaTimesCircle className="w-4 h-4 text-red-400" />;
      default: return <FaExclamationTriangle className="w-4 h-4 text-yellow-400" />;
    }
  };

  // Calculate max value for bar chart scaling
  const maxBarValue = Math.max(...barChartData.map(d => Math.max(d.processed, d.cleaned)));

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-8 pt-25">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-white">Analytics</span>{" "}
                <span className="glow-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Dive deep into your list performance and cleaning results
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-semibold rounded-2xl mt-4 sm:mt-0"
            >
              <FaDownload className="w-4 h-4" />
              Export Report
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:border-[#00d4ff]/30 transition-all duration-300 group">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform`} style={{ backgroundColor: `${stat.color}20` }}>
                    <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stat.trend === 'up' ? (
                        <FaArrowUp className="w-3 h-3" />
                      ) : (
                        <FaArrowDown className="w-3 h-3" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FaChartBar className="w-5 h-5 text-[#00d4ff]" />
                  Performance Overview
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaFilter className="w-4 h-4" />
                  Last 6 Months
                </div>
              </CardHeader>
              <CardContent className="h-80">
                {/* Custom Line Chart */}
                <div className="relative h-full w-full">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-400">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-12 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} className="h-px bg-gray-800 w-full" />
                      ))}
                    </div>
                    
                    {/* Data lines */}
                    <div className="absolute inset-0 flex items-end">
                      {lineChartData.map((point, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                          {/* Quality line */}
                          <div
                            className="w-1 bg-gradient-to-t from-[#00d4ff] to-[#00d4ff]/20 rounded-t-full relative group"
                            style={{ height: `${point.quality}%` }}
                          >
                            <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#00d4ff] rounded-full border-2 border-[#0a0a0f] group-hover:scale-150 transition-transform" />
                            <div className="absolute -top-8 left-4 bg-[#1a1a2e] border border-[#00d4ff] rounded-lg p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              {point.name}: {point.quality}%
                            </div>
                          </div>
                          
                          {/* X-axis label */}
                          <div className="text-xs text-gray-400 mt-2">{point.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaUsers className="w-5 h-5 text-[#00d4ff]" />
                  Email Status Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                {/* Custom Pie Chart */}
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-6">
                  {/* Pie Chart Visualization */}
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-800" />
                    {pieChartData.reduce((acc, segment, index) => {
                      const previousPercentage = acc.reduce((sum, s) => sum + s.percentage, 0);
                      return [
                        ...acc,
                        <div
                          key={index}
                          className="absolute inset-0 rounded-full"
                          style={{
                            clipPath: `conic-gradient(from ${previousPercentage * 3.6}deg, ${segment.color} ${segment.percentage * 3.6}deg, transparent 0)`,
                          }}
                        />
                      ];
                    }, [])}
                    <div className="absolute inset-8 rounded-full bg-[#0a0a0f]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">10,000</div>
                        <div className="text-xs text-gray-400">Total Emails</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="space-y-3">
                    {pieChartData.map((segment, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: segment.color }}
                        />
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">{segment.name}</div>
                          <div className="text-gray-400 text-xs">{segment.value} emails ({segment.percentage}%)</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaEnvelope className="w-5 h-5 text-[#00d4ff]" />
                  Weekly Processing Volume
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                {/* Custom Bar Chart */}
                <div className="h-full flex flex-col">
                  {/* Y-axis labels */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 pr-4">
                      <span>{maxBarValue.toLocaleString()}</span>
                      <span>{(maxBarValue * 0.75).toLocaleString()}</span>
                      <span>{(maxBarValue * 0.5).toLocaleString()}</span>
                      <span>{(maxBarValue * 0.25).toLocaleString()}</span>
                      <span>0</span>
                    </div>
                    
                    {/* Bars */}
                    <div className="ml-12 h-full flex items-end justify-between gap-2">
                      {barChartData.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-1 group">
                          <div className="flex flex-col items-center justify-end h-40 w-full relative">
                            {/* Processed Bar */}
                            <div
                              className="w-3/4 bg-gradient-to-t from-[#00d4ff] to-[#00d4ff]/50 rounded-t-lg relative group-hover:opacity-80 transition-opacity"
                              style={{ height: `${(day.processed / maxBarValue) * 100}%` }}
                            >
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1a1a2e] border border-[#00d4ff] rounded-lg p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Processed: {day.processed.toLocaleString()}
                              </div>
                            </div>
                            
                            {/* Cleaned Bar */}
                            <div
                              className="w-3/4 bg-gradient-to-t from-[#8b5cf6] to-[#8b5cf6]/50 rounded-t-lg mt-1 relative group-hover:opacity-80 transition-opacity"
                              style={{ height: `${(day.cleaned / maxBarValue) * 100}%` }}
                            >
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1a1a2e] border border-[#8b5cf6] rounded-lg p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Cleaned: {day.cleaned.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          
                          {/* X-axis label */}
                          <div className="text-xs text-gray-400 mt-2">{day.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#00d4ff] rounded" />
                      <span className="text-xs text-gray-400">Processed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#8b5cf6] rounded" />
                      <span className="text-xs text-gray-400">Cleaned</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaList className="w-5 h-5 text-[#00d4ff]" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-4 bg-gray-800/20 rounded-lg border border-gray-700 hover:border-[#00d4ff]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(activity.status)}
                        <div>
                          <div className="font-semibold text-white">{activity.list}</div>
                          <div className="text-sm text-gray-400">{activity.emails} emails</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                          activity.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : activity.status === 'processing'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {activity.status}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Bounce Rate", value: "2.1%", trend: "down" },
            { label: "Open Rate", value: "34.2%", trend: "up" },
            { label: "Engagement", value: "78.5%", trend: "up" },
            { label: "Cost Saved", value: "$0.42/email", trend: "up" },
          ].map((metric, index) => (
            <div key={index} className="bg-gray-800/20 rounded-lg p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}