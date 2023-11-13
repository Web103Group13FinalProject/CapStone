import axios from 'axios'

export default async function GetPostsFromMember(id: string) {
    try {
        const getPostsFromMember = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/member/${id}`);
        return getPostsFromMember.data;
    } catch (error) {
        console.log(error);
    }
};