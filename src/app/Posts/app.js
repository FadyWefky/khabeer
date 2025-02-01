// src/app/posts/page.js
"use client"; // Necessary for client-side interaction in the App Router

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5">All Posts</h1>
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.content}</p>
              <p className="mt-4 text-sm text-gray-500">Created at: {new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
