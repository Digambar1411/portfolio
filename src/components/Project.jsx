import React from 'react'

function Project({ project }) {
  return (
    <div className='p-4 hover:border rounded-xl shadow-lg flex justify-between gap-4 items-start hover:box-border'>
      <div>
        <h1 className='font-bold text-xl'>{project.title}</h1>
        <p className='font-extralight my-1'>{project.content}</p>
        <a href="" className='cursor-pointer'>View</a>
      </div>
      <div className='font-extralight text-sm'>
        <span>{project.startDate}</span> - <span>{project.endDate}</span>
      </div>
    </div>
  )
}

export default Project