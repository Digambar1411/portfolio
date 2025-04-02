import React from 'react'
import { blogs } from '../Constants/constants'
import Blog from './Blog'


function Blogs() {

  return (
    <div className='px-4 my-20'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>Blogs</h1>
      </div>
      <div className='flex flex-col gap-6'>
        {
          blogs?.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default Blogs