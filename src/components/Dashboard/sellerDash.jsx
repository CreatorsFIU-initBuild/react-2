import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const UserProfile = ({ username, avatar, toggleSidebar }) => {
  return (
    <div className='absolute top-5 right-5 flex items-center gap-3'>
      <img
        src={avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        alt={username}
        className='w-10 h-10 rounded-full border-2 border-gray-500 cursor-pointer'
        onClick={toggleSidebar}
      />
      <span className='text-2xl font-light leading-none'>{username}</span>
    </div>
  )
}

export default function SellerDash() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen relative'>
      {/* Profile only visible when sidebar is closed */}
      {!isSidebarOpen && <UserProfile username={'Place Holder'} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />}

      {/* Main Content (Expands) */}
      <div className='flex-1 bg-gray-100 p-4 flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Welcome to the Seller Dashboard</h1>
      </div>

      {/* Blurry Background Overlay (Only when sidebar is open) */}
      {isSidebarOpen && <div className='fixed inset-0 bg-black/40 backdrop-blur-md z-40' onClick={() => setIsSidebarOpen(false)} />}

      {/* Sidebar with exit animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='fixed top-0 right-0 h-full w-70 bg-slate-600/70 backdrop-blur-md text-white flex flex-col items-center p-6 shadow-lg z-50'
          >
            {/* Sidebar Profile (Optional) */}
            <UserProfile username={'Place Holder'} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <p className='text-xl font-light mt-5 pt-5'>Admin Dashboard</p>

            {/* Sidebar Items */}
            <div className='flex flex-col gap-4 w-full mt-6 items-center'>
              <motion.div className='p-3 w-[80%] rounded-lg cursor-pointer mt-3' whileHover={{ backgroundColor: '#D3D3D3' }}>
                Users
              </motion.div>
              <motion.div className='p-3 w-[80%] rounded-lg cursor-pointer' whileHover={{ backgroundColor: '#D3D3D3' }}>
                Orders
              </motion.div>
              <motion.div className='p-3 w-[80%] rounded-lg cursor-pointer' whileHover={{ backgroundColor: '#D3D3D3' }}>
                Reports
              </motion.div>
            </div>

            {/* Logout Button */}
            <button className='bg-red-500 text-white p-3 w-[80%] rounded mb-3 mt-auto' onClick={() => setIsSidebarOpen(false)}>
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
