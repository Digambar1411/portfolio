
function Blog({blog}) {

  return (
    <article key={blog.id} className='p-4 min-h-28 hover:transition rounded-xl shadow-md gap-4 items-start border border-transparent dark:text-gray-100 dark:border-gray-500! hover:border hover:border-black! hover:dark:border-gray-200!'>
      <a href={`https://digambar.hashnode.dev/${blog.filename}`} target="__blank">
        <div className='sm:flex justify-between'>
          <h1 className='sm:w-[80%] font-gray-700 text-xl'>{blog.title}</h1>
          <p className='text-gray-500 dark:text-gray-400 font-light text-sm'>{blog.publishDate}</p>
        </div>
        <p className='text-gray-500 dark:text-gray-400 font-light my-1 sm:w-[85%]'>{blog.content}</p>
      </a>
    </article>
  )
}

export default Blog