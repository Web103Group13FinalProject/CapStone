import axios from 'axios'

export default async function GetPostById(id: string) {
    try {
        const getPostById = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
        return getPostById.data
    } catch(error) {
        console.log(error)
    }
}