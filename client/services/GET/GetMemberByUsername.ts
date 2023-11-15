import axios from 'axios'

export default async function GetMemberByUsername(username: string) {
    try {
        const getMemberByUsername = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/member/${username}`);
        return getMemberByUsername.data;
    } catch(error) {
        console.log(error);
    }
};