import axios from 'axios'

export default async function GetAllPosts() {
    try {
        const getAllPosts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        return getAllPosts.data
    } catch(error) {
        console.log(error)
    }
}