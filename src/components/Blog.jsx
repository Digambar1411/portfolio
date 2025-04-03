
function Blog({blog}) {

  return (
    <article key={blog.id} className='p-4 h-30 hover:transition rounded-xl shadow-md gap-4 items-start border border-transparent dark:text-gray-100 dark:border-gray-500! hover:border hover:border-black! hover:dark:border-gray-200!'>
      <a href={`https://digambar.hashnode.dev/${blog.filename}`} className='flex justify-between' target="__blank">
        <div className='w-[80%]'>
          <h1 className='font-gray-700 text-xl'>{blog.title}</h1>
          <p className='text-gray-500 dark:text-gray-400 font-light my-1'>{blog.content}</p>
        </div>
        <p className='text-gray-500 dark:text-gray-400 font-light text-sm'>{blog.publishDate}</p>
      </a>
    </article>
  )
}

export default Blog