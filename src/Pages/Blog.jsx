import React, { useState } from 'react';
    import { FaFacebook, FaTwitter, FaLinkedin, FaCommentDots, FaEye, FaThumbsUp, FaStar } from 'react-icons/fa';
    import img_1 from '../images/IMG8.jpg';
import img_2 from '../images/IMG7Hover.jpg';
import img_3 from '../images/IMG7.jpg';
import img_4 from '../images/IMG6.jpg';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import {  FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { IoCallOutline } from "react-icons/io5";

 

     
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
            publicationDate: 'August 14, 2024',
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
            title: 'High-Rise Office Building',
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
            publicationDate: 'September 10, 2024',
            comments: [
                { id: 1, text: "Wonderful project!", user: "User_8", category: "Architectural Construction" },
                { id: 2, text: "Love the green initiatives!", user: "User_9", category: "Architectural Construction" },
            ]
        }
    ];
    

    const Blog = () => {
        const [selectedPost, setSelectedPost] = useState(null);
        // const [comments, setComments] = useState({});
        const [comments, setComments] = useState(
            blogPosts.reduce((acc, post) => {
                acc[post.id] = post.comments || [];
                return acc;
            }, {})
        );
        const [commentInput, setCommentInput] = useState('');
        const [likes, setLikes] = useState(
            blogPosts.reduce((acc, post) => {
                acc[post.id] = post.likes;
                return acc;
            }, {})
        );
        const [rating, setRating] = useState(
            blogPosts.reduce((acc, post) => {
                acc[post.id] = post.rating;
                return acc;
            }, {})
        );

        const handlePostClick = (post) => {
            setSelectedPost(post);
        };

        const handleBackToList = () => {
            setSelectedPost(null);
            setCommentInput('');
        };

        // const handleCommentSubmit = (e) => {
        //     e.preventDefault();
        //     if (commentInput.trim() === '') return;

        //     setComments((prevComments) => ({
        //         ...prevComments,
        //         [selectedPost.id]: [
        //             ...(prevComments[selectedPost.id] || []),
        //             { id: Date.now(), text: commentInput },
        //         ],
        //     }));

        //     setCommentInput('');
        // };

        const handleCommentSubmit = (e) => {
            e.preventDefault();
            const newComment = {
                id: comments[selectedPost.id].length + 1,
                text: commentInput,
                user: selectedPost.author,  // Using the author as the user
                category: selectedPost.category
            };
        
            setComments((prevComments) => ({
                ...prevComments,
                [selectedPost.id]: [...prevComments[selectedPost.id], newComment]
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
            <div className=" px-5 py-8 max-w-full w-full ">
            
              
                 <div className='flex lg:flex-col '>
                       <div className="flex w-full lg:flex-row justify-center items-center flex-col  gap-3">
                        <div className="lg:w-[70%] w-full ">
                        {!selectedPost ? (
                            <>
                            <h1 className="text-3xl font-bold text-center mb-3">Blog Posts</h1>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  px-10 gap-10">
    {blogPosts.slice(0, 4).map((post) => (
        <div key={post.id} className="flex w-full flex-col justify-center border shadow-lg rounded  p-2">
            <div className="w-full rounded-md overflow-hidden">
                <img
                    src={post.img}
                    alt=""
                    className="w-full lg:h-50 md:h-40 h-30 object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="w-full lg:p-4 p-2 mt-1">
                <h2 className="lg:text-2xl text-lg font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-1">{post.category}</p>
                <p className="text-gray-700">{post.excerpt}</p>
                <div className="mt-2 flex lg:space-x-4 space-x-2 items-center">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-600 rounded-full px-2 py-1"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex justify-between lg:gap-10 gap-5 items-center">
                    <div className="flex items-center lg:gap-3  gap-1">
                        {renderStars(rating[post.id])}
                    </div>
                    <button
                        onClick={() => handlePostClick(post)}
                        className="border cursor-pointer bg-orange-600 font-normal text-white hover:bg-white hover:text-orange-600  border-orange-600 lg:px-3 px-2 py-1 rounded-3xl lg:text-sm text-xs"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>
                            </>   ) : (
                    <div className="px-4">
                        <div className="">
                            <button
                                onClick={handleBackToList}
                                className="text-white bg-orange-600 fixed top-20 left-9 px-4 py-1 rounded-md z-50  hover:bg-gray-900 hover:text-white  mb-4"
                            >
                                 Back to Blog List
                            </button>
                            <h1 className="text-3xl font-bold mt-4 mb-4">{selectedPost.title}</h1>
                            {/* <img src={selectedPost.img} alt="" /> */}
                            <div className='bg-cover bg-center h-96 relative' style={{ backgroundImage: `url(${selectedPost.img}) `}}>
                                <div className='absolute  top-3 right-3 bg-white flex rounded-lg items-center px-2 py-1'>
                                    < FaLocationPin className='text-orange-600' />
                                    <p className='text-black text-sm'>Anna Nagar</p>
                                </div>
                     </div>

                            <p className="text-lg font-medium  text-gray-600">{selectedPost.category}</p>
                            <p className="text-gray-700">{selectedPost.content}</p>
                            <p className='font-light py-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci fuga obcaecati excepturi dolores unde sit facilis labore architecto, earum nisi aut quam dolore in rerum veritatis sunt quisquam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa molestiae veniam dolorum odio laboriosam, sint numquam </p>
                            <p className='font-light text-justify py-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa molestiae veniam dolorum odio laboriosam, sint numquam alias beatae. Quod, modi molestiae unde doloremque totam voluptatem nemo inventore ipsam ipsum.</p>

                           
                            <div className="flex space-x-4 py-2">
                                <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-800" />
                                <FaTwitter className="text-blue-400 cursor-pointer hover:text-blue-600" />
                                <FaLinkedin className="text-blue-700 cursor-pointer hover:text-blue-900" />
                            </div>

                        
                            {/* <div className="comment-section">
                                <h2 className="text-xl font-bold mb-1">Comments</h2>
                                <div className='flex flex-col gap-5'>
                                <form onSubmit={handleCommentSubmit} className="mb-2 w-1/2 flex flex-col">
                                    <textarea
                                        className=" p-4 border rounded-lg shadow-md"
                                        rows="5"
                                        placeholder="Leave a comment..."
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-blue-600  text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                                <div className='flex w-[70%] flex-col'>
                                {comments[selectedPost.id] && comments[selectedPost.id].length > 0 ? (
                                    comments[selectedPost.id].map((comment) => (
                                        <div
                                            key={comment.id}
                                            className="comment bg-gray-100 p-4 rounded-lg shadow-md mb-4"
                                        >
                                            <FaCommentDots className="text-blue-600 inline mr-2" />
                                            <strong>Anonymous</strong>
                                            <p className="text-gray-700 mt-2">{comment.text}</p>
                                        </div>
                                    ))
                                
                                ) : (
                                    <p className="text-gray-600">No comments yet. Be the first to comment!</p>
                                )}

                                </div>
                              
                            
                                </div>
                              
                            </div> */}
                             <div className="comment-section">
        <h2 className="text-xl font-bold mb-1">Comments</h2>
        <div className='flex flex-col gap-5'>
            <form onSubmit={handleCommentSubmit} className="mb-2 w-1/2 flex flex-col">
                <textarea
                    className=" p-4 border rounded-lg shadow-md"
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
            <div className='flex w-[90%] h-56 p-4 overflow-y-auto flex-col'>
                {comments[selectedPost.id] && comments[selectedPost.id].length > 0 ? (
                    comments[selectedPost.id].map((comment) => (
                        <div
                            key={comment.id}
                            className="comment bg-gray-100 p-4 rounded-lg shadow-md mb-4"
                        >
                            <FaCommentDots className="text-blue-600 inline mr-2" />
                            <strong>{comment.user}</strong> - <span className="text-gray-600">{comment.category}</span>
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
                            
                       

                        </div>

                        <div className="lg:w-[30%] w-full lg:p-0 p-4">
            
                            <div>
                                <h3 className="text-xl font-bold lg:mt-3 mt-5 lg:mb-0 mb-4 ">Recent Posts</h3>
                                <div className='grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:gap-1 gap-4  mx-auto  justify-center items-center  '>
                                    {blogPosts.map((post) => (
                                        <div key={post.id} className='flex lg:w-full w-full items-center lg:px-0 px-10 lg:gap-10 gap-4 pb-2  border-b-2 border-orange-600'>
                                            <img src={post.img} className='h-28 w-[150px]  ' alt="" />
                                            <div>
                                                <h6 className='text-[1rem] font-medium'>{post.category}</h6>
                                                <p className=' text-sm font-light'>{post.content}</p>
                                                <Link to="/" className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Read More <FaArrowRight className='mt-1 ml-2' />
                            </Link>
                                            </div>
                                              
                                        </div>
                                      
                                    ))}
                                </div>
                            </div>
                            
                            <div className="lg:w-full   mt-10 flex flex-col items-center justify-center gap-6 lg:p-6 p-10  rounded-lg  shadow-lg border bg-gray-800 text-white">
          <h4 className="text-center font-extralight lg:text-3xl ">Make a call for any query.</h4>
          <div className="bg-white p-4 rounded-full text-orange-500 mb-1 cursor-pointer hover:bg-orange-600 hover:text-white">
            < IoCallOutline className="text-3xl md:text-4xl" />
          </div>
          <h2 className="text-2xl lg:text-2xl">+1-800-555-5555</h2>
        </div>

<div className="mt-10 flex space-x-6 text-xl md:text-2xl justify-center">
              <a href="#" className="text-orange-600 p-2 border-2 rounded-md border-orange-600 hover:text-white hover:bg-orange-600"><FaTwitter /></a>
              <a href="#" className="text-orange-600 p-2 border-2 rounded-md border-orange-600 hover:text-white hover:bg-orange-600"><FaFacebook /></a>
              <a href="#" className="text-orange-600 p-2 border-2 rounded-md border-orange-600 hover:text-white hover:bg-orange-600"><FaYoutube /></a>
              <a href="#" className="text-orange-600 p-2 border-2 rounded-md border-orange-600 hover:text-white hover:bg-orange-600"><FaInstagram /></a>
              <a href="#" className="text-orange-600 p-2 border-2 rounded-md border-orange-600 hover:text-white hover:bg-orange-600"><FaLinkedinIn /></a>
            </div>


                        </div>
                    </div>
                 
                 </div>
             
                <div>
                <div className=' flex flex-col justify-center items-center mt-5 gap-5 p-4 '>
                                <h3 className="text-2xl font-bold mt-3 ">Popular Posts</h3>
                                <div className='grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-10 gap-x-16 '>
                                    {blogPosts.map((post) => (
                                        <div key={post.id} className='flex items-center gap-5 pb-2  border-b-2 border-orange-600'>
                                            <img src={post.img} className='h-28 w-[150px] ' alt="" />
                                            <div>
                                                <h6 className='text-xl font-medium mb-3'>{post.title}</h6>
                                                <p className=' text-sm font-light'>{post.content}</p>
                                                <Link to="/" className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Read More <FaArrowRight className='mt-1 ml-2' />
                            </Link>
                                            </div>
                                              
                                        </div>
                                      
                                    ))}
                                </div>
                            </div>
                    
                </div>
            </div>
        );
    };

    export default Blog;