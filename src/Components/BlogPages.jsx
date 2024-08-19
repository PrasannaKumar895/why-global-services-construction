import React, { useEffect, useState } from 'react';
import Pagination from './Pagenation';
import Category from './Category';
import img_1 from '../images/ArchImgbanner.jpg';
import img_2 from '../images/ArchImg5.jpg';
import img_3 from '../images/ArchImg4.jpg';
import img_4 from '../images/ArchImg3.jpg';
import {Slidebar} from './SideBar';
import { FaUserCircle } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaCommentDots, FaStar } from 'react-icons/fa';

import { FaLocationPin } from 'react-icons/fa6';




const News_page = () => {
    const  blogPosts  = [
        {
            id: 1,
            img: img_1,
            title: 'Commercial, 4BHK',
            category: 'Commercial Construction',
            tags: ['furniture', '4bhk', 'modern design'],
            excerpt: 'This building features modern architecture with luxury amenities...',
            content: 'This is the full content of the blog post...',
            views: 150,
            likes: 20,
            rating: 4,
            author_det: { name: 'John Doe', photo: img_1, bio: 'Civil Engineering' },
            author: 'Kani',
            publicationDate: 'August 19, 2024',
            comments: [
                { id: 1, text: "Amazing work", user: "User_1", category: "Commercial Construction" },
                { id: 2, text: "Well done!", user: "User_2", category: "Commercial Construction" },
                { id: 3, text: "Excellent design!", user: "User_3", category: "Commercial Construction" },
            ]
        },
        {
            id: 2,
            img: img_2,
            title: 'Luxury Villa, 6BHK',
            category: 'Residential Construction',
            tags: ['luxury', '6bhk', 'pool'],
            excerpt: 'A luxurious villa with state-of-the-art amenities...',
            content: 'This is the full content of the blog post...',
            views: 200,
            likes: 30,
            rating: 4.5,
            author_det: { name: 'Jane Smith', photo: img_2, bio: 'Architect' },
            author: 'siraj',
            publicationDate: 'September 1, 2024',
            comments: [
                { id: 1, text: "Incredible work!", user: "User_4", category: "Residential Construction" },
                { id: 2, text: "Beautiful villa!", user: "User_5", category: "Residential Construction" },
            ]
        },
        {
            id: 3,
            img: img_3,
            title: 'High-Rise Building',
            category: 'Renovation Construction',
            tags: ['office', 'high-rise', 'glass facade'],
            excerpt: 'A modern office building with sustainable features...',
            content: 'This is the full content of the blog post...',
            views: 180,
            likes: 25,
            rating: 4.2,
            author_det: { name: 'Alice Johnson', photo: img_3, bio: 'Structural Engineer' },
            author: 'hassan',
            publicationDate: 'August 20, 2024',
            comments: [
                { id: 1, text: "Great structural design!", user: "User_6", category: "Renovation Construction" },
                { id: 2, text: "Impressive work!", user: "User_7", category: "Renovation Construction" },
            ]
        },
        {
            id: 4,
            img: img_4,
            title: 'Apartment Complex',
            category: 'Architectural Construction',
            tags: ['eco-friendly', 'apartment', 'green building'],
            excerpt: 'This apartment complex is designed with sustainability in mind...',
            content: 'This is the full content of the blog post...',
            views: 210,
            likes: 28,
            rating: 4.7,
            author_det: { name: 'Mike Lee', photo: img_4, bio: 'Environmental Engineer' },
            author: 'Sulthan',
            publicationDate: 'August 14, 2024 ',
            comments: [
                { id: 1, text: "Wonderful project!", user: "User_8", category: "Architectural Construction" },
                { id: 2, text: "Love the green initiatives!", user: "User_9", category: "Architectural Construction" },
            ]
        },
        {
            id: 5,
            img: img_1,
            title: 'Commercial, 4BHK',
            category: 'Commercial Construction',
            tags: ['furniture', '4bhk', 'modern design'],
            excerpt: 'This building features modern architecture with luxury amenities...',
            content: 'This is the full content of the blog post...',
            views: 150,
            likes: 20,
            rating: 4,
            author_det: { name: 'John Doe', photo: img_1, bio: 'Civil Engineering' },
            author: 'Kani',
            publicationDate: 'September 10, 2024',
            comments: [
                { id: 1, text: "Amazing work", user: "User_1", category: "Commercial Construction" },
                { id: 2, text: "Well done!", user: "User_2", category: "Commercial Construction" },
                { id: 3, text: "Excellent design!", user: "User_3", category: "Commercial Construction" },
            ]
        },
        {
            id: 6,
            img: img_2,
            title: 'Luxury Villa, 6BHK',
            category: 'Residential Construction',
            tags: ['luxury', '6bhk', 'pool'],
            excerpt: 'A luxurious villa with state-of-the-art amenities...',
            content: 'This is the full content of the blog post...',
            views: 200,
            likes: 30,
            rating: 4.5,
            author_det: { name: 'Jane Smith', photo: img_2, bio: 'Architect' },
            author: 'siraj',
            publicationDate: 'September 11, 2024',
            comments: [
                { id: 1, text: "Incredible work!", user: "User_4", category: "Residential Construction" },
                { id: 2, text: "Beautiful villa!", user: "User_5", category: "Residential Construction" },
            ]
        },
        {
            id: 7,
            img: img_3,
            title: 'High-Rise Building',
            category: 'Renovation Construction',
            tags: ['office', 'high-rise', 'glass facade'],
            excerpt: 'A modern office building with sustainable features...',
            content: 'This is the full content of the blog post...',
            views: 180,
            likes: 25,
            rating: 4.2,
            author_det: { name: 'Alice Johnson', photo: img_3, bio: 'Structural Engineer' },
            author: 'hassan',
            publicationDate: 'August 20, 2024',
            comments: [
                { id: 1, text: "Great structural design!", user: "User_6", category: "Renovation Construction" },
                { id: 2, text: "Impressive work!", user: "User_7", category: "Renovation Construction" },
            ]
        },
        {
            id: 8,
            img: img_4,
            title: 'Apartment Complex',
            category: 'Architectural Construction',
            tags: ['eco-friendly', 'apartment', 'green building'],
            excerpt: 'This apartment complex is designed with sustainability in mind...',
            content: 'This is the full content of the blog post...',
            views: 210,
            likes: 28,
            rating: 4.7,
            author_det: { name: 'Mike Lee', photo: img_4, bio: 'Environmental Engineer' },
            author: 'Sulthan',
            publicationDate: 'September 10, 2024',
            comments: [
                { id: 1, text: "Wonderful project!", user: "User_8", category: "Architectural Construction" },
                { id: 2, text: "Love the green initiatives!", user: "User_9", category: "Architectural Construction" },
            ]
        },
        {
            id: 9,
            img: img_1,
            title: 'Commercial, 4BHK',
            category: 'Commercial Construction',
            tags: ['furniture', '4bhk', 'modern design'],
            excerpt: 'This building features modern architecture with luxury amenities...',
            content: 'This is the full content of the blog post...',
            views: 150,
            likes: 20,
            rating: 4,
            author_det: { name: 'John Doe', photo: img_1, bio: 'Civil Engineering' },
            author: 'Kani',
            publicationDate: 'August 14, 2024',
            comments: [
                { id: 1, text: "Amazing work", user: "User_1", category: "Commercial Construction" },
                { id: 2, text: "Well done!", user: "User_2", category: "Commercial Construction" },
                { id: 3, text: "Excellent design!", user: "User_3", category: "Commercial Construction" },
            ]
        },
        {
            id: 10,
            img: img_2,
            title: 'Luxury Villa, 6BHK',
            category: 'Residential Construction',
            tags: ['luxury', '6bhk', 'pool'],
            excerpt: 'A luxurious villa with state-of-the-art amenities...',
            content: 'This is the full content of the blog post...',
            views: 2000,
            likes: 30,
            rating: 4.5,
            author_det: { name: 'Jane Smith', photo: img_2, bio: 'Architect' },
            author: 'siraj',
            publicationDate: 'September 1, 2024',
            comments: [
                { id: 1, text: "Incredible work!", user: "User_4", category: "Residential Construction" },
                { id: 2, text: "Beautiful villa!", user: "User_5", category: "Residential Construction" },
            ]
        },
        {
            id: 11,
            img: img_3,
            title: 'High-Rise Building',
            category: 'Renovation Construction',
            tags: ['office', 'high-rise', 'glass facade'],
            excerpt: 'A modern office building with sustainable features...',
            content: 'This is the full content of the blog post...',
            views: 1800,
            likes: 25,
            rating: 4.2,
            author_det: { name: 'Alice Johnson', photo: img_3, bio: 'Structural Engineer' },
            author: 'hassan',
            publicationDate: 'August 20, 2024',
            comments: [
                { id: 1, text: "Great structural design!", user: "User_6", category: "Renovation Construction" },
                { id: 2, text: "Impressive work!", user: "User_7", category: "Renovation Construction" },
            ]
        },
        {
            id: 12,
            img: img_4,
            title: 'Apartment Complex',
            category: 'Architectural Construction',
            tags: ['eco-friendly', 'apartment', 'green building'],
            excerpt: 'This apartment complex is designed with sustainability in mind...',
            content: 'This is the full content of the blog post...',
            views: 210,
            likes: 28,
            rating: 4.7,
            author_det: { name: 'Mike Lee', photo: img_4, bio: 'Environmental Engineer' },
            author: 'Sulthan',
            publicationDate: 'September 10, 2024',
            comments: [
                { id: 1, text: "Wonderful project!", user: "User_8", category: "Architectural Construction" },
                { id: 2, text: "Love the green initiatives!", user: "User_9", category: "Architectural Construction" },
            ]
        }
    ];

    const [blogs, setBlogs] = useState(blogPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4; // Blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const filteredBlogs = selectedCategory
            ? blogPosts.filter(blog => blog.category === selectedCategory)
            : blogPosts;
        setBlogs(filteredBlogs);
    }, [selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page on category change
    };

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedBlogs = blogs.slice(startIndex, startIndex + pageSize);
    const [selectedPost, setSelectedPost] = useState(null);

    // Initialize state for comments, likes, and ratings
    const [comments, setComments] = useState(
        blogs.reduce((acc, post) => {
            acc[post.id] = post.comments || [];
            return acc;
        }, {})
    );
    const [likes, setLikes] = useState(
        blogs.reduce((acc, post) => {
            acc[post.id] = post.likes || 0;
            return acc;
        }, {})
    );
    const [rating, setRating] = useState(
        blogs.reduce((acc, post) => {
            acc[post.id] = post.rating || 0;
            return acc;
        }, {})
    );

    const [commentInput, setCommentInput] = useState('');

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleBackToList = () => {
        setSelectedPost(null);
        setCommentInput('');
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            id: comments[selectedPost.id].length + 1,
            text: commentInput,
            user: selectedPost.author, // Using the author as the user
            category: selectedPost.category,
        };

        setComments((prevComments) => ({
            ...prevComments,
            [selectedPost.id]: [...prevComments[selectedPost.id], newComment],
        }));

        setCommentInput('');
    };

    const handleLikeClick = (postId) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [postId]: prevLikes[postId] + 1,
        }));
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
        ));
    };

    return (
        <div className='w-full flex flex-col lg:flex-row lg:gap-24 md:gap-4 p-4'>
        <div className='w-full lg:w-3/4'>
    
      
    
           
        < >
            {!selectedPost ? (
                <>
                 <Category
                 onSelectCategory={handleCategoryChange}
                 selectedCategory={selectedCategory}
             />
             
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full px-2 lg:px-10" >
                
                    {paginatedBlogs.map((blog) => (
                        <div
                            className="flex flex-col justify-between border shadow-lg rounded-md p-4"
                            key={blog.id}
                        >
                            <div className="w-full rounded-md overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="w-full mt-2">
                                <h3 className="text-xl font-bold mb-2 lg:text-2xl">{blog.title}</h3>
                                <p className="mb-2 text-gray-600 flex items-center">
                                    <FaUserCircle className="inline mr-2" />
                                    {blog.author}
                                </p>
                                <p className="text-sm text-gray-500 mb-1">{blog.category}</p>
                                <p className="text-sm text-gray-500">Published: {blog.publicationDate}</p>
                                <button
                                    className="border cursor-pointer bg-orange-600 text-white hover:bg-white hover:text-orange-600 border-orange-600 px-3 py-1 mt-4 rounded-full text-sm lg:text-base"
                                    onClick={() => handlePostClick(blog)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                      <div className='flex items-center justify-center'>  

                      <Pagination
                onPageChange={handlePageChange}
                totalItems={blogs.length}
                currentPage={currentPage}
                pageSize={pageSize}
            /></div>
                </div>
                </>
            ) : (
                <div className="">
                    <div className="">
                        <button
                            onClick={handleBackToList}
                            className="text-white bg-orange-600 fixed top-20 left-9 px-4 py-1 rounded-md z-50 hover:bg-gray-300 hover:text-white mb-4"
                        >
                            Back to Blog List
                        </button>
                        <h1 className="text-3xl font-bold mt-4 mb-4">{selectedPost.title}</h1>
                        <div
                            className="bg-cover bg-center h-96 w-[700px] relative"
                            style={{ backgroundImage: `url(${selectedPost.img})`}}
                        >
                            <div className="absolute top-3 right-3 bg-white flex rounded-lg items-center px-2 py-1">
                                <FaLocationPin className="text-orange-600" />
                                <p className="text-black text-sm">Anna Nagar</p>
                            </div>
                        </div>
                       <div className='w-[700px]'>
                       <p className="text-lg font-medium text-gray-600">{selectedPost.category}</p>
                        <p className="text-gray-700">{selectedPost.content}</p>
                        <p className="font-light py-2 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                            adipisci fuga obcaecati excepturi dolores unde sit facilis labore
                            architecto, earum nisi aut quam dolore in rerum veritatis sunt
                            quisquam non.
                        </p>
                        <p className="font-light text-justify py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            ipsa molestiae veniam dolorum odio laboriosam, sint numquam alias
                            beatae. Quod, modi molestiae unde doloremque totam voluptatem nemo
                            inventore ipsam ipsum.
                        </p>

                        <div className="flex space-x-4 py-2">
                            <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-800" />
                            <FaTwitter className="text-blue-400 cursor-pointer hover:text-blue-600" />
                            <FaLinkedin className="text-blue-700 cursor-pointer hover:text-blue-900" />
                        </div>
                       </div>

                        <div className="w-[700px]">
                            <h2 className="text-xl font-bold mb-1">Comments</h2>
                            <div className="flex flex-col gap-5">
                                <form onSubmit={handleCommentSubmit} className="mb-2 w-[70%] flex flex-col">
                                    <textarea
                                        className="p-4 border rounded-lg shadow-md"
                                        rows="5"
                                        placeholder="Leave a comment..."
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                                <div className="flex w-[90%] h-56 p-4 overflow-y-auto flex-col">
                                    {comments[selectedPost.id] && comments[selectedPost.id].length > 0 ? (
                                        comments[selectedPost.id].map((comment) => (
                                            <div
                                                key={comment.id}
                                                className="comment bg-gray-100 p-4 rounded-lg shadow-md mb-4"
                                            >
                                                <FaCommentDots className="text-blue-600 inline mr-2" />
                                                <strong>{comment.user}</strong> -{" "}
                                                <span className="text-gray-600">{comment.category}</span>
                                                <p className="text-gray-700 mt-2 px-6">{comment.text}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-600">No comments yet. Be the first to comment!</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} 

        </>
    
        </div>

        <div className='w-full lg:w-1/4'>
            <Slidebar blogPosts={blogPosts} />
        </div>
    </div>
    );
};

export default News_page;