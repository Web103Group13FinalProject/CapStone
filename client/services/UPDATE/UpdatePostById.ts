import axios from 'axios'
import {Post} from '../types'

export default function UpdatePostByid(updatedPost: Post, id: string) {
    try {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/posts/update/${id}`, updatedPost)
    } catch(error) {
        console.log(error)
    }
}