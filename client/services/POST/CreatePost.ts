import axios from 'axios'
import {Post} from '../types'

export default function CreatePost(newPost: Post) {
    try {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts/create`, newPost)
    } catch(error) {
        console.log(error)
    }
}