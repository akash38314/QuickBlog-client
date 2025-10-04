import React from "react";
import star from "../assets/star_icon.svg";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        {/* Notification badge */}
        <motion.div 
          className="inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-blue-400/40 bg-blue-400/10 rounded-full text-sm text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>New: AI feature integrated</p>
          <img src={star} className="w-2.5" alt="star icon" />
        </motion.div>
        
        {/* Main heading with colored "blogging" word */}
        <motion.h1 
          className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your own <span className="text-blue-600">blogging</span><br/>
          platform.
        </motion.h1>

        {/* Description paragraph */}
        <motion.p 
          className='my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
        </motion.p>

        {/* Search form */}
        <motion.form 
          className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input 
            type="text" 
            placeholder='Search for blogs' 
            required 
            className='w-full pl-4 outline-none py-2 text-gray-700'
          />
          <motion.button 
            type="submit" 
            className='bg-blue-600 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Header;