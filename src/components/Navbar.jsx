import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.svg"
import { motion } from "framer-motion"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <motion.img 
        onClick={() => navigate('/')}
        src={logo} 
        alt="logo" 
        className="w-32 sm:w-44 cursor-pointer" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      <motion.button 
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 sm:px-10 py-2.5 hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Blog
        {/* Using SVG icon since arrow.svg might not exist */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  )
}

export default Navbar