import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'

function Footer() {
 const links = ['email','github','linkedin','x'];

  return (
    <div className='p-4 flex justify-between items-center'>
      <h1 className='text-lg'>Digambar</h1>
      <div>
        <SocialLinks ids={links}/>
      </div>
    </div>
  )
}

export default Footer