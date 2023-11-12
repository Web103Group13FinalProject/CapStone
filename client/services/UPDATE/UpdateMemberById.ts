import axios from 'axios'
import {Member} from '../types'

export default function UpdateMemberById(updatedMember: Member, id: string) {
    try {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/member/update/${id}`, updatedMember)
    } catch(error) {
        console.log(error)
    }
}