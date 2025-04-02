const blogs = [
  {
    id: 1, 
    title: `Comprehensive Beginner's Guide to CSS Flexbox`, 
    content: 'This complete guide explains about flexbox, focusing on different properties for the parent element and the child elements', 
    filename: 'a-complete-beginner-guide-to-css-flexbox', 
    publishDate: 'May 2, 2024' ,
  },
  {
    id: 2,
    title: 'Selectores in CSS',
    content: 'A complete guide covering various methods to select elements in CSS and how to use them for applying styles',
    filename: 'selectores-in-css', 
    publishDate: 'Nov 12, 2023'
  },
  {
    id: 3,
    title: 'How the web works?',
    content: 'Always wondered how web works? then this article is for you',
    filename: 'how-the-web-works', 
    publishDate: 'May 12, 2022'
  }
]

const socialLinksArray = [
  {
    id: 'email',
    href: 'mailTo:deshawald14@gmail.com',
    icon: 'https://img.icons8.com/material-outlined/48/new-post.png', 
    alt: 'email'
  },
  {
    id: 'github',
    href: 'https://github.com/Digambar1411', 
    icon: 'https://img.icons8.com/material-outlined/48/github.png', 
    alt: 'github'
  },
  { 
    id: 'linkedin', 
    href: 'https://www.linkedin.com/in/digambar-deshawal-9b279b147/', 
    icon: 'https://img.icons8.com/ios-filled/50/linkedin.png', 
    alt: 'linkedin' 
  },
  { 
    id: 'x', 
    href: 'https://twitter.com/deshawald14', 
    icon: 'https://img.icons8.com/ios/50/twitterx--v2.png', 
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