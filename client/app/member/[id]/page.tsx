import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../global/Navbar';
import GetMemberById from '../../../services/GET/GetMemberById'
import GetPostsFromMember from '../../../services/GET/GetPostsFromMember'
import MemberProfile from './components/MemberProfile';


export const metadata: Metadata = {
  title: 'MealMaster | Profile',
  description: 'Post your meals here!',
};

export default async function Page({ params }: { params: { id: string } }) {

  const member = await GetMemberById(params.id);
  const posts = await GetPostsFromMember(params.id);

  return (
    <html>
      <body>
        <Navbar />
        <MemberProfile member={member} posts={posts} />
      </body>
  </html>
  )
}