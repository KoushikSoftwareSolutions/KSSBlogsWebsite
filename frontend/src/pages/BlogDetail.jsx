import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
const API = import.meta.env.VITE_API_BASE_URL;
export const BlogDetail = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading,setLoading] = useState(true)  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/api/blog/${id}`);
        setBlogData(res.data.blog);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false)
      }
    };
    fetchData();
  }, [id]);

  if (!blogData) return <div className='pt-20 text-center text-gray-500 h-screen flex justify-center items-center text-2xl'>Blog not found.</div>;

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
    <>
    {loading && <Loading />}
    <div className='pt-24 px-6 md:px-20 max-w-6xl mx-auto mb-10'>
      <div className='space-y-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-sky-950 leading-tight'>{blogData.title}</h1>

        <div className='flex flex-wrap gap-3 mt-2 items-center text-sm'>
          <span className='bg-sky-200 text-sky-800 px-4 py-1 rounded-full'>
            {blogData.category[0].toUpperCase() + blogData.category.slice(1)}
          </span>
          <span className='bg-sky-200 text-sky-800 px-4 py-1 rounded-full'>
            Posted on: {formatDateTime(blogData.createdAt)}
          </span>
        </div>

        <p className='mt-2 text-gray-700 text-lg'>{blogData.shortDescription}</p>

        <div className='mt-8'>
          <img src={blogData.image} alt="" className='w-full h-[400px] object-cover rounded-2xl shadow-md' />
        </div>
      </div>
      <div className='mt-12 space-y-16'>
        {blogData.content.map((section, index) => (
          <div key={index} className='space-y-4'>
            <h2 className='text-2xl font-semibold text-sky-900'>{section.heading}</h2>
            {section.subHeading && (
              <h3 className='text-lg font-medium text-sky-800'>{section.subHeading}</h3>
            )}
            {section.image && (
              <img src={section.image} alt="" className='rounded-xl w-full max-w-3xl mx-auto' />
            )}
            <p className='text-gray-700 text-justify leading-relaxed'>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
