import React from 'react'
import SocialLinks from './SocialLinks'

function Intro() {

  const links = ['github', 'linkedin', 'x'];

  return (
    <div className='flex max-sm:flex-col sm:flex-row sm:justify-between gap-4 max-sm:gap-6 mt-12 max-sm:mt-0 p-4 dark:bg-gray-950 dark:text-gray-100'>
      <div className='max-sm:order-2'>
        <h1 className="font-bold text-2xl mb-2 dark:text-gray-100">Hello I'm Digambar,</h1>
        <p className='flex justify-start wrap text-gray-500 dark:text-gray-400'>A frontend developer specializing in React. I'm passionate about creating great web experiences that make a difference.</p>
        <div className='flex justify-items-center items-center gap-6 mt-6'>
          <a href="/digambar_resume.pdf" className='bg-black dark:text-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-200 text-white py-2 px-4 border rounded-xl'>Download resume</a>
          <SocialLinks ids={links} className='max-sm:hidden!'/>
        </div>
      </div>
      <img src='/src/assets/profile.jpg' alt="profile-picture" className='w-40 max-sm:w-30 rounded-2xl' />

    </div>
  )
}

export default Intro