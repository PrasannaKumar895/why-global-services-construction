import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import blogPosts  from './BlogPages'

export const Slidebar = ({ blogPosts }) => {
    const [latestBlogs, setLatestBlogs] = useState([]);
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        // Sort by publication date (assume the latest are at the beginning) and take the top 5
        const sortedByDate = blogPosts.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
        setLatestBlogs(sortedByDate.slice(0, 3));

        // Sort by views (assume the most viewed are the most popular) and take the top 5
        const sortedByViews = blogPosts.sort((a, b) => b.views - a.views);
        setPopularBlogs(sortedByViews.slice(0, 3));
    }, [blogPosts]);

    return (
        <div>
            <div className=' '>
                <h3 className='text-xl font-semibold '>Latest Blogs</h3>
                <div>
                    {latestBlogs.map(blog => (
                        <div key={blog.id} className='my-5 flex justify-center w-full items-center lg:gap-3 md:gap-8 gap-8 py-2 border-b-2 px-1'>
                            <img src={blog.img} className='lg:size-20 md:size-32 lg:w-[70px] md:h-[50px] w-[70px] h-[50px] md:w-36 ' alt="" />
                            <div className='flex flex-col md:gap-6 lg:gap-1'>   <h4 className='font-medium lg:text-sm md:text-xl'>{blog.title}</h4>
                            <Link to="/" className='lg:text-xs md:text-lg pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Read More <FaArrowRight className='ml-1 mt-1' />
                            </Link></div>
                         
                        </div>
                    ))}
                </div>
            </div>
            <div className=' '>
                <h3 className='text-xl font-semibold '>Popular Blogs</h3>
                <div>
                    {popularBlogs.map(blog => (
                        <div key={blog.id} className='my-5 flex justify-center w-full items-center lg:gap-3 md:gap-8 gap-8 py-2 border-b-2 px-1'>
                            <img src={blog.img} className='lg:size-20 md:size-32 lg:w-[70px] md:h-[50px] w-[70px] h-[50px] ' alt="" />
                            <div className='flex flex-col md:gap-6 lg:gap-1'>   <h4 className='font-medium lg:text-sm md:text-xl'>{blog.title}</h4>
                            <Link to="/" className='lg:text-xs md:text-lg pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Read More <FaArrowRight className='ml-1 mt-1' />
                            </Link></div>
                         
                        </div>
                    ))}
                </div>
            </div>
          
              
        </div>
    );
};