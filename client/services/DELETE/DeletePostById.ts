import axios from 'axios'

export default function DeletePostById(id: string) {
    try {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/delete/${id}`)
    } catch(error) {
        console.log(error)
    }
}