import React from 'react'
import { useTheme } from '../context/theme-context'
import { FaSun, FaMoon } from 'react-icons/fa'

function Header() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className='sticky z-index-2 flex justify-between h-auto p-4 top-0 box-border w-[100%] bg-white dark:bg-gray-950 dark:text-gray-100'> 
      <a href='/'><h1 className='text-xl'> &lt; Digambar /&gt;</h1></a>
      <nav>
        <a href="/blogs" className='dark:text-gray-100'>Blogs</a>
        <span className='ml-4 cursor-pointer' onClick={toggleTheme}>
          <FaSun className={`w-5 h-5 ${theme === 'dark' ? 'hidden' : 'inline'}`} />
          <FaMoon className={`w-5 h-5 ${theme === 'dark' ? 'inline' : 'hidden'}`} />
        </span>
      </nav>
    </div>
  )
}

export default Header