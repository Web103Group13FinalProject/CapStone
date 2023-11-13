import { Metadata } from 'next';
import React from 'react';
import "./globals.css"
import NavBar from '../../global/NavBar';
import GetMemberById from '../../../services/GET/GetMemberById'
import GetPostsFromMember from '../../../services/GET/GetPostsFromMember'
import MemberById from './components/memberById';


export const metadata: Metadata = {
  title: 'MealMaster',
  description: 'Post your meals here!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const member = await GetMemberById(params.id);
  const posts = await GetPostsFromMember(params.id);

  return (
    <html>
      <body>
        <NavBar/>
        <MemberById member={member} posts={posts} />
      </body>
  </html>
  )
}