import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'

function Intro() {

  const links = ['github','linkedin','x'];

  return (
    <div className='flex justify-between gap-4 mt-12 p-4'>
      <div className='max-w-[70%]'>
        <h1 className="font-bold text-xl mb-2">Hello I'm Digambar.</h1>
        <p className='flex justify-start wrap'>A frontend developer specializing in React. I'm passionate about creating great web experiences that make a difference.</p>
        <div className='flex justify-items-center items-center gap-6 mt-6'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer'>Download resume</button>
          <SocialLinks ids={links} />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src='src/assets/profile.jpg' alt="profile-picture" srcSet="" className='w-40 rounded-2xl' />
      </div>

    </div>
  )
}

export default Intro