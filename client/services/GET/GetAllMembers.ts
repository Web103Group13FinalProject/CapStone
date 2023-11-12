import axios from 'axios'

export default async function GetAllMembers() {
    try {
        const getAllMembers = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/member`)
        return getAllMembers.data
    } catch(error) {
        console.log(error)
    }
}