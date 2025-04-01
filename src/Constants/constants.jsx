const blogs = [
  {
    id: 1,
    title: 'Title for blog 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: 'a', publishDate: 'November 16, 2025'
  },
  { 
    id: 2, 
    title: 'Title for blog 2', 
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    link: 'a', 
    publishDate: 'August 16, 2024' }
]

const socialLinksArray = [
  {
    id: 'email',
    href: 'mailTo:deshawald14@gmail.com',
    icon: 'src/assets/email.svg', alt: 'email'
  },
  {
    id: 'github',
    href: 'https://github.com/Digambar1411', 
    icon: 'src/assets/email.svg', 
    alt: 'github'
  },
  { 
    id: 'linkedin', 
    href: 'https://www.linkedin.com/in/digambar-deshawal-9b279b147/', 
    icon: 'src/assets/email.svg', 
    alt: 'linkedin' 
  },
  { 
    id: 'x', 
    href: 'https://twitter.com/deshawald14', 
    icon: 'src/assets/email.svg', 
    alt: 'x' 
  },
]

const projects = [
  {
    id: 'neotube',
    title: 'Neotube- Video Streaming Platform',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: 'https://neo-tube.netlify.app/',
    startDate: 'Oct 2023',
    endDate: 'Dec 2023'
  },
]

export { blogs, socialLinksArray, projects }