import React from 'react'

function Project({ project }) {
  return (
    <div className='h-32 p-4 hover:border rounded-xl shadow-lg flex justify-between gap-4 items-start hover:box-border'>
      <div>
        <h1 className='font-bold text-xl'>{project.title}</h1>
        <p className='font-light my-1'>{project.content}</p>
        <a href={project.link} target='__blank' className='cursor-pointer'>View</a>
      </div>
      <div className='text-sm'>
        <span>{project.startDate}</span> - <span>{project.endDate}</span>
      </div>
    </div>
  )
}

export default Project