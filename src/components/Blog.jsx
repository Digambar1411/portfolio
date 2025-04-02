
function Blog({blog}) {

  return (
    <article key={blog.id} className='p-4 border-transparent hover:border hover:border-black hover:transition rounded-xl shadow-md border gap-4 items-start hover:box-border h-30'>
      <a href={`https://digambar.hashnode.dev/${blog.filename}`} className='flex justify-between' target="__blank">
        <div className='w-[80%]'>
          <h1 className='font-gray-700 text-xl'>{blog.title}</h1>
          <p className='text-gray-600 font-light my-1'>{blog.content}</p>
        </div>
        <p className='text-gray-600 font-light text-sm'>{blog.publishDate}</p>
      </a>
    </article>
  )
}

export default Blog