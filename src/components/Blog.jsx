import React from 'react'

function Blog({ blog }) {
  return (
    <article className='p-4 hover:border rounded-xl shadow-lg flex justify-between gap-4 items-start hover:box-border'>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <div>
          <h1 className='font-bold text-xl'>{blog.title}</h1>
          <p className='font-extralight my-1'>{blog.content}</p>
        </div>
        <p className='font-extralight text-sm' >{blog.publishDate}</p>
      </a>
    </article>
  )
}

export default Blog