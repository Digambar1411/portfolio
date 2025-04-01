import React from 'react'
import { socialLinksArray } from '../Constants/constants'

function SocialLinks(props) {

  const filteredLinks = socialLinksArray.filter((link) => props.ids.includes(link.id))

  return (
    <div className='flex gap-4'>
      {
        filteredLinks.map((link) => (
          <span key={link.id}>
            <a href={`${link.href}`}>
              <img src={`${link.icon}`} alt={`${link.alt}`} className='w-4 h-4'/>
            </a>
          </span>
        ))
      }
    </div>

  )
}

export default SocialLinks