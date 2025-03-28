import React from 'react'
import { motion } from 'framer-motion'

export default function SellerDash() {
  return (
    <div className='flex h-screen'>
      {/* Main Content (Expands) */}
      <div className='flex-1 bg-gray-100 p-4 flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Welcome to the Seller Dashboard</h1>
      </div>

      {/* Sidebar on the Right */}
      <div className='text-white flex flex-col bg-slate-600 h-full w-70 items-center p-6'>
        {/* Header */}
        <p className='text-2xl font-light mt-5'>FIU Marketplace</p>
        <p className='text-xl font-light mt-2'>Admin Dashboard</p>

        {/* Sidebar Items */}
        <div className='flex flex-col gap-4 w-full mt-6 items-center '>
          <motion.div className='p-3 w-[80%]  rounded-lg cursor-pointer mt-3' whileHover={{ backgroundColor: '#D3D3D3' }}>
            Users
          </motion.div>
          <motion.div className='p-3 w-[80%]  rounded-lg cursor-pointer' whileHover={{ backgroundColor: '#D3D3D3' }}>
            Orders
          </motion.div>
          <motion.div className='p-3 w-[80%]  rounded-lg cursor-pointer' whileHover={{ backgroundColor: '#D3D3D3' }}>
            Reports
          </motion.div>
        </div>
        <button className='bg-red-500 text-white p-3 w-[80%] rounded  mb-3 mt-auto'>Logout</button>

        {/* Logout Button at Bottom */}
      </div>
    </div>
  )
}
