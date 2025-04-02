import React from 'react'
import Project from './Project'
import { projects } from '../Constants/constants'

function Projects() {
  return (
    <div className='px-4 my-20'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>Projects</h1>
        {/* <a className='cursor-pointer' href="http://" target="_blank" rel="noopener noreferrer">All Projects</a> */}
      </div>
      <div className='flex flex-col gap-6'>
        {
          projects?.map(project => (
            <Project project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects