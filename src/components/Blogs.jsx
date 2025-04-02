import React from 'react'
import Blog from './Blog'
import { blogs } from '../Constants/constants'

function Blogs() {

  return (
    <div className='px-4 my-20'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>Blogs</h1>
        {/* <a className='cursor-pointer' href="http://" target="_blank" rel="noopener noreferrer">All Blogs</a> */}
      </div>
      <div className='flex flex-col gap-6'>
        {
          blogs.map(blog => (
            <Blog blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default Blogs