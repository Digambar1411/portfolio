import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function BlogDetails() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => { 
    fetch(`/blog/${slug}.md`)
    .then((response) => response.text())
    .then((text) => setContent(text))
    .catch(() => setContent('# Blog Not Found\nThe requested blog does not exist.'));
  }, [slug]);  
  
  return (
    <div className="px-6 my-10 prose">
      <ReactMarkdown >{content}</ReactMarkdown>
    </div>
  )
}

export default BlogDetails