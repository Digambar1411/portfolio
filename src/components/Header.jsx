import React from 'react'

function Header() {
  return (
    <div className='flex justify-between z-10 sticky h-16 p-4 top-0 box-border w-[100%] bg-white  dark:bg-gray-800 dark:text-gray-100'> 
      <a href='/'><h1 className='text-xl'> &lt; Digambar Deshawal /&gt;</h1></a>
      <nav>
        <a href="/blogs" className='dark:text-gray-100'>Blogs</a>
        <span className='ml-2 cursor-pointer'></span>
      </nav>
    </div>
  )
}

export default Header