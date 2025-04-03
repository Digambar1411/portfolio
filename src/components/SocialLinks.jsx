import React from 'react'
import { socialLinksArray } from '../Constants/constants'

function SocialLinks(props) {

  const filteredLinks = socialLinksArray.filter((link) => props.ids.includes(link.id))

  return (
    <div className='flex gap-4 items-center'>
      {
        filteredLinks?.map((link) => (
          <span key={link.id}>
            <a href={`${link.href}`} target="_blank" rel="noopener noreferrer" className='text-2xl hover:scale-110 transition-transform p-1 inline-block border-0 rounded hover:bg-gray-200 hover:dark:bg-gray-800'>
              {link.icon}
            </a>
          </span>
        ))
      }
    </div>
  )
}

export default SocialLinks