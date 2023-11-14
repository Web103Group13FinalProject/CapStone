import { Metadata } from 'next';
import React from 'react';
import Navbar from '../global/Navbar';

export const metadata: Metadata = {
  title: 'MealMaster',
  description: 'Post your meals here!',
};

export default async function Page() {

  return (
    <html>
      <body>
        <Navbar />
      </body>
  </html>
  )
}