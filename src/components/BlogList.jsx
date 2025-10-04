import React, { useState } from 'react'
import { blogPosts, blogCategories } from '../assets/assets'
import { motion } from "framer-motion"
import BlogCard from './BlogCard'

const BlogList = () => {
    const [menu, setMenu] = useState("All")

    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map(item => (
                    <div key={item} className='relative'>
                        <button 
                            onClick={() => setMenu(item)}
                            className={`cursor-pointer text-gray-500 relative px-4 py-2 rounded-full transition-all ${
                                menu === item ? 'text-white' : 'hover:text-gray-700'
                            }`}
                        >
                            {item}
                            {menu === item && (
                                <motion.div 
                                    layoutId='underline'
                                    className='absolute inset-0 bg-primary rounded-full -z-10'
                                    transition={{type: 'spring', stiffness: 500, damping: 30}}
                                />
                            )}
                        </button>
                    </div>
                ))}
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {blogPosts
                    .filter((blog) => menu === "All" ? true : blog.category === menu)
                    .map((blog) => (
                        <BlogCard key={blog._id} blog={blog}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList