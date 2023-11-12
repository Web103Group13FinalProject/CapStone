import axios from 'axios'

export default function DeleteMemberById(id: string) {
    try {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/member/delete/${id}`)
    } catch(error) {
        console.log(error)
    }
}
