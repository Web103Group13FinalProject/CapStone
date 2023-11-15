import { Metadata } from 'next';
import React from 'react';
import Navbar from './global/Navbar';
import GetAllPosts from '../services/GET/GetAllPosts'
import Home from './components/Home';

export const metadata: Metadata = {
  title: 'MealMaster | Home',
  description: 'Post your meals here!',
};

export default async function Page() {

  const posts = await GetAllPosts();

  return (
    <html>
      <body>
        <Navbar />
        <Home posts={posts}/>
      </body>
  </html>
  )
}
