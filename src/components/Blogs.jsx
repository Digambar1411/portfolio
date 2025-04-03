import React  from 'react'
import { blogs } from '../Constants/constants'
import Blog from './Blog'


function Blogs() {

  // const GET_BLOGS = `query Publication {
  //   publication(host: "digambar.hashnode.dev") {
  //       isTeam
  //       title
  //       posts(first: 5) {
  //           edges {
  //               node {
  //                   title
  //                   brief
  //                   url
  //                   slug
  //                   publishedAt
  //               }
  //           }
  //       }
  //   }
  // }`
  // const [blogs, setBlogs] = useState(null);
  // useEffect( () => {
  //   const fetchData = async () => {
  //     try{
  //       const data = await getBlogs(GET_BLOGS,{first: 5});
  //       console.log('data', data);
  //       setBlogs(data.data.publication.posts.edges);
  //     }catch(err){
  //       console.log('Error',  err);
  //     }
  //   }
  //   fetchData();
  // }, [])
  
  return (
    <div className='px-4 my-20 max-sm:my-10 dark:bg-gray-950 dark:text-gray-100'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>Blogs</h1>
      </div>
      <div className='flex flex-col gap-6'>
        {
          blogs?.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default Blogs