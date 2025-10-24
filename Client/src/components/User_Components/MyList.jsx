import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiPlay, 
  FiPause, 
  FiCheckCircle,
  FiUpload,
  FiX,
  FiSearch,
  FiFilter
} from 'react-icons/fi';

const MyList = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: 'Marketing Campaign Q4',
      dateCreated: '2024-01-15',
      status: 'active',
      items: 1250,
      tags: ['marketing', 'campaign']
    },
    {
      id: 2,
      name: 'Customer Database',
      dateCreated: '2024-01-10',
      status: 'paused',
      items: 8450,
      tags: ['customers', 'database']
    },
    {
      id: 3,
      name: 'Newsletter Subscribers',
      dateCreated: '2024-01-08',
      status: 'completed',
      items: 3200,
      tags: ['newsletter', 'subscribers']
    },
    {
      id: 4,
      name: 'Lead Generation 2024',
      dateCreated: '2024-01-05',
      status: 'active',
      items: 2100,
      tags: ['leads', 'generation']
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newList, setNewList] = useState({
    name: '',
    tags: '',
    file: null
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredLists = lists.filter(list => {
    const matchesSearch = list.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || list.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateList = (e) => {
    e.preventDefault();
    const newListObj = {
      id: lists.length + 1,
      name: newList.name,
      dateCreated: new Date().toISOString().split('T')[0],
      status: 'active',
      items: 0,
      tags: newList.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    setLists([newListObj, ...lists]);
    setShowCreateModal(false);
    setNewList({ name: '', tags: '', file: null });
  };

  const handleDeleteList = (id) => {
    setLists(lists.filter(list => list.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setLists(lists.map(list => 
      list.id === id ? { ...list, status: newStatus } : list
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'paused': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'completed': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <FiPlay className="w-4 h-4" />;
      case 'paused': return <FiPause className="w-4 h-4" />;
      case 'completed': return <FiCheckCircle className="w-4 h-4" />;
      default: return <FiPlay className="w-4 h-4" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 pt-18">
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-gray-400">Manage and organize your email lists with precision</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            <FiPlus className="w-5 h-5" />
            Create New List
          </motion.button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 mb-6"
        >
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search lists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
          </select>
        </motion.div>

        {/* Lists Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredLists.map((list) => (
              <motion.div
                key={list.id}
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(59, 130, 246, 0.5)',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                }}
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {list.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(list.status)} flex items-center gap-1`}>
                    {getStatusIcon(list.status)}
                    {list.status.charAt(0).toUpperCase() + list.status.slice(1)}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Created</span>
                    <span className="text-white">{list.dateCreated}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Items</span>
                    <span className="text-white">{list.items.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tags</span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {list.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 px-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all flex items-center justify-center gap-1 text-sm"
                  >
                    <FiEdit2 className="w-4 h-4" />
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 px-3 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-all flex items-center justify-center gap-1 text-sm"
                  >
                    <FiPlay className="w-4 h-4" />
                    Run Clean
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDeleteList(list.id)}
                    className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-all"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Status Toggle */}
                <div className="flex gap-1 mt-3">
                  {['active', 'paused', 'completed'].map((status) => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleStatusChange(list.id, status)}
                      className={`flex-1 py-1 px-2 rounded text-xs transition-all ${
                        list.status === status 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600'
                      }`}
                    >
                      {status.charAt(0).toUpperCase()}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredLists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">No lists found</div>
            <div className="text-gray-500 text-sm mt-2">
              {searchTerm || statusFilter !== 'all' ? 'Try adjusting your filters' : 'Create your first list to get started'}
            </div>
          </motion.div>
        )}
      </div>

      {/* Create List Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Create New List</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleCreateList} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    List Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newList.name}
                    onChange={(e) => setNewList({ ...newList, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Enter list name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={newList.tags}
                    onChange={(e) => setNewList({ ...newList, tags: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="marketing, campaign, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Import CSV
                  </label>
                  <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-blue-500 transition-colors group">
                    <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-blue-400" />
                    <div className="text-gray-400 text-sm">Drop your CSV file here or click to browse</div>
                    <input
                      type="file"
                      accept=".csv"
                      onChange={(e) => setNewList({ ...newList, file: e.target.files[0] })}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 py-3 px-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-blue-500/25 transition-all"
                  >
                    Create List
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyList;