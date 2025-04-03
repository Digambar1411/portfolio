import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

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
    icon: <FaEnvelope />, 
    alt: 'email'
  },
  {
    id: 'github',
    href: 'https://github.com/Digambar1411', 
    icon: <FaGithub />, 
    alt: 'github'
  },
  { 
    id: 'linkedin', 
    href: 'https://www.linkedin.com/in/digambar-deshawal-9b279b147/', 
    icon: <FaLinkedinIn />, 
    alt: 'linkedin' 
  },
  { 
    id: 'x', 
    href: 'https://twitter.com/deshawald14', 
    icon: <FaTwitter /> ,
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