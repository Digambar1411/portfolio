import React from 'react'

function Blog({ blog }) {
  return (
    <div className='p-4 hover:border rounded-xl shadow flex justify-between gap-4 items-start hover:box-border'>
      <div>
        <h1 className='font-bold text-xl'>{blog.title}</h1>
        <p className='font-extralight my-1'>{blog.content}</p>
        <a href="">Read More</a>
      </div>
      <p className='font-extralight text-sm' >{blog.publishDate}</p>
    </div>
  )
}

export default Blog