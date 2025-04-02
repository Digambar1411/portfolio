import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function BlogDetails() {
  const { filename } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => { 
    fetch(`/blog/${filename}.md`)
    .then((response) => response.text())
    .then((text) => setContent(text))
    .catch(() => setContent('# Blog Not Found\nThe requested blog does not exist.'));
  }, [filename]);  
  
  return (
    <div className="px-6 my-10 prose">
      <ReactMarkdown >{content}</ReactMarkdown>
    </div>
  )
}

export default BlogDetails