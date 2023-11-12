import { Metadata } from 'next';
import React from 'react';
import "./globals.css"
import NavBar from '../global/NavBar';


export const metadata: Metadata = {
  title: 'MealMaster',
  description: 'Post your meals here!',
};

export default async function Page() {

  return (
    <html>
      <body>
        <NavBar/>
      </body>
  </html>
  )
}