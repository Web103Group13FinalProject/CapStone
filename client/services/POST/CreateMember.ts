import axios from 'axios'
import {Member} from '../types'

export default function CreateMember(newMember: Member) {
    try {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/member/create`, newMember)
    } catch(error) {
        console.log(error)
    }
}
