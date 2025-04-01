import React from 'react'

function SocialLinks(props) {

  const socialLinksArray = [
    {id:'email',href:'mailTo:deshawald14@gmail.com', icon:'src/assets/email.svg', alt:'email'},
    {id:'github',href:'https://github.com/Digambar1411', icon:'src/assets/email.svg', alt:'github'},
    {id:'linkedin',href:'https://www.linkedin.com/in/digambar-deshawal-9b279b147/', icon:'src/assets/email.svg', alt:'linkedin'},
    {id:'x',href:'https://twitter.com/deshawald14', icon:'src/assets/email.svg', alt:'x'},
  ]

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