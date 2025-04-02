import React from 'react'

function Header() {
  return (
    <div className='flex justify-between z-10 sticky h-16 p-4 top-0 box-border w-[100%] bg-white'> 
      <h1 className='text-2xl'> &lt; Digambar Deshawal /&gt;</h1>
      <nav>
        <a href="/blogs">Blogs</a>
        <span className='ml-2 cursor-pointer'>Theme</span>
      </nav>
    </div>
  )
}

export default Header