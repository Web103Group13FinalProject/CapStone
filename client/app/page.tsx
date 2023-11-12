import { Metadata } from 'next';
import React from 'react';
import "./globals.css"
import NavBar from './global/NavBar';
import GetAllPosts from '../services/GET/GetAllPosts'
import Home from './components/Home';


export const metadata: Metadata = {
  title: 'MealMaster',
  description: 'Post your meals here!',
};

export default async function Page() {

  const posts = await GetAllPosts();

  return (
    <html>
      <body>
        <NavBar/>
        <Home post={posts}/>
      </body>
  </html>
  )
}
