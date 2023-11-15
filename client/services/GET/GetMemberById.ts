import axios from 'axios'

export default async function GetMemberById(id: string) {
    try {
        const getMemberById = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/member/${id}`);
        return getMemberById.data;
    } catch(error) {
        console.log(error);
    }
};