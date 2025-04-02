import React from 'react'
import { blogs } from '../Constants/constants'
import { Link } from 'react-router-dom'


function Blogs() {

  return (
    <div className='px-4 my-20'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>Blogs</h1>
      </div>
      <div className='flex flex-col gap-6'>
        {
          blogs?.map(blog => (
            <article key={blog.id} className='p-4 hover:border rounded-xl shadow-lg gap-4 items-start hover:box-border h-30'>
              <Link to={`/blog/${blog.slug}`} className='flex justify-between'>
                <div className='w-[80%]'>
                  <h1 className='font-bold text-xl'>{blog.title}</h1>
                  <p className='font-extralight my-1'>{blog.content}</p>
                </div>
                <p className='font-extralight text-sm' >{blog.publishDate}</p>
              </Link>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs