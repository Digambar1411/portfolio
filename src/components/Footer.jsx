import React from 'react'
import SocialLinks from './SocialLinks';

function Footer() {
  const links = ['email', 'github', 'linkedin', 'x'];

  return (
    <div className='px-4 py-8 flex justify-between items-center border-t border-t-gray-400  dark:bg-gray-950 dark:text-gray-100'>
      <h1 className='text-lg text-gray-600 font-light  dark:text-gray-100'>Digambar</h1>
      <div>
        <SocialLinks ids={links} />
      </div>
    </div>
  )
}

export default Footer