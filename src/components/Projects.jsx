import React from 'react'
import Project from './Project'
import { projects } from '../Constants/constants'

function Projects() {
  return (
    <div className='px-4 my-20 max-sm:my-10 dark:bg-gray-950 dark:text-gray-100'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>Projects</h1>
      </div>
      <div className='flex flex-col gap-6'>
        {
          projects?.map(project => (
            <Project project={project} key={project.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects