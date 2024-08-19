import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import News_page from '../Components/BlogPages';

    const Blog = () => {
        return (
            <div className='w-full'>
                <div className='flex justify-center items-start w-full'>
                <h1 className="text-3xl font-bold text-center mb-3">Blog Posts</h1>
                </div>
            
                <div className='max-w-full lg:px-24 md:px-12 px-2 mx-auto'>
                    <News_page />

                    
                </div>
               
            </div>
          )
    };

    export default Blog;