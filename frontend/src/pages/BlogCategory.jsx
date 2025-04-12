import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const API = import.meta.env.VITE_API_BASE_URL;
const BlogCategory = () => {
  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams();
  const categoryTitles = {
    business: {
      title: "Business",
      description:
        '"Ideas that fuel your entrepreneurial journey. Insights for the business-minded."',
    },
    tech: {
      title: "Tech",
      description: '"Latest trends and insights from the tech world."',
    },
    career: {
      title: "Career",
      description:
        '"Tips and advice to boost your professional journey and success."',
    },
    job: {
      title: "Jobs",
      description: '"Opportunities and guidance to land your dream job."',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // <-- Add this line to show loading when category changes
        const response = await axios.get(`${API}/api/blog/category/${category}`);
        setBlog(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);
  

  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('en-IN', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }).format(date);
  };
  
  return (
    <div>
      {loading && <Loading />}
      <div className='pt-20 m-10 max-sm:mx-4'>
        <div className='flex gap-4 items-end max-sm:flex-col max-sm:items-start'>
          <h1 className='text-8xl max-sm:text-7xl text-sky-950'>
            {categoryTitles[category]?.title || "Blog"}
          </h1>
          <p className='font-light italic text-sm text-sky-900'>
            -{categoryTitles[category]?.description || "Explore insightful articles."}
          </p>
        </div>
        {blog.length > 0 && (
          <div className='mt-10 flex justify-around gap-20 flex-wrap'>
            <Link to={`/blog/${blog[0]._id}`}>
              <div className='max-w-3xl'>
                <img src={blog[0].image} alt={blog[0].title} className='rounded-lg shadow-xl w-full' />
                <p className='text-gray-600 italic mt-2 text-xs'>{formatDateTime(blog[0].createdAt)}</p>
                <h1 className='text-2xl mt-4 font-medium'>{blog[0].title}</h1>
                <p className='text-sm'>{blog[0].shortDescription}</p>
              </div>
            </Link>
            <div className='flex flex-col gap-4'>
              {blog.slice(1, 6).map((data) => (
                <Link key={data._id} to={`/blog/${data._id}`}>
                  <div className='flex gap-4'>
                    <img src={data.image} alt={data.title} className='w-40 h-24 object-cover rounded-lg' />
                    <div>
                      <h1 className='text-lg font-medium max-sm:text-sm'>{data.title}</h1>
                      <p className='text-sm max-sm:text-xs'>{data.shortDescription}</p>
                      <p className='text-xs text-gray-500 italic'>{formatDateTime(data.createdAt)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default BlogCategory;
