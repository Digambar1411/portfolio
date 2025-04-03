import React from 'react'

function Project({ project }) {
  return (
    <div className='h-32 p-4 hover:transition rounded-xl shadow-md flex justify-between gap-4 items-start border border-transparent dark:text-gray-100 dark:border-gray-500! hover:border hover:border-black'>
      <div>
        <h1 className='font-gray-700 text-xl'>{project.title}</h1>
        <p className='text-gray-500 dark:text-gray-400 font-light my-1'>{project.content}</p>
        <a href={project.link} target='__blank' className='cursor-pointer underline underline-offset-4'>View</a>
      </div>
      <div className='text-gray-500 dark:text-gray-400 font-light text-sm'>
        <span>{project.startDate}</span> - <span>{project.endDate}</span>
      </div>
    </div>
  )
}

export default Project