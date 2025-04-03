import React from 'react'

function Project({ project }) {
  return (
    <div className='min-h-32 p-4 hover:transition rounded-xl shadow-md items-start border border-transparent dark:text-gray-100 dark:border-gray-500! hover:border hover:border-black'>
      <div className='sm:flex justify-between'>
        <h1 className='font-gray-700 text-xl'>{project.title}</h1>
        <div className='text-gray-500 dark:text-gray-400 font-light text-sm max-sm:text-xs'>
          <span>{project.startDate} - {project.endDate}</span>
        </div>
      </div>
      <div>
        <p className='text-gray-500 dark:text-gray-400 font-light my-1 sm:w-[85%]'>{project.content}</p>
        <a href={project.link} target='__blank' className='cursor-pointer underline underline-offset-4'>View</a>
      </div>
    </div>
  )
}

export default Project